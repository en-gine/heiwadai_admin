"use client"

import dayjs from "dayjs"
import Link from "next/link"

import { MailMagazine } from "@/api/v1/admin/MailMagazine_pb"
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

export type Props = { magazines: MailMagazine[] }
export const MagazineListTable = ({ magazines }: Props) => (
  <>
    <div className="text-right">
      <Button variant="default" className="mb-4">
        <Link href="./magazine/new/">新規作成</Link>
      </Button>
    </div>
    <Table>
      <TableCaption>メールマガジン</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">タイトル</TableHead>
          <TableHead>送信日時</TableHead>
          <TableHead>作成日時</TableHead>
          <TableHead>ステータス</TableHead>
          <TableHead className="text-right">送信件数</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {magazines.map((magazine) => (
          <TableRow key={magazine.ID}>
            <TableCell className="font-medium">
              <Link href={`./${magazine.ID}`}>{magazine.Title}</Link>
            </TableCell>
            <TableCell>
              {magazine.SentAt &&
                dayjs(magazine.SentAt.toDate()).format("yyyy/mm/dd HH:mm")}
            </TableCell>
            <TableCell>
              {magazine.CreateAt &&
                dayjs(magazine.CreateAt.toDate()).format("yyyy/mm/dd HH:mm")}
            </TableCell>
            <TableCell>
              {magazine.MailMagazineStatus.toLocaleString()}
            </TableCell>
            <TableCell className="text-right">
              {magazine.SentCount && magazine.SentCount}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)
