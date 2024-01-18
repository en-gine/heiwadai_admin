"use client"

import { useQuery } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useState } from "react"

import { getUserLog } from "@/api/v1/admin/UserCheckin-UserCheckinController_connectquery"
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

export const CheckinTable = ({ userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(getUserLog, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    UserID: userId,
    Pager: { CurrentPage: currentPage, PerPage: 30 }
  })

  const { Checkins, PageResponse } = data ?? {}

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>チェックイン店舗</TableHead>
            <TableHead>チェックイン時間</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Checkins?.map((checkin) => (
            <TableRow key={checkin.ID}>
              <TableCell className="font-medium">
                {checkin.StoreName} {checkin.StoreBranchName}
              </TableCell>
              <TableCell className="font-medium">
                {dayjs(checkin.CheckinAt?.toDate()).format(
                  "YYYY/MM/DD HH:mm:ss"
                )}
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
