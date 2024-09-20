"use client"

import { JsonValue } from "@bufbuild/protobuf"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

import { AdminListResponse } from "@/api/v1/admin/AdminData_pb"
import { Stores } from "@/api/v1/admin/Store_pb"
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
  const router = useRouter()
  const handleLog = useCallback(
    (adminId: string) => {
      router.push(`/dashboard/admin/${adminId}/log`)
    },
    [router]
  )
  return (
    <>
      <p className="text-sm">
        管理画面にログインできるユーザーを作成／管理できます。
        <br />
        新規作成にはメールアドレスの認証が必要です。
      </p>
      <div className="text-right">
        <Button variant="default" className="mb-4">
          <Link href="./admin/new">新規作成</Link>
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="min-w-20">名前</TableHead>
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
              <TableCell>
                {admin?.ID && (
                  <Button
                    variant="outline"
                    onClick={() => handleLog(admin?.ID)}
                  >
                    ログイン履歴
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
