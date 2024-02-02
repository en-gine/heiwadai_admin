"use client"

import { JsonValue, Timestamp } from "@bufbuild/protobuf"
import { useMutation } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { FormEvent, useCallback, useMemo, useState } from "react"

import {
  attachCustomCouponToAllUser,
  createCustomCoupon,
  saveCustomCoupon
} from "@/api/v1/admin/Coupon-AdminCouponController_connectquery"
import { Coupon } from "@/api/v1/shared/Coupon_pb"
import { StoreMultiSelect } from "@/components/parts/storeMultiSelect"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

const SubmitType = {
  Save: "save",
  Issue: "issue"
} as const

export type Notice = {
  id: number
  notice: string
}
type Props = {
  data?: JsonValue
  defaultNotices: Notice[]
}

export const Form = ({ data, defaultNotices }: Props) => {
  const defaultData = data ? Coupon.fromJson(data) : undefined

  const defaultCoupon = useMemo(
    () => ({
      ...defaultData,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      TargetStoresID: defaultData?.TargetStore?.map((store) => store.ID)
    }),
    [defaultData]
  )
  const isNew = data === undefined
  const router = useRouter()
  const { mutate: save } = useMutation(saveCustomCoupon)
  const { mutate: create } = useMutation(createCustomCoupon)
  const { mutate: issue } = useMutation(attachCustomCouponToAllUser)

  const [updateCoupon, setUpdateCoupon] =
    useState<typeof defaultCoupon>(defaultCoupon)

  const [updateNotices, updateSetNotices] =
    useState<typeof defaultNotices>(defaultNotices)

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (isNew) {
        create(
          {
            Name: updateCoupon.Name,
            DiscountAmount: updateCoupon.DiscountAmount,
            ExpireAt: updateCoupon.ExpireAt,
            IsCombinationable: updateCoupon.IsCombinationable,
            Notices: updateNotices.map((notice) => notice.notice),
            // eslint-disable-next-line @typescript-eslint/naming-convention
            TargetStoresID: updateCoupon.TargetStoresID
          },
          {
            onSuccess: (res) => {
              router.push(`/dashboard/coupon/${res.ID}`)
            },
            onError: (err) => {
              alert("エラーが発生しました")
              console.error(err)
            }
          }
        )
      }
      if (event.currentTarget.submitType.value === SubmitType.Save) {
        save(
          {
            ID: updateCoupon.ID,
            Name: updateCoupon.Name,
            DiscountAmount: updateCoupon.DiscountAmount,
            ExpireAt: updateCoupon.ExpireAt,
            IsCombinationable: updateCoupon.IsCombinationable,
            Notices: updateNotices.map((notice) => notice.notice),
            // eslint-disable-next-line @typescript-eslint/naming-convention
            TargetStoresID: updateCoupon.TargetStoresID
          },
          {
            onSuccess: () => {
              alert("保存しました")
            },
            onError: (err) => {
              alert("エラーが発生しました")
              console.error(err)
            }
          }
        )
      }
      if (event.currentTarget.submitType.value === SubmitType.Issue) {
        issue(
          {
            ID: updateCoupon.ID
          },
          {
            onSuccess: () => {
              alert("発行しました")
            },
            onError: (err) => {
              alert("エラーが発生しました")
              console.error(err)
            }
          }
        )
      }
    },
    [
      isNew,
      create,
      updateCoupon.Name,
      updateCoupon.DiscountAmount,
      updateCoupon.ExpireAt,
      updateCoupon.IsCombinationable,
      updateCoupon.TargetStoresID,
      updateCoupon.ID,
      updateNotices,
      router,
      save,
      issue
    ]
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
        value={updateCoupon?.Name}
        className="w-full"
        onChange={(e) => {
          setUpdateCoupon({ ...updateCoupon, Name: e.target.value })
        }}
      />
      {defaultCoupon?.CreateAt && (
        <div className="text-right">
          作成日:
          {dayjs(defaultCoupon?.CreateAt.toDate()).format(
            "YYYY年MM月DD日 HH:mm"
          )}
        </div>
      )}
      <Label htmlFor="discountAmount" className="required">
        値引額
      </Label>
      <div className="flex justify-start gap-4">
        <Input
          id="discountAmount"
          name="discountAmount"
          className="w-auto"
          type="number"
          value={updateCoupon.DiscountAmount}
          onChange={(e) => {
            setUpdateCoupon({
              ...updateCoupon,
              DiscountAmount: e.target.value
                ? Number(e.target.value)
                : undefined
            })
          }}
        />
        <Label className="pt-4 mt-0">円引き</Label>
      </div>
      <Label htmlFor="expireAt" className="required">
        期限
      </Label>
      <div className="flex justify-start gap-4">
        <Input
          id="expireAt"
          name="expireAt"
          className="w-auto"
          type="date"
          value={
            updateCoupon?.ExpireAt
              ? dayjs(updateCoupon.ExpireAt.toDate()).format("YYYY-MM-DD")
              : undefined
          }
          onChange={(e) => {
            setUpdateCoupon({
              ...updateCoupon,
              ExpireAt: e.target.value
                ? Timestamp.fromDate(dayjs(e.target.value).toDate())
                : undefined
            })
          }}
        />
        <Label className="pt-4 mt-0">まで</Label>
      </div>
      <Label htmlFor="target-store" className="required">
        対象店舗
      </Label>
      <StoreMultiSelect
        selectedItems={
          updateCoupon?.TargetStore?.map((store) => store.ID) ?? []
        }
        onSelect={(select) => {
          setUpdateCoupon({
            ...updateCoupon,
            // eslint-disable-next-line @typescript-eslint/naming-convention
            TargetStoresID: [...(updateCoupon?.TargetStoresID ?? []), select]
          })
        }}
        onRemove={(removeId) => {
          setUpdateCoupon({
            ...updateCoupon,
            TargetStore: updateCoupon?.TargetStore?.filter(
              (store) => store.ID !== removeId
            )
          })
        }}
      />
      <Label htmlFor="display-date" className="mt-4">
        併用可否
      </Label>
      <RadioGroup
        required
        value={updateCoupon?.IsCombinationable ? "true" : "false"}
        onValueChange={(value) => {
          setUpdateCoupon({
            ...updateCoupon,
            IsCombinationable: value === "true"
          })
        }}
        name="is-conbinationable"
        className="flex justify-start mt-4 mb-4"
      >
        <RadioGroupItem value="true" id="is-combinationable-1" />
        <Label htmlFor="is-combinationable-1" className="mt-0 mr-4">
          可
        </Label>
        <RadioGroupItem value="false" id="is-combinationable-2" />
        <Label htmlFor="is-combinationable-2" className="mt-0">
          不可
        </Label>
      </RadioGroup>
      <Label htmlFor="notice">備考</Label>
      {updateNotices?.map(({ id, notice }) => (
        <Input
          key={`${id}`}
          value={notice}
          onChange={(e) => {
            updateSetNotices(
              updateNotices.map((item) =>
                item.id === id ? { ...item, notice: e.target.value } : item
              )
            )
          }}
        />
      ))}
      <div className="flex gap-20 justify-center my-7">
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
          disabled={isNew}
        >
          発行
        </Button>
      </div>
    </form>
  )
}
