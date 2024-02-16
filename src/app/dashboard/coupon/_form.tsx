"use client"

import { JsonValue, Timestamp } from "@bufbuild/protobuf"
import { useMutation } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { useCallback, useMemo, useState } from "react"

import {
  attachCustomCouponToAllUser,
  createCustomCoupon,
  saveCustomCoupon
} from "@/api/v1/admin/Coupon-AdminCouponController_connectquery"
import { CouponStatus, CustomCoupon } from "@/api/v1/shared/Coupon_pb"
import { StoreMultiSelect } from "@/components/parts/multiSelectStore"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export type Notice = {
  id: number
  notice: string
}
type Props = {
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const defaultData = data ? CustomCoupon.fromJson(data) : undefined
  const isDraft = defaultData?.Status === CouponStatus.COUPON_DRAFT
  const isIssued = defaultData?.Status === CouponStatus.COUPON_ISSUED

  // targetStoreを除外（更新はTargetStoresIDで行うため）
  const { TargetStore, ...defaultCoupon } = useMemo(
    () => ({
      ...defaultData,
      // eslint-disable-next-line @typescript-eslint/naming-convention
      TargetStoresID: defaultData?.TargetStore?.map((store) => store.ID)
    }),
    [defaultData]
  )
  const defaultNotices = useMemo(() => {
    if (defaultData) {
      return defaultData.Notices.map((notice, index) => ({
        id: index,
        notice
      }))
    }
    return [{ id: 0, notice: "" }]
  }, [defaultData])
  const router = useRouter()
  const { mutate: save } = useMutation(saveCustomCoupon)
  const { mutate: create } = useMutation(createCustomCoupon)
  const { mutate: issue } = useMutation(attachCustomCouponToAllUser)

  const [updateCoupon, setUpdateCoupon] =
    useState<typeof defaultCoupon>(defaultCoupon)

  const [updateNotices, updateSetNotices] =
    useState<typeof defaultNotices>(defaultNotices)

  const handleSave = useCallback(() => {
    const notices = updateNotices
      .filter((notice) => notice.notice !== "")
      .map((notice) => notice.notice)
    if (isDraft) {
      create(
        {
          Name: updateCoupon.Name,
          DiscountAmount: updateCoupon.DiscountAmount,
          ExpireAt: updateCoupon.ExpireAt,
          IsCombinationable: updateCoupon.IsCombinationable,
          Notices: notices,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          TargetStoresID: updateCoupon.TargetStoresID
        },
        {
          onSuccess: (res) => {
            router.push(`/dashboard/coupon/${res.ID}`)
          },
          onError: (err) => {
            alert(`エラーが発生しました\n${err}`)
            console.error(err)
          }
        }
      )
    } else {
      save(
        {
          ID: updateCoupon.ID,
          Name: updateCoupon.Name,
          DiscountAmount: updateCoupon.DiscountAmount,
          ExpireAt: updateCoupon.ExpireAt,
          IsCombinationable: updateCoupon.IsCombinationable,
          Notices: notices,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          TargetStoresID: updateCoupon.TargetStoresID
        },
        {
          onSuccess: () => {
            alert("保存しました")
            router.refresh()
          },
          onError: (err) => {
            alert(`エラーが発生しました\n${err}`)
            console.error(err)
          }
        }
      )
    }
  }, [
    updateNotices,
    isDraft,
    create,
    updateCoupon.Name,
    updateCoupon.DiscountAmount,
    updateCoupon.ExpireAt,
    updateCoupon.IsCombinationable,
    updateCoupon.TargetStoresID,
    updateCoupon.ID,
    router,
    save
  ])
  const handleIssue = useCallback(() => {
    if (
      !window.confirm(
        "現在のアプリユーザーに対してクーポンを発行します\n発行後クーポン内容は変更できなくなります。"
      )
    ) {
      return
    }

    issue(
      {
        ID: updateCoupon.ID
      },
      {
        onSuccess: () => {
          alert("発行しました")
          router.refresh()
        },
        onError: (err) => {
          alert(`エラーが発生しました\n${err}`)
          console.error(err)
        }
      }
    )
  }, [issue, router, updateCoupon.ID])
  return (
    <>
      <Label htmlFor="name" className="required">
        クーポン名
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        maxLength={10}
        value={updateCoupon?.Name}
        readOnly={updateCoupon.Status === CouponStatus.COUPON_ISSUED}
        className="w-full"
        onChange={(e) => {
          setUpdateCoupon({ ...updateCoupon, Name: e.target.value })
        }}
      />
      {defaultCoupon?.CreateAt && (
        <div className="text-right">
          <Label className="mr-2">作成日:</Label>
          {dayjs(defaultCoupon?.CreateAt.toDate()).format(
            "YYYY年MM月DD日 HH:mm"
          )}
        </div>
      )}
      {defaultCoupon?.IssueAt && (
        <div>
          <Label className="mr-2">発行日:</Label>
          {dayjs(defaultCoupon?.IssueAt.toDate()).format(
            "YYYY年MM月DD日 HH:mm"
          )}
        </div>
      )}
      {!!defaultCoupon?.IssueCount && defaultCoupon?.IssueCount > 0 && (
        <div>
          <Label className="mr-2">発行ユーザー数:</Label>
          {defaultCoupon?.IssueCount.toLocaleString()}人
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
          readOnly={isIssued}
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
          readOnly={isIssued}
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
      {isDraft && (
        <p className="note">
          ※新規作成時には全店舗選択されています。
          <br />
          適宜対象店舗を取捨選択してください。
        </p>
      )}
      <StoreMultiSelect
        readOnly={isIssued}
        selectedItems={
          updateCoupon?.TargetStoresID?.map((storeId) => storeId) ?? []
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
            // eslint-disable-next-line @typescript-eslint/naming-convention
            TargetStoresID: updateCoupon?.TargetStoresID?.filter(
              (id) => id !== removeId
            )
          })
        }}
      />
      <Label htmlFor="display-date" className="mt-4">
        併用可否
      </Label>
      <RadioGroup
        required
        disabled={isIssued}
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
      <Label htmlFor="notice">クーポン備考</Label>
      <p className="note">行として追加／削除してください。</p>
      {updateNotices?.map(({ id, notice }) => (
        <div key={`${id}`} className="relative">
          {!isIssued && (
            <button
              className="cursor-pointer absolute top-2 right-2"
              type="button"
              disabled={isIssued}
              onClick={() => {
                updateSetNotices(updateNotices.filter((item) => item.id !== id))
              }}
            >
              ✖️
            </button>
          )}
          <Input
            value={notice}
            readOnly={isIssued}
            className="mb-1"
            onChange={(e) => {
              updateSetNotices(
                updateNotices.map((item) =>
                  item.id === id ? { ...item, notice: e.target.value } : item
                )
              )
            }}
          />
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        className="bg-blue-400"
        disabled={isIssued}
        onClick={() => {
          updateSetNotices([
            ...updateNotices,
            {
              id:
                updateNotices.length > 0
                  ? updateNotices[updateNotices.length - 1].id + 1
                  : 0,
              notice: ""
            }
          ])
        }}
      >
        備考行追加
      </Button>
      <div className="flex gap-20 justify-center my-7">
        <Button
          type="submit"
          variant="default"
          name="submit-type"
          disabled={isIssued}
          onClick={handleSave}
        >
          {isDraft ? "保存" : "更新"}
        </Button>
        <Button
          type="submit"
          name="submit-type"
          onClick={handleIssue}
          variant="destructive"
          disabled={isDraft || isIssued}
        >
          発行
        </Button>
      </div>
    </>
  )
}
