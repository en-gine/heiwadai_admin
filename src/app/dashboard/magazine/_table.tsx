"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import Link from "next/link"

import { MailMagazinesResponse } from "@/api/v1/admin/MailMagazine_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { getMailMagazineStatusName } from "@/types/MailMagazineStatus"

export type Props = { data: JsonValue }
export const MagazineListTable = ({ data }: Props) => {
  const res = data ? MailMagazinesResponse.fromJson(data) : undefined
  const magazines = res?.MailMagazines
  return (
    <>
      <div className="text-right">
        <Button variant="default" className="mb-4">
          <Link href="./magazine/new/">新規作成</Link>
        </Button>
      </div>
      <Table>
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
          {magazines?.map((magazine) => (
            <TableRow key={magazine.ID}>
              <TableCell className="font-medium">
                <Link href={`/dashboard/magazine/${magazine.ID}`}>
                  {magazine.Title}
                </Link>
              </TableCell>
              <TableCell>
                {magazine.SentAt &&
                  dayjs(magazine.SentAt.toDate()).format("YYYY/MM/DD HH:mm:ss")}
              </TableCell>
              <TableCell>
                {magazine.CreateAt &&
                  dayjs(magazine.CreateAt.toDate()).format(
                    "YYYY/MM/DD HH:mm:ss"
                  )}
              </TableCell>
              <TableCell>
                {getMailMagazineStatusName(magazine.MailMagazineStatus)}
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
}
