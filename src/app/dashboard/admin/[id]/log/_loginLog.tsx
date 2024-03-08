"use client"

import { useQuery } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useState } from "react"

import { getLoginLogList } from "@/api/v1/admin/AdminData-AdminDataController_connectquery"
import { Loading } from "@/components/parts/loading"
import { Pagination } from "@/components/parts/pagination.client"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

type Props = {
  userId: string
}

export const LoginLogTable = ({ userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(getLoginLogList, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    UserID: userId,
    Pager: { CurrentPage: currentPage, PerPage: 10 }
  })
  const { LoginLogs, PageResponse } = data ?? {}

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ログイン日時</TableHead>
            <TableHead>ログインIPアドレス</TableHead>
            <TableHead>ユーザーエージェント</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {LoginLogs?.map((log) => (
            <TableRow key={log.LoginAt?.toJsonString()}>
              <TableCell className="font-medium">
                {dayjs(log.LoginAt?.toDate()).format("YYYY/MM/DD HH:mm:ss")}
              </TableCell>
              <TableCell className="font-medium">{log.IP}</TableCell>
              <TableCell className="font-medium">{log.UserAgent}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {PageResponse && (
        <Pagination
          {...PageResponse}
          onPageClick={(page) => {
            setCurrentPage(page)
          }}
        />
      )}
    </>
  )
}
