"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import Link from "next/link"

import { CouponListResponse } from "@/api/v1/admin/Coupon_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { getCouponStatusName } from "@/types/CouponStatus"

export type Props = { data: JsonValue }
export const CouponListTable = ({ data }: Props) => {
  const { Coupons } = CouponListResponse.fromJson(data)
  return (
    <>
      <p className="text-sm">
        特別クーポンを発行することができます。
        <br />
        下書き保存後に発行することができます。（一度発行した場合は編集／削除できません。）
      </p>
      <div className="text-right">
        <Button variant="default" className="mb-4">
          <Link href="./coupon/new">新規作成</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>クーポン名</TableHead>
            <TableHead>値引額</TableHead>
            <TableHead>期限</TableHead>
            <TableHead>作成日</TableHead>
            <TableHead>ステータス</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Coupons.map((cpn) => (
            <TableRow key={cpn.ID}>
              <TableCell className="font-medium">
                <Link href={`./coupon/${cpn.ID}`}>{cpn.Name}クーポン</Link>
              </TableCell>
              <TableCell>
                {cpn.DiscountAmount?.toLocaleString()}円引き
              </TableCell>
              <TableCell>
                {dayjs(cpn.ExpireAt?.toDate()).format("YYYY/MM/DD")}
              </TableCell>
              <TableCell>
                {dayjs(cpn.CreateAt?.toDate()).format("YYYY/MM/DD HH:mm")}
              </TableCell>
              <TableCell>{getCouponStatusName(cpn.Status)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
