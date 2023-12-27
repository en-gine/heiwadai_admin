"use client"

import { JsonValue, Timestamp } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback } from "react"

import { AdminCouponController } from "@/api/v1/admin/Coupon_connect"
import { Coupon } from "@/api/v1/shared/Coupon_pb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { useGrpc } from "@/hooks/api/useGrpc"

const SubmitType = {
  Save: "save",
  Issue: "delete"
} as const

type Props = {
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(AdminCouponController)
  const coupon = data ? Coupon.fromJson(data) : undefined
  const isNew = data === undefined
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const { submitter } = event.nativeEvent as SubmitEvent
      const { value: submitType } = submitter as HTMLButtonElement
      const name = formData.get("name") as string
      const discountAmount = formData.get("discountAmount") as string
      const isCombinationable = formData.get("is-conbinationable") as string
      const expireAt = dayjs(formData.get("expireAt") as string).toDate()
      const notice = formData.get("notice") as string

      if (!submitType) return
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (isNew) {
              const res = await client.createCustomCoupon({
                Name: name,
                DiscountAmount: Number(discountAmount),
                IsCombinationable: isCombinationable === "true",
                ExpireAt: Timestamp.fromDate(expireAt),
                Notices: [notice]
              })
              alert("保存しました。")
              router.push(`./${res.ID}}`)
              return
            }
            await client.saveCustomCoupon({
              ID: coupon?.ID,
              Name: name,
              DiscountAmount: Number(discountAmount),
              IsCombinationable: isCombinationable === "true",
              ExpireAt: Timestamp.fromDate(expireAt),
              Notices: [notice]
            })
            alert("更新しました。")
            return
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [client, isNew, coupon?.ID, router]
  )
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name" className="required">
        クーポン名
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        maxLength={10}
        defaultValue={coupon?.Name}
        className="w-full"
      />
      {coupon?.CreateAt && (
        <div className="text-right">
          作成日:
          {dayjs(coupon?.CreateAt.toDate()).format("YYYY年MM月DD日 HH:mm")}
        </div>
      )}
      <Label htmlFor="discountAmount" className="required">
        値引額
      </Label>
      <Input
        id="discountAmount"
        name="discountAmount"
        className="w-full"
        type="number"
        defaultValue={coupon?.DiscountAmount}
      />
      <div className="float-left">円引き</div>
      <Label htmlFor="expireAt" className="required">
        期限
      </Label>
      <Input
        id="expireAt"
        name="expireAt"
        className="w-full"
        type="date"
        defaultValue={
          coupon?.ExpireAt
            ? dayjs(coupon.ExpireAt.toDate()).format("YYYY-MM-DD")
            : dayjs().format("YYYY-MM-DD")
        }
      />
      <div className="float-left">まで</div>
      <Label htmlFor="display-date">宿泊可否</Label>
      <RadioGroup
        required
        defaultValue={coupon?.IsCombinationable ? "true" : "false"}
        name="is-combinationable"
        className="flex justify-start mt-4"
      >
        <RadioGroupItem value="true" id="is-combinationable-1" />
        <Label htmlFor="is-combinationable-1" className="mr-4">
          可
        </Label>
        <RadioGroupItem value="false" id="is-combinationable-2" />
        <Label htmlFor="is-combinationable-2">不可</Label>
      </RadioGroup>
      <Textarea defaultValue={coupon?.Notices} />
      <div className="flex gap-20 justify-center mt-7">
        <Button
          type="submit"
          variant="default"
          name="submit-type"
          value={SubmitType.Save}
        >
          保存
        </Button>
        <Button
          type="submit"
          name="submit-type"
          value={SubmitType.Issue}
          variant="destructive"
        >
          発行
        </Button>
      </div>
    </form>
  )
}
