"use client"

import { useQuery } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useState } from "react"

import { getUserCouponList } from "@/api/v1/admin/Coupon-AdminCouponController_connectquery"
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

export const CouponTable = ({ userId }: Props) => {
  const [currentPage, setCurrentPage] = useState(1)
  const { data, isLoading } = useQuery(getUserCouponList, {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    ID: userId,
    Pager: { CurrentPage: currentPage, PerPage: 10 }
  })

  const { UserAttachedCoupons, PageResponse } = data ?? {}

  if (isLoading) {
    return <Loading />
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>クーポン名</TableHead>
            <TableHead>発行日時</TableHead>
            <TableHead>有効期限</TableHead>
            <TableHead>使用日時</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {UserAttachedCoupons?.map((userCoupon) => (
            <TableRow key={userCoupon.Coupon?.ID}>
              <TableCell className="font-medium">
                {userCoupon.Coupon?.Name}
              </TableCell>
              <TableCell className="font-medium">
                {dayjs(userCoupon.Coupon?.CreateAt?.toDate()).format(
                  "YYYY/MM/DD HH:mm:ss"
                )}
              </TableCell>
              <TableCell className="font-medium">
                {dayjs(userCoupon.Coupon?.ExpireAt?.toDate()).format(
                  "YYYY/MM/DD HH:mm:ss"
                )}
              </TableCell>
              <TableCell className="font-medium">
                {dayjs(userCoupon.UsedAt?.toDate()).format(
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
