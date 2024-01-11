"use client"

import { JsonValue } from "@bufbuild/protobuf"
import Link from "next/link"

import { AdminListResponse } from "@/api/v1/admin/AdminData_pb"
import { Stores } from "@/api/v1/shared/Store_pb"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

export type Props = { adminData: JsonValue; storeData: JsonValue }
export const AdminListTable = ({ adminData, storeData }: Props) => {
  const { Admins } = AdminListResponse.fromJson(adminData)
  const { Stores: stores } = Stores.fromJson(storeData)
  return (
    <>
      <div className="text-right">
        <Button variant="default" className="mb-4">
          <Link href="./admin/new">新規作成</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">名前</TableHead>
            <TableHead>メール</TableHead>
            <TableHead>ログイン</TableHead>
            <TableHead>所属</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Admins.map((admin) => (
            <TableRow key={admin.ID}>
              <TableCell className="font-medium">
                <Link href={`./admin/${admin.ID}`}>{admin.Name}</Link>
              </TableCell>
              <TableCell>{admin.Mail}</TableCell>
              <TableCell>
                {(() => {
                  if (!admin.IsConfirmed) {
                    return <>メール認証待ち</>
                  }
                  if (admin.IsActive) {
                    return <>可</>
                  }
                  return <>不可</>
                })()}
              </TableCell>
              <TableCell>
                {stores.find((store) => store.ID === admin.StoreID)?.Name}
                {stores.find((store) => store.ID === admin.StoreID)?.BranchName}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
