"use client"

import Link from "next/link"

import { Store } from "@/api/v1/shared/Store_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export type Props = { stores: Store[] }
export const StoreListTable = ({ stores }: Props) => (
  <>
    <div className="text-right">
      <Button variant="default" className="mb-4">
        <Link href="./message/new">新規作成</Link>
      </Button>
    </div>
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>店舗名</TableHead>
          <TableHead>支店名</TableHead>
          <TableHead>ステータス</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stores.map((store) => (
          <TableRow key={store.ID}>
            <TableCell className="font-medium">
              <Link href={`./store/${store.ID}`}>{store.Name}</Link>
            </TableCell>
            <TableCell>{store.BranchName}</TableCell>
            <TableCell>{store.IsActive ? "公開" : "非表示"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </>
)
