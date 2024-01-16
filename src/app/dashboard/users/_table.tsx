"use client"

import { JsonValue } from "@bufbuild/protobuf"
import dayjs from "dayjs"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useCallback, useState } from "react"

import { UserListResponse } from "@/api/v1/admin/UserData_pb"
import { getPrefName, SelectPref } from "@/components/parts/prefecture"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"

import type { SearchFilterProps } from "./page"

export type Props = { data: JsonValue; searchParam?: SearchFilterProps }

export const UserListTable = ({ data, searchParam }: Props) => {
  const users = data ? UserListResponse.fromJson(data) : undefined

  const [filter, setFilter] = useState<SearchFilterProps | undefined>(
    searchParam
  )

  const router = useRouter()
  const handleSearch = useCallback(() => {
    if (filter) {
      router.push(`/dashboard/users?search=${JSON.stringify(filter)}`)
    }
  }, [filter, router])

  const handleClear = useCallback(() => {
    setFilter({})
    router.push(`/dashboard/users`)
  }, [router])
  return (
    <>
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="姓"
            value={filter?.LastName}
            className="max-w-xs"
            onChange={(event) => {
              setFilter({ ...filter, LastName: event.target.value })
            }}
          />
          &nbsp;
          <Input
            placeholder="名"
            value={filter?.FirstName}
            className="max-w-xs"
            onChange={(event) => {
              setFilter({ ...filter, FirstName: event.target.value })
            }}
          />
          &nbsp;
          <SelectPref
            value={filter?.Prefecture?.toString()}
            onValueChange={(value) => {
              setFilter({ ...filter, Prefecture: value })
            }}
          />
        </div>
        <div className="flex items-center py-4">
          <Input
            placeholder="せい"
            value={filter?.LastNameKana}
            className="max-w-xs"
            onChange={(event) => {
              setFilter({ ...filter, LastNameKana: event.target.value })
            }}
          />
          &nbsp;
          <Input
            placeholder="めい"
            value={filter?.FirstNameKana}
            className="max-w-xs"
            onChange={(event) => {
              setFilter({ ...filter, FirstNameKana: event.target.value })
            }}
          />
          &nbsp;
          <div className="text-center w-full">
            <Button onClick={handleSearch} className="mr-4">
              検索
            </Button>
            <Button onClick={handleClear} variant="secondary">
              クリア
            </Button>
          </div>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ユーザー名</TableHead>
            <TableHead>ふりがな</TableHead>
            <TableHead>都道府県</TableHead>
            <TableHead>最終チェックイン</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users?.Users?.map(({ User: user, LastCheckinAt }) => (
            <TableRow key={user?.ID}>
              <TableCell className="font-medium">
                <Link href={`/dashboard/users/${user?.ID}`}>
                  {user?.LastName} {user?.FirstName}
                </Link>
              </TableCell>
              <TableCell className="font-medium">
                <Link href={`/dashboard/users/${user?.ID}`}>
                  {user?.LastNameKana} {user?.FirstNameKana}
                </Link>
              </TableCell>

              <TableCell>
                {user?.Prefecture && getPrefName(user?.Prefecture)}
              </TableCell>
              <TableCell className="text-right">
                {LastCheckinAt &&
                  dayjs(LastCheckinAt?.toDate()).format("YYYY/MM/DD")}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}
