"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import Link from "next/link"

import { CheckinsResponse } from "@/api/v1/admin/UserCheckin_pb"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

type Props = {
  data: JsonValue
}
export const UserListTable = ({ data }: Props) => {
  const checkins = data ? CheckinsResponse.fromJson(data).Checkins : undefined

  return (
    <>
      <h2>直近のチェックイン</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ユーザー名</TableHead>
            <TableHead>チェックイン店舗</TableHead>
            <TableHead>チェックイン時間</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {checkins?.map((checkin) => (
            <TableRow key={checkin.CheckinAt?.toJsonString()}>
              <TableCell className="font-medium">
                <Link href={`/dashboard/users/${checkin.UserID}`}>
                  {checkin.UserLastName} {checkin.UserFirstName}
                </Link>
              </TableCell>
              <TableCell className="font-medium">
                <Link href={`/dashboard/users/${checkin.UserID}`}>
                  {checkin.StoreName} {checkin.StoreBranchName}
                </Link>
              </TableCell>
              <TableCell>
                {dayjs(checkin.CheckinAt?.toDate()).format(
                  "YYYY/MM/DD HH:mm:ss"
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
