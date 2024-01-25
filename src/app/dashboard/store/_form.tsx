/* eslint-disable @typescript-eslint/naming-convention */

"use client"

import { JsonValue } from "@bufbuild/protobuf"
import { useMutation } from "@connectrpc/connect-query"
import Image from "next/image"
import React, { useCallback, useMemo, useState } from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import {
  register,
  update
} from "@/api/v1/admin/Store-StoreController_connectquery"
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
  Save: "save"
} as const

type Props = {
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(StoreController)
  const store = data ? Store.fromJson(data) : undefined
  const defaultStore = useMemo(
    () => ({
      ...store
    }),
    [store]
  )
  const defaultStayableinfo = useMemo(
    () => ({
      ...store?.StayableStoreInfo
    }),
    [store?.StayableStoreInfo]
  )
  const isNew = defaultStore?.ID === undefined

  const [updateStore, setUpdateStore] =
    useState<typeof defaultStore>(defaultStore)
  const [updateStayableinfo, setUpdateStayableinfo] =
    useState<typeof defaultStayableinfo>(defaultStayableinfo)
  const regenQrCode = useCallback(async () => {
    try {
      if (!defaultStore?.ID) {
        alert("投稿を保存後に再生成してください。")
        return
      }
      const res = await client.regenQRCode({
        ID: defaultStore?.ID
      })
      setUpdateStore({ ...updateStore, QRCode: res.QRCode })
    } catch (error) {
      alert(error)
    }
  }, [client, defaultStore?.ID, updateStore])

  const regenUnlimitedQrCode = useCallback(async () => {
    try {
      if (!defaultStore?.ID) {
        alert("投稿を保存後に再生成してください。")
        return
      }
      const res = await client.regenUnlimitQRCode({
        ID: defaultStore?.ID
      })
      setUpdateStore({ ...updateStore, UnLimitedQRCode: res.UnlimitQRCode })
    } catch (error) {
      alert(error)
    }
  }, [client, defaultStore?.ID, updateStore])
  const [filename, setFIleName] = useState<string | undefined>(undefined)
  const printQrCode = useCallback(() => {
    if (!defaultStore?.ID) {
      alert("投稿を保存後に印刷してください。")
      return
    }
    window.open(
      `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${updateStore.QRCode}`
    )
  }, [defaultStore?.ID, updateStore.QRCode])

  const printUnlimitedQrCode = useCallback(() => {
    if (!defaultStore?.ID) {
      alert("投稿を保存後に印刷してください。")
      return
    }

    window.open(
      `https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${updateStore.UnLimitedQRCode}`
    )
  }, [defaultStore?.ID, updateStore.UnLimitedQRCode])

  const { mutate: mutateUpdate } = useMutation(update)
  const { mutate: mutateRegister } = useMutation(register)
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      if (isNew) {
        mutateRegister(
          {
            ...updateStore,
            StayableInfo: {
              ...updateStayableinfo
            }
          },
          {
            onSuccess: () => {
              alert("更新しました。")
            },
            onError: () => {
              alert("更新に失敗しました。")
            }
          }
        )
        return
      }
      mutateUpdate(
        {
          ...updateStore,
          StayableInfo: {
            ...updateStayableinfo
          }
        },
        {
          onSuccess: () => {
            alert("更新しました。")
          },
          onError: () => {
            alert("更新に失敗しました。")
          }
        }
      )
    },
    [isNew, mutateRegister, mutateUpdate, updateStayableinfo, updateStore]
  )

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <Label htmlFor="name" className="required">
        店舗名
      </Label>
      <Input
        type="text"
        id="name"
        required
        value={updateStore?.Name}
        onChange={(event) => {
          setUpdateStore({ ...updateStore, Name: event.target.value })
        }}
        className="w-[70%]"
      />
      <Label htmlFor="branch-name">支店名</Label>
      <Input
        type="text"
        id="branch-name"
        value={updateStore?.BranchName}
        onChange={(event) => {
          setUpdateStore({ ...updateStore, BranchName: event.target.value })
        }}
        className="w-[50%]"
      />
      <Label htmlFor="zip" className="required">
        郵便番号
      </Label>
      <Input
        id="zip"
        type="zip"
        className="w-[10em]"
        value={updateStore?.ZipCode}
        onChange={(event) => {
          setUpdateStore({ ...updateStore, ZipCode: event.target.value })
        }}
      />
      <Label htmlFor="address" className="required">
        住所
      </Label>
      <Input
        id="address"
        type="address"
        className="w-full"
        value={updateStore?.Address}
        onChange={(event) => {
          setUpdateStore({ ...updateStore, Address: event.target.value })
        }}
      />
      <Label htmlFor="tel" className="required">
        TEL
      </Label>
      <Input
        id="tel"
        type="tel"
        className="w-[10em]"
        value={updateStore?.Tel}
        required
        onChange={(event) => {
          setUpdateStore({ ...updateStore, Tel: event.target.value })
        }}
      />
      <Label htmlFor="url" className="required">
        サイトURL
      </Label>
      <Input
        id="url"
        type="url"
        className="w-full"
        value={updateStore?.SiteURL}
        required
        onChange={(event) => {
          setUpdateStore({ ...updateStore, SiteURL: event.target.value })
        }}
      />
      <Label htmlFor="stamp" className="required">
        スタンプ
      </Label>
      {updateStore.StampImage && (
        <Image
          src={updateStore.StampImage}
          width={85}
          height={85}
          alt="スタンプ画像"
        />
      )}
      <Input
        id="stamp"
        type="file"
        name="stamp"
        required
        value={filename}
        accept=".png,.jpg,.jpeg,.gif,.svg"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          const { files } = event.currentTarget
          // ファイルがなければ終了
          if (!files || files?.length === 0) return
          // 先頭のファイルを取得
          const file = files[0]
          if (file) {
            setFIleName(file.name)
            const reader = new FileReader()
            reader.readAsDataURL(file)

            reader.onload = (e) => {
              const base64 = e?.target?.result
              if (typeof base64 === "string") {
                setUpdateStore({ ...updateStore, StampImage: base64 })
              } else {
                setUpdateStore({ ...updateStore, StampImage: undefined })
              }
            }
          }
        }}
      />
      <Label htmlFor="status">ステータス</Label>
      <Select
        value={String(updateStore.IsActive)}
        onValueChange={(value) => {
          setUpdateStore({
            ...updateStore,
            IsActive: value === "true"
          })
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
        value={String(updateStore.Stayable)}
        onValueChange={(value) => {
          setUpdateStore({
            ...updateStore,
            Stayable: value === "true"
          })
        }}
        className="flex justify-start mt-4"
      >
        <RadioGroupItem value="true" id="stayable-1" />
        <Label htmlFor="stayable-1" className="mt-0 mr-4">
          宿泊施設
        </Label>
        <RadioGroupItem value="false" id="stayable-2" />
        <Label className="mt-0" htmlFor="stayable-2">
          通常店舗
        </Label>
      </RadioGroup>
      {updateStore?.Stayable && (
        <Card className="mt-4 p-4">
          <Label htmlFor="tl-lincoln">TLリンカーン施設番号</Label>
          <Input
            id="tl-lincoln"
            type="text"
            value={updateStayableinfo.BookingSystemID}
            onChange={(event) => {
              setUpdateStayableinfo({
                ...updateStayableinfo,
                BookingSystemID: event.target.value
              })
            }}
          />
          <Label htmlFor="access-info">アクセス情報</Label>
          <Input
            id="access-info"
            type="text"
            className="w-full"
            value={updateStayableinfo.AccessInfo}
            onChange={(event) => {
              setUpdateStayableinfo({
                ...updateStayableinfo,
                AccessInfo: event.target.value
              })
            }}
          />
          <Label htmlFor="parking">駐車場情報</Label>
          <Input
            id="parking"
            type="text"
            className="w-full"
            value={updateStayableinfo.Parking}
            onChange={(event) => {
              setUpdateStayableinfo({
                ...updateStayableinfo,
                Parking: event.target.value
              })
            }}
          />
          <Label htmlFor="rest-api-url">お知らせAPIのURL</Label>
          <Input
            id="rest-api-url"
            type="text"
            className="w-full"
            value={updateStayableinfo.RestAPIURL}
            onChange={(event) => {
              setUpdateStayableinfo({
                ...updateStayableinfo,
                RestAPIURL: event.target.value
              })
            }}
          />
          <div className="flex gap-10 justify-start mt-7">
            <Label htmlFor="longitude">
              経度
              <Input
                id="longitude"
                className="w-full"
                type="number"
                defaultValue={updateStayableinfo.Longitude}
                step={0.0000001}
                onBlur={(event) => {
                  setUpdateStayableinfo({
                    ...updateStayableinfo,
                    Longitude: event.target.value as unknown as number
                  })
                }}
              />
            </Label>
            <Label htmlFor="latitude">
              緯度
              <Input
                id="latitude"
                type="number"
                className="w-full"
                step={0.0000001}
                defaultValue={updateStayableinfo.Latitude}
                onBlur={(event) => {
                  setUpdateStayableinfo({
                    ...updateStayableinfo,
                    Latitude: event.target.value as unknown as number
                  })
                }}
              />
            </Label>
          </div>
          <div className="google-map">
            <p className="note">
              Googleマップでの表示位置が正しいか確認してください。
            </p>

            {updateStayableinfo?.Longitude && updateStayableinfo?.Latitude && (
              <GoogleMapIframeMemo
                longitude={updateStayableinfo?.Longitude}
                latitude={updateStayableinfo?.Latitude}
              />
            )}
          </div>
        </Card>
      )}
      <Label htmlFor="qr-code">チェックインQR生成</Label>
      <div className="flex gap-10 justify-start">
        <Input
          id="qr-code"
          type="text"
          className="max-w-[50%]"
          disabled
          value={updateStore.QRCode}
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
          disabled
          type="text"
          className="max-w-[50%]"
          value={updateStore.UnLimitedQRCode}
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

      <div className="flex gap-20 justify-center my-7">
        <Button type="submit" variant="default" value={SubmitType.Save}>
          保存
        </Button>
      </div>
    </form>
  )
}
const GoogleMapIframe = ({
  latitude,
  longitude
}: {
  latitude: number
  longitude: number
}) => (
  <iframe
    title="google-map"
    width="100%"
    height="400px"
    src={`https://maps.google.co.jp/maps?output=embed&q=${latitude},${longitude}&t=m&z=18`}
  />
)
const GoogleMapIframeMemo = React.memo(GoogleMapIframe)
