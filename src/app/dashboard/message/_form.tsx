"use client"

import { Timestamp } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import { FormEvent, useCallback } from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { MultiSelectPref } from "@/components/parts/prefecture"
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
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const title = formData.get("title") as string
      const content = formData.get("content") as string
      const displayDate = formData.get("desplayDate")
      if (!(displayDate instanceof Date)) {
        alert("日付の形式が不正です。")
        return
      }
      const submitType = formData.get("submit-type")
      if (!title || !content || !submitType) {
        alert("タイトルと本文は必須です。")
        return
      }
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (data?.ID) {
              await client.create({
                Title: title,
                DisplayDate: Timestamp.fromDate(displayDate),
                Content: content
              })
              alert("保存しました。")
              return
            }
            await client.update({
              ID: data?.ID,
              Title: title,
              Content: content
            })
            alert("更新しました。")
            return
          case SubmitType.Delete: {
            const res = window.confirm("削除しますか？")
            if (!res) return
            await client.delete({
              ID: data?.ID
            })
            alert("削除しました。")
            return
          }
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [client, data?.ID]
  )
  return (
    <form onSubmit={handleSubmit}>
      {data?.CreateAt && (
        <div className="text-right">
          作成日:{dayjs(data.CreateAt?.toDate()).format("YYYY年MM月DD日")}
        </div>
      )}
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
            ? data?.DisplayDate?.toDate().toISOString()
            : new Date().toISOString()
        }
      />

      <Label htmlFor="content" className="required">
        本文
      </Label>
      <Textarea
        id="content"
        name="content"
        className="w-full"
        defaultValue={data?.Content}
      />
      <MultiSelectPref />
      <div className="flex gap-20 justify-center">
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
