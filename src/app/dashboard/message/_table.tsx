"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import Link from "next/link"

import { MessagesResponse } from "@/api/v1/admin/Messages_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export type Props = { data: JsonValue }
export const MessageListTable = ({ data }: Props) => {
  const { messages } = MessagesResponse.fromJson(data)
  return (
    <>
      <p className="text-sm">
        ユーザーがアプリにログインした時にメッセージを表示することができます。
        <br />
        この一覧に表示されているメッセージは必ず1度はユーザーのログイン後に表示されます。
        <br />
        通知が不要になった場合は削除してください。
      </p>

      <div className="text-right">
        <Button variant="default" className="mb-4">
          <Link href="./message/new">新規作成</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-20">タイトル</TableHead>
            <TableHead>内容</TableHead>
            <TableHead>表示日時</TableHead>
            <TableHead>作成日時</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((msg) => (
            <TableRow key={msg.ID}>
              <TableCell className="font-medium">
                <Link href={`./message/${msg.ID}`}>{msg.Title}</Link>
              </TableCell>
              <TableCell>
                {msg.Content.length > 50
                  ? `${msg.Content.slice(0, 50)}...`
                  : msg.Content}
              </TableCell>
              <TableCell>
                {dayjs(msg.DisplayDate?.toDate()).format("YYYY/MM/DD")}
              </TableCell>
              <TableCell>
                {dayjs(msg.CreateAt?.toDate()).format("YYYY/MM/DD")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
