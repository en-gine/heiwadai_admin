"use client"

import { JsonValue } from "@bufbuild/protobuf"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback } from "react"

import { AdminDataController } from "@/api/v1/admin/AdminData_connect"
import { AdminDataResponse } from "@/api/v1/admin/AdminData_pb"
import { AuthController } from "@/api/v1/admin/Auth_connect"
import { Stores } from "@/api/v1/admin/Store_pb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import { useGrpc } from "@/hooks/api/useGrpc"

const SubmitType = {
  Save: "save",
  Delete: "delete"
} as const

type Props = {
  adminData?: JsonValue
  storeData: JsonValue
}

export const Form = ({ adminData, storeData }: Props) => {
  const { client: adminDataClient } = useGrpc(AdminDataController)
  const { client: authClient } = useGrpc(AuthController)
  const admin = adminData ? AdminDataResponse.fromJson(adminData) : undefined
  const { Stores: stores } = Stores.fromJson(storeData)
  const isNew = adminData === undefined
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const { submitter } = event.nativeEvent as SubmitEvent
      const { value: submitType } = submitter as HTMLButtonElement
      const name = formData.get("name") as string
      const mail = formData.get("mail") as string
      const isActive = formData.get("is-active") as string
      const belongTo = formData.get("belong-store") as string

      if (!submitType) return
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (!name) {
              alert("名前は必須です。")
              return
            }
            if (!belongTo) {
              alert("所属店舗は必須です。")
              return
            }
            if (isNew) {
              const res = await authClient.register({
                Name: name,
                Mail: mail,
                // eslint-disable-next-line @typescript-eslint/naming-convention
                BelongStoreID: belongTo
              })
              alert(
                "登録しました。\nユーザーにパスワード設定のメールを送信しました。"
              )
              router.push(`./${res.ID}`)
              return
            }
            await adminDataClient.update({
              ID: admin?.ID,
              Name: name,
              // eslint-disable-next-line @typescript-eslint/naming-convention
              StoreID: belongTo,
              IsActive: isActive === "true"
            })
            alert("更新しました。")
            router.refresh()
            return
          case SubmitType.Delete:
            if (!window.confirm("削除しますか？")) return
            if (!isNew) {
              await adminDataClient.delete({
                ID: admin?.ID
              })
              alert("削除しました。")
            }
            router.push(`./`)
            return
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [isNew, adminDataClient, admin?.ID, router, authClient]
  )
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name" className="required">
        名前
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        defaultValue={admin?.Name}
        className="w-full"
      />
      <Label htmlFor="mail" className="required">
        メール
      </Label>
      <Input
        disabled={!isNew}
        id="mail"
        name="mail"
        className="w-full"
        type="mail"
        defaultValue={admin?.Mail}
      />
      {!isNew && (
        <>
          <Label htmlFor="is-active" className="mt-4">
            ログイン
          </Label>
          <div className="note">ユーザーのログインを不可にします。</div>
          <RadioGroup
            required
            defaultValue={admin?.IsActive ? "true" : "false"}
            name="is-active"
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
        </>
      )}
      <Label htmlFor="belong-store" className="required">所属店舗</Label>
      <Select name="belong-store" defaultValue={admin?.StoreID}>
        <SelectTrigger>
          <SelectValue placeholder="所属店舗" />
        </SelectTrigger>
        <SelectContent>
          {stores.map((store) => (
            <SelectItem key={store.ID} value={store.ID}>
              {store.Name}
              {store.BranchName}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <div className="flex gap-20 justify-center my-7">
        {admin?.IsConfirmed === false ? (
          <Button type="submit" variant="default" name="submit-type" disabled>
            メール認証待ち
          </Button>
        ) : (
          <Button
            type="submit"
            variant="default"
            name="submit-type"
            value={SubmitType.Save}
          >
            保存
          </Button>
        )}
        <Button
          type="submit"
          name="submit-type"
          value={SubmitType.Delete}
          variant="destructive"
        >
          削除
        </Button>
      </div>
    </form>
  )
}
