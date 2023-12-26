/* eslint-disable @typescript-eslint/naming-convention */

"use client"

import { JsonValue } from "@bufbuild/protobuf"
import crypto from "crypto"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback, useState } from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { Store } from "@/api/v1/shared/Store_pb"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(StoreController)
  const store = data ? Store.fromJson(data) : undefined
  const [isActive, setIsActive] = useState<boolean>(store?.IsActive || false)
  const [isStayable, setIsStayable] = useState<boolean>(
    store?.Stayable || false
  )
  const router = useRouter()
  const [qrCode, setQrCode] = useState<string | undefined>(store?.QRCode)
  const [unlimitedQrCode, setUnlimitedQrCode] = useState<string | undefined>(
    store?.UnLimitedQRCode
  )

  const regenQrCode = useCallback(async () => {
    try {
      if (!store?.ID) {
        alert("投稿を保存後に再生成してください。")
        return
      }
      const res = await client.regenQRCode({
        ID: store?.ID
      })
      setQrCode(res.QRCode)
    } catch (error) {
      alert(error)
    }
  }, [client, store?.ID])

  const regenUnlimitedQrCode = useCallback(async () => {
    try {
      if (!store?.ID) {
        alert("投稿を保存後に再生成してください。")
        return
      }
      const res = await client.regenUnlimitQRCode({
        ID: store?.ID
      })
      setUnlimitedQrCode(res.UnlimitQRCode)
    } catch (error) {
      alert(error)
    }
  }, [client, store?.ID])

  const printQrCode = useCallback(() => {
    if (!store?.ID) {
      alert("投稿を保存後に印刷してください。")
      return
    }
    window.open(
      `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${qrCode}`
    )
  }, [qrCode, store?.ID])
  const printUnlimitedQrCode = useCallback(() => {
    if (!store?.ID) {
      alert("投稿を保存後に印刷してください。")
      return
    }

    window.open(
      `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${unlimitedQrCode}`
    )
  }, [store?.ID, unlimitedQrCode])

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const { submitter } = event.nativeEvent as SubmitEvent
      const { value: submitType } = submitter as HTMLButtonElement
      const title = formData.get("title") as string
      const content = formData.get("content") as string

      if (!submitType) return
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (!title || !content) {
              alert("タイトルと本文は必須です。")
              return
            }
            if (!store?.ID) {
              const res = await client.register({
                Name: store?.Name,
                BranchName: store?.BranchName,
                ZipCode: store?.ZipCode,
                Address: store?.Address,
                Tel: store?.Tel,
                SiteURL: store?.SiteURL,
                StampImageURL: store?.StampImageURL,
                IsActive: store?.IsActive,
                Stayable: store?.Stayable,
                QRCode: store?.QRCode,
                UnLimitedQRCode: store?.UnLimitedQRCode,
                StayableInfo: {
                  BookingSystemID: store?.StayableStoreInfo?.BookingSystemID,
                  AccessInfo: store?.StayableStoreInfo?.AccessInfo,
                  Parking: store?.StayableStoreInfo?.Parking,
                  RestAPIURL: store?.StayableStoreInfo?.RestAPIURL,
                  Longitude: store?.StayableStoreInfo?.Longitude,
                  Latitude: store?.StayableStoreInfo?.Latitude
                }
              })
              alert("保存しました。")
              router.push(`./${res.ID}}`)
              return
            }
            await client.update({
              ID: store.ID,
              Name: title,
              BranchName: content,
              ZipCode: "",
              Address: "",
              Tel: "",
              SiteURL: "",
              StampImageURL: "",
              IsActive: true,
              Stayable: false,
              QRCode: crypto.randomUUID(),
              UnLimitedQRCode: crypto.randomUUID(),
              StayableInfo: {
                BookingSystemID: "",
                AccessInfo: "",
                Parking: "",
                RestAPIURL: "",
                Longitude: 0,
                Latitude: 0
              }
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
    [
      store?.ID,
      store?.Name,
      store?.BranchName,
      store?.ZipCode,
      store?.Address,
      store?.Tel,
      store?.SiteURL,
      store?.StampImageURL,
      store?.IsActive,
      store?.Stayable,
      store?.QRCode,
      store?.UnLimitedQRCode,
      store?.StayableStoreInfo?.BookingSystemID,
      store?.StayableStoreInfo?.AccessInfo,
      store?.StayableStoreInfo?.Parking,
      store?.StayableStoreInfo?.RestAPIURL,
      store?.StayableStoreInfo?.Longitude,
      store?.StayableStoreInfo?.Latitude,
      client,
      router
    ]
  )
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="name" className="required">
        店舗名
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        required
        defaultValue={store?.Name}
        className="w-[70%]"
      />
      <Label htmlFor="branch-name">支店名</Label>
      <Input
        type="text"
        id="branch-name"
        name="branch-name"
        defaultValue={store?.BranchName}
        className="w-[50%]"
      />
      <Label htmlFor="zip" className="required">
        郵便番号
      </Label>
      <Input
        id="zip"
        name="zip"
        type="zip"
        className="w-[10em]"
        defaultValue={store?.ZipCode}
      />
      <Label htmlFor="address" className="required">
        住所
      </Label>
      <Input
        id="address"
        name="address"
        type="address"
        className="w-full"
        defaultValue={store?.Address}
      />
      <Label htmlFor="tel" className="required">
        TEL
      </Label>
      <Input
        id="tel"
        name="tel"
        type="tel"
        className="w-[10em]"
        defaultValue={store?.Tel}
      />
      <Label htmlFor="url" className="required">
        サイトURL
      </Label>
      <Input
        id="url"
        name="url"
        type="url"
        className="w-full"
        defaultValue={store?.SiteURL}
      />
      <Label htmlFor="stamp" className="required">
        スタンプ
      </Label>
      {store?.StampImageURL && (
        <img src={data.StampImageURL} alt={store?.Name} />
      )}
      <Input id="stamp" type="file" name="stamp" />
      <Label htmlFor="status">ステータス</Label>
      <Select
        name="is_active"
        defaultValue={String(store?.IsActive)}
        value={String(isActive)}
        onValueChange={(value) => {
          setIsActive(value === "true")
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="表示/非表示" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="true">表示</SelectItem>
          <SelectItem value="false">非表示</SelectItem>
        </SelectContent>
      </Select>
      <Label htmlFor="display-date">宿泊可否</Label>
      <RadioGroup
        defaultValue={String(isStayable)}
        value={String(isStayable)}
        onValueChange={(value) => {
          setIsStayable(value === "true")
        }}
        className="flex justify-start mt-4"
      >
        <RadioGroupItem value="true" id="stayable-1" />
        <Label htmlFor="stayable-1" className="mr-4">
          宿泊施設
        </Label>
        <RadioGroupItem value="false" id="stayable-2" />
        <Label htmlFor="stayable-2">通常店舗</Label>
      </RadioGroup>
      {isStayable && (
        <Card className="mt-4 p-4">
          <Label htmlFor="tl-lincoln">TLリンカーン施設番号</Label>
          <Input
            id="tl-lincoln"
            name="tl-lincoln"
            type="text"
            defaultValue={store?.StayableStoreInfo?.BookingSystemID}
          />
          <Label htmlFor="access-info">アクセス情報</Label>
          <Input
            id="access-info"
            name="access-info"
            type="text"
            className="w-full"
            defaultValue={store?.StayableStoreInfo?.AccessInfo}
          />
          <Label htmlFor="parking">駐車場情報</Label>
          <Input
            id="parking"
            name="parking"
            type="text"
            className="w-full"
            defaultValue={store?.StayableStoreInfo?.Parking}
          />
          <Label htmlFor="rest-api-url">お知らせAPIのURL</Label>
          <Input
            id="rest-api-url"
            name="rest-api-url"
            type="text"
            className="w-full"
            defaultValue={store?.StayableStoreInfo?.RestAPIURL}
          />
          <div className="flex gap-10 justify-start mt-7">
            <Label htmlFor="longitude">
              経度
              <Input
                id="longitude"
                name="longitude"
                type="text"
                className="w-full"
                defaultValue={store?.StayableStoreInfo?.Longitude}
              />
            </Label>
            <Label htmlFor="latitude">
              緯度
              <Input
                id="latitude"
                name="latitude"
                type="text"
                className="w-full"
                defaultValue={store?.StayableStoreInfo?.Latitude}
              />
            </Label>
          </div>
        </Card>
      )}
      <Label htmlFor="qr-code">チェックインQR生成</Label>
      <div className="flex gap-10 justify-start">
        <Input
          id="qr-code"
          name="qr-code"
          type="text"
          className="max-w-[50%]"
          disabled
          defaultValue={store?.QRCode}
          value={qrCode}
        />
        <Button variant="default" onClick={regenQrCode}>
          再生成
        </Button>
        <Button variant="secondary" onClick={printQrCode}>
          QRコード印刷
        </Button>
      </div>
      <Label htmlFor="unlimited-qr-code">制限なしQR生成</Label>
      <div className="flex gap-10 justify-start">
        <Input
          id="unlimited-qr-code"
          name="unlimited-qr-code"
          disabled
          type="text"
          className="max-w-[50%]"
          defaultValue={store?.UnLimitedQRCode}
          value={unlimitedQrCode}
        />
        <Button
          variant="default"
          className="bg-green-500 hover:bg-green-400"
          onClick={regenUnlimitedQrCode}
        >
          再生成
        </Button>
        <Button variant="secondary" onClick={printUnlimitedQrCode}>
          制限なしQR印刷
        </Button>
      </div>

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
          value={SubmitType.Delete}
          variant="destructive"
        >
          削除
        </Button>
      </div>
    </form>
  )
}
