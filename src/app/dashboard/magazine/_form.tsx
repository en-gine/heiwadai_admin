"use client"

import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback } from "react"

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
  const router = useRouter()
  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const title = formData.get("title") as string
      const content = formData.get("content") as string
      const { submitter } = event.nativeEvent as SubmitEvent
      const { value: submitType } = submitter as HTMLButtonElement
      if (!submitType) return
      try {
        switch (submitType) {
          case SubmitType.Save:
            if (!title || !content) {
              alert("タイトルと本文は必須です。")
              return
            }

            if (
              data?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineDraft &&
              data?.ID
            ) {
              const res = await client.createDraft({
                Title: title,
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
            return
          case SubmitType.Send:
            if (!window.confirm("送信しますか？")) return
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
    [client, data?.ID, data?.MailMagazineStatus, router]
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
        className="w-full min-h-[300px]"
        defaultValue={data?.Content}
      />
      <Label htmlFor="prefectures" className="mt-4">
        都道府県
      </Label>
      <div className="note">
        送信対象の都道府県を選択してください。未選択の場合は全国に送信されます。
      </div>
      <MultiSelectPref />
      {data?.SentCount && (
        <div className="mt-4">
          <Label htmlFor="displayDate">
            {data?.MailMagazineStatus === MailMagazineStatus.MailMagazineSaved
              ? "送信予定ユーザー数"
              : "送信ユーザー数"}
          </Label>
          <span className="bold">{data?.SentCount}</span>
        </div>
      )}
      {data?.UnsentCount && (
        <div className="mt-4">
          <Label htmlFor="displayDate">未送信ユーザー数</Label>
          <span className="bold">{data?.UnsentCount}</span>
        </div>
      )}
      {data?.MailMagazineStatus === MailMagazineStatus.MailMagazineDraft || (
        <span className="note">送信は保存後に可能になります。</span>
      )}
      {data?.MailMagazineStatus ===
        MailMagazineStatus.MailMagazineSentUnCompleted || (
        <span className="note">
          未送信のユーザーがいます。もう一回「送信」を押すと未送信のユーザーにだけ送信されます。
        </span>
      )}
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
