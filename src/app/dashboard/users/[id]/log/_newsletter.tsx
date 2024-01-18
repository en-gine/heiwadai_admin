"use client"

import { useQuery } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useState } from "react"

import { getUserLogList } from "@/api/v1/admin/MailMagazine-MailMagazineController_connectquery"
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

export const NewsletterTable = ({ userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(getUserLogList, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    UserID: userId,
    Pager: { CurrentPage: currentPage, PerPage: 10 }
  })

  const { UserLogs, PageResponse } = data ?? {}

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>メルマガ名</TableHead>
            <TableHead>送信日時</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UserLogs?.map((log) => (
            <TableRow key={log?.ID}>
              <TableCell className="font-medium">{log.Title}</TableCell>
              <TableCell className="font-medium">
                {log.SentAt
                  ? dayjs(log.SentAt?.toDate()).format("YYYY/MM/DD HH:mm:ss")
                  : "未送信"}
              </TableCell>
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
