"use client"

import { Timestamp } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback } from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useGrpc } from "@/hooks/api/useGrpc"

const SubmitType = {
  Save: "save",
  Delete: "delete"
} as const

type Props = {
  data?: MessageResponse
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(MessageController)
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
            if (!data?.ID) {
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
              ID: data?.ID,
              Title: title,
              Content: content
            })
            alert("更新しました。")
            return
          case SubmitType.Delete:
            if (!window.confirm("削除しますか？")) return
            await client.delete({
              ID: data?.ID
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
    [client, data?.ID, router]
  )
  return (
    <form onSubmit={handleSubmit}>
      <Label htmlFor="title" className="required">
        タイトル
      </Label>
      <Input
        type="text"
        id="title"
        name="title"
        defaultValue={data?.Title}
        className="w-full"
      />
      {data?.CreateAt && (
        <div className="text-right">
          作成日:
          {dayjs(data.CreateAt as unknown as string).format("YYYY年MM月DD日")}
        </div>
      )}
      <Label htmlFor="displayDate" className="required">
        表示日
      </Label>
      <Input
        id="dispalyDate"
        name="displayDate"
        className="w-full"
        type="date"
        defaultValue={
          data?.DisplayDate
            ? dayjs(data.CreateAt as unknown as string).format("YYYY-MM-DD")
            : dayjs().format("YYYY-MM-DD")
        }
      />

      <Label htmlFor="content" className="required">
        本文
      </Label>
      <Textarea
        id="content"
        name="content"
        className="w-full min-h-[100px] mt-1"
        defaultValue={data?.Content}
      />
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
