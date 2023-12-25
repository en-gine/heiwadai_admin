"use client"

import { JsonValue, Timestamp } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback } from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { Store } from "@/api/v1/shared/Store_pb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useGrpc } from "@/hooks/api/useGrpc"

const SubmitType = {
  Save: "save",
  Delete: "delete"
} as const

type Props = {
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(MessageController)
  const store = data ? Store.fromJson(data) : undefined

  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const { submitter } = event.nativeEvent as SubmitEvent
      const { value: submitType } = submitter as HTMLButtonElement
      const title = formData.get("title") as string
      const content = formData.get("content") as string
      const displayDate = dayjs(formData.get("displayDate") as string).toDate()

      if (!submitType) return
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (!title || !content) {
              alert("タイトルと本文は必須です。")
              return
            }
            if (!store?.ID) {
              const res = await client.create({
                Title: title,
                DisplayDate: Timestamp.fromDate(displayDate),
                Content: content
              })
              alert("保存しました。")
              router.push(`./${res.ID}}`)
              return
            }
            await client.update({
              ID: store?.ID,
              Title: title,
              Content: content
            })
            alert("更新しました。")
            return
          case SubmitType.Delete:
            if (!window.confirm("削除しますか？")) return
            await client.delete({
              ID: store?.ID
            })
            alert("削除しました。")
            router.push(`./`)
            return
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [client, store?.ID, router]
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
