"use client"

import dayjs from "dayjs"
import Link from "next/link"

import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export type Props = { messages: MessageResponse[] }
export const MessageListTable = ({ messages }: Props) => (
  <>
    <div className="text-right">
      <Button variant="default" className="mb-4">
        <Link href="./messages/new/">新規作成</Link>
      </Button>
    </div>
    <Table>
      <TableCaption>ログイン通知メッセージ</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">タイトル</TableHead>
          <TableHead>内容</TableHead>
          <TableHead>表示日時</TableHead>
          <TableHead>作成日時</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {messages.map((msg) => (
          <TableRow key={msg.ID}>
            <TableCell className="font-medium">
              <Link href={`./${msg.ID}`}>{msg.Title}</Link>
            </TableCell>
            <TableCell>
              {msg.Content.length > 50
                ? `${msg.Content.slice(0, 50)}...`
                : msg.Content}
            </TableCell>
            <TableCell>
              {msg.DisplayDate &&
                dayjs(msg.DisplayDate.toDate()).format("yyyy/mm/dd HH:mm")}
            </TableCell>
            <TableCell>
              {msg.CreateAt &&
                dayjs(msg.CreateAt.toDate()).format("yyyy/mm/dd HH:mm")}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)
