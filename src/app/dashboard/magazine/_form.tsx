/* eslint-disable complexity */

"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import { useRouter } from "next/navigation"
import { FormEvent, FormEventHandler, useCallback, useState } from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import {
  MailMagazine,
  MailMagazineStatus
} from "@/api/v1/admin/MailMagazine_pb"
import { Prefecture } from "@/api/v1/shared/Prefecture_pb"
import { PrefectureMultiSelect } from "@/components/parts/multiSelectPrefecture"
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
  data?: JsonValue
}

export const Form = ({ data }: Props) => {
  const magazine = data ? MailMagazine.fromJson(data) : undefined
  const isNew = data === undefined
  const { client } = useGrpc(MailMagazineController)
  const [prefectures, setPrefectures] = useState<Prefecture[]>(
    magazine?.TargetPrefecture || []
  )
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

            if (isNew) {
              const res = await client.saveDraft({
                Title: title,
                TargetPrefectures: prefectures,
                Content: content
              })
              alert("保存しました。")
              router.push(`/dashboard/magazine/${res.ID}`)
              return
            }
            await client.update({
              ID: magazine?.ID,
              Title: title,
              TargetPrefectures: prefectures,
              Content: content
            })
            alert("更新しました。")
            router.refresh()
            return
          case SubmitType.Delete:
            if (!window.confirm("削除しますか？")) return
            if (!isNew) {
              await client.delete({
                ID: magazine?.ID
              })
              alert("削除しました。")
            }
            router.push(`/dashboard/magazine/`)
            return
          case SubmitType.Send:
            if (
              !window.confirm(
                `${magazine?.UnsentCount}件に一括送信します。\n送信後は内容を変更できません。\n送信しますか？`
              )
            )
              return
            await client.send({
              ID: magazine?.ID
            })
            alert("送信しました。")
            router.refresh()
            return
          default:
            throw new Error("invalid submit type")
        }
      } catch (error) {
        alert(error)
      }
    },
    [client, isNew, magazine?.ID, prefectures, router]
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
        readOnly={
          magazine?.MailMagazineStatus ===
          MailMagazineStatus.MailMagazineSentCompleted
        }
        defaultValue={magazine?.Title}
        className="w-full"
      />
      <Label htmlFor="content" className="required">
        本文
      </Label>
      <Textarea
        id="content"
        readOnly={
          magazine?.MailMagazineStatus ===
          MailMagazineStatus.MailMagazineSentCompleted
        }
        name="content"
        className="w-full min-h-[300px]"
        defaultValue={magazine?.Content}
      />
      <Label htmlFor="prefectures" className="mt-4">
        都道府県
      </Label>
      <div className="note">
        送信対象の都道府県を選択してください。未選択の場合は全国に送信されます。
      </div>
      <PrefectureMultiSelect
        selectedItems={prefectures || []}
        readOnly={
          magazine?.MailMagazineStatus ===
          MailMagazineStatus.MailMagazineSentCompleted
        }
        onSelect={(prefecture) => {
          setPrefectures((prev) => [...prev, prefecture])
        }}
        onRemove={(prefecture) => {
          setPrefectures((prev) => prev.filter((p) => p !== prefecture))
        }}
      />
      {!!magazine?.SentCount && magazine?.SentCount > 0 && (
        <div className="mt-4">
          <Label htmlFor="displayDate">
            {magazine?.MailMagazineStatus ===
            MailMagazineStatus.MailMagazineSaved
              ? "送信予定ユーザー数"
              : "送信ユーザー数"}
          </Label>
          <span className="bold">{magazine?.SentCount}</span>
        </div>
      )}
      {!!magazine?.UnsentCount && (
        <div className="mt-4">
          <Label htmlFor="displayDate">未送信ユーザー数</Label>
          <span className="bold">{magazine?.UnsentCount}</span>
        </div>
      )}
      {magazine?.SentAt && (
        <div className="mt-4">
          <Label htmlFor="displayDate">送信日</Label>
          <span className="bold">
            {dayjs(magazine.SentAt.toDate()).format("YYYY/MM/DD HH:mm:ss")}
          </span>
        </div>
      )}
      {isNew && <span className="note">送信は保存後に可能になります。</span>}
      {magazine?.MailMagazineStatus ===
        MailMagazineStatus.MailMagazineSentUnCompleted && (
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
              isNew ||
              magazine?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSaved ||
              magazine?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSentUnCompleted
            )
          }
        >
          {isNew ? "保存" : "更新"}
        </Button>
        <Button
          type="submit"
          name="submit-type"
          value={SubmitType.Delete}
          variant="destructive"
          disabled={
            !(
              isNew ||
              magazine?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSaved
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
              magazine?.MailMagazineStatus ===
                MailMagazineStatus.MailMagazineSaved ||
              magazine?.MailMagazineStatus ===
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
