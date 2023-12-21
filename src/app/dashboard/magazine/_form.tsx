"use client"

import { FormEvent, useCallback } from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import {
  MailMagazine,
  MailMagazineStatus
} from "@/api/v1/admin/MailMagazine_pb"
import { MultiSelectPref } from "@/components/parts/prefecture"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useGrpc } from "@/hooks/api/useGrpc"

const SubmitType = {
  Save: "save",
  Delete: "delete",
  Send: "send"
} as const

type Props = {
  data?: MailMagazine
}

export const Form = ({ data }: Props) => {
  const { client } = useGrpc(MailMagazineController)
  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const title = formData.get("title") as string
      const content = formData.get("content") as string
      const submitType = formData.get("submit-type") as string
      if (!title || !content || !submitType) {
        alert("タイトルと本文は必須です。")
        return
      }
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (
              data?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineDraft &&
              data?.ID
            ) {
              await client.createDraft({
                Title: title,
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
          case SubmitType.Delete:
            await client.delete({
              ID: data?.ID
            })
            alert("削除しました。")
            return
          case SubmitType.Send:
            await client.send({
              ID: data?.ID
            })
            alert("送信しました。")
            return
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [client, data?.ID, data?.MailMagazineStatus]
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
          disabled={
            !(
              data === undefined ||
              data?.MailMagazineStatus === MailMagazineStatus.MailMagazineDraft
            )
          }
        >
          保存
        </Button>
        <Button
          type="submit"
          name="submit-type"
          value={SubmitType.Delete}
          variant="destructive"
          disabled={
            !(
              data === undefined ||
              data?.MailMagazineStatus === MailMagazineStatus.MailMagazineDraft
            )
          }
        >
          削除
        </Button>
        <Button
          type="submit"
          variant="secondary"
          name="submit-type"
          value={SubmitType.Send}
          disabled={
            !(
              data?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSaved ||
              data?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSentUnCompleted
            )
          }
        >
          送信
        </Button>
      </div>
    </form>
  )
}
