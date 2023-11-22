"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export enum Prefecture {
  Hokkaido,
  Aomori,
  Iwate,
  Miyagi,
  Akita,
  Yamagata,
  Fukushima,
  Ibaraki,
  Tochigi,
  Gunma,
  Saitama,
  Chiba,
  Tokyo,
  Kanagawa,
  Niigata,
  Toyama,
  Ishikawa,
  Fukui,
  Yamanashi,
  Nagano,
  Gifu,
  Shizuoka,
  Aichi,
  Mie,
  Shiga,
  Kyoto,
  Osaka,
  Hyogo,
  Nara,
  Wakayama,
  Tottori,
  Shimane,
  Okayama,
  Hiroshima,
  Yamaguchi,
  Tokushima,
  Kagawa,
  Ehime,
  Kochi,
  Fukuoka,
  Saga,
  Nagasaki,
  Kumamoto,
  Oita,
  Miyazaki,
  Kagoshima,
  Okinawa,
}

const data: User[] = [
  {
    id: "m5gr84i9",
    firstName: "m5gr",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyfirstName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
  },
  {
    id: "3u1reuv4",
    firstName: "3u1reuv4",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyfirstName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
  },
  {
    id: "derv1ws0",
    firstName: "derv1ws0",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyfirstName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
  },
  {
    id: "5kma53ae",
    firstName: "5kma53ae",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyfirstName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
  },
  {
    id: "bhqecj4p",
    firstName: "bhqecj4p",
    lastName: "84i9",
    firstNameKana: "m5gr",
    lastNameKana: "84i9",
    companyfirstName: "string",
    birthDate: "string",
    zipCode: "string",
    prefecture: Prefecture.Fukuoka,
    city: "string",
    address: "string",
    tel: "string",
    mail: "ken99@yahoo.com",
    acceptMail: true,
    CheckInAt: "2023/9/20",
  },
]

export type User = {
  id: string
  firstName: string
  lastName: string
  firstNameKana: string
  lastNameKana: string
  companyfirstName: string
  birthDate: string
  zipCode: string
  prefecture: Prefecture
  city: string
  address: string
  tel: string
  mail: string
  acceptMail: boolean
  CheckInAt: string
}

export default function Home(props: { children: React.ReactNode }) {
  return <DataTable />
}

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          ユーザー名
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">
        {row.getValue("firstName")} {row.original.lastName}
      </div>
    ),
  },
  {
    accessorKey: "prefecture",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          都道府県
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("prefecture")}</div>
    ),
  },
  {
    accessorKey: "CheckInAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          最終チェックイン
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("CheckInAt")}</div>
    ),
  },
]

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 50,
      },
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="姓"
          value={
            (table.getColumn("lastName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("lastName")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
        &nbsp;
        <Input
          placeholder="せい"
          value={
            (table.getColumn("lastNameKana")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("lastNameKana")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
        &nbsp;
        {/* <Input
          placeholder="都道府県"
          value={
            (table.getColumn("prefecture")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("prefecture")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        /> */}
        <SelectPref />
      </div>
      <div className="flex items-center py-4">
        <Input
          placeholder="名"
          value={
            (table.getColumn("firstName")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstName")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
        &nbsp;
        <Input
          placeholder="めい"
          value={
            (table.getColumn("firstNameKana")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("firstNameKana")?.setFilterValue(event.target.value)
          }
          className="max-w-xs"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        {/* <div className="text-sm font-medium">
          Page {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount()}
        </div> */}
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

const SelectPref = () => {
  // export function Prefectures() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="都道府県" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className="overflow-y-auto max-h-[25rem]">
          <SelectGroup>
            <SelectLabel>北海道</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Hokkaido)}>
              {getPrefName(Prefecture.Hokkaido)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>東北</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Aomori)}>
              {getPrefName(Prefecture.Aomori)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Iwate)}>
              {getPrefName(Prefecture.Iwate)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Miyagi)}>
              {getPrefName(Prefecture.Miyagi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Akita)}>
              {getPrefName(Prefecture.Akita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Akita)}>
              {getPrefName(Prefecture.Akita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamagata)}>
              {getPrefName(Prefecture.Yamagata)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Fukushima)}>
              {getPrefName(Prefecture.Fukushima)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>関東</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Ibaraki)}>
              {getPrefName(Prefecture.Ibaraki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Tochigi)}>
              {getPrefName(Prefecture.Tochigi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Gunma)}>
              {getPrefName(Prefecture.Gunma)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Saitama)}>
              {getPrefName(Prefecture.Saitama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Chiba)}>
              {getPrefName(Prefecture.Chiba)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Tokyo)}>
              {getPrefName(Prefecture.Tokyo)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kanagawa)}>
              {getPrefName(Prefecture.Kanagawa)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>中部</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Niigata)}>
              {getPrefName(Prefecture.Niigata)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Toyama)}>
              {getPrefName(Prefecture.Toyama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Ishikawa)}>
              {getPrefName(Prefecture.Ishikawa)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Fukui)}>
              {getPrefName(Prefecture.Fukui)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamanashi)}>
              {getPrefName(Prefecture.Yamanashi)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nagano)}>
              {getPrefName(Prefecture.Nagano)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Gifu)}>
              {getPrefName(Prefecture.Gifu)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shizuoka)}>
              {getPrefName(Prefecture.Shizuoka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Aichi)}>
              {getPrefName(Prefecture.Aichi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>近畿</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Mie)}>
              {getPrefName(Prefecture.Mie)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shiga)}>
              {getPrefName(Prefecture.Shiga)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kyoto)}>
              {getPrefName(Prefecture.Kyoto)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Osaka)}>
              {getPrefName(Prefecture.Osaka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Hyogo)}>
              {getPrefName(Prefecture.Hyogo)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nara)}>
              {getPrefName(Prefecture.Nara)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Wakayama)}>
              {getPrefName(Prefecture.Wakayama)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>中国</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Tottori)}>
              {getPrefName(Prefecture.Tottori)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Shimane)}>
              {getPrefName(Prefecture.Shimane)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Okayama)}>
              {getPrefName(Prefecture.Okayama)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Hiroshima)}>
              {getPrefName(Prefecture.Hiroshima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Yamaguchi)}>
              {getPrefName(Prefecture.Yamaguchi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>四国</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Tokushima)}>
              {getPrefName(Prefecture.Tokushima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kagawa)}>
              {getPrefName(Prefecture.Kagawa)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Ehime)}>
              {getPrefName(Prefecture.Ehime)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kochi)}>
              {getPrefName(Prefecture.Kochi)}
            </SelectItem>
          </SelectGroup>
          <SelectGroup>
            <SelectLabel>九州・沖縄</SelectLabel>
            <SelectItem value={getPrefName(Prefecture.Fukuoka)}>
              {getPrefName(Prefecture.Fukuoka)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Saga)}>
              {getPrefName(Prefecture.Saga)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Nagasaki)}>
              {getPrefName(Prefecture.Nagasaki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kumamoto)}>
              {getPrefName(Prefecture.Kumamoto)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Oita)}>
              {getPrefName(Prefecture.Oita)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Miyazaki)}>
              {getPrefName(Prefecture.Miyazaki)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Kagoshima)}>
              {getPrefName(Prefecture.Kagoshima)}
            </SelectItem>
            <SelectItem value={getPrefName(Prefecture.Okinawa)}>
              {getPrefName(Prefecture.Okinawa)}
            </SelectItem>
          </SelectGroup>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function getPrefName(p: Prefecture): string {
  switch (p) {
    case Prefecture.Hokkaido:
      return "北海道"
    case Prefecture.Aomori:
      return "青森県"
    case Prefecture.Iwate:
      return "岩手県"
    case Prefecture.Miyagi:
      return "宮城県"
    case Prefecture.Akita:
      return "秋田県"
    case Prefecture.Yamagata:
      return "山形県"
    case Prefecture.Fukushima:
      return "福島県"
    case Prefecture.Ibaraki:
      return "茨城県"
    case Prefecture.Tochigi:
      return "栃木県"
    case Prefecture.Gunma:
      return "群馬県"
    case Prefecture.Saitama:
      return "埼玉県"
    case Prefecture.Chiba:
      return "千葉県"
    case Prefecture.Tokyo:
      return "東京都"
    case Prefecture.Kanagawa:
      return "神奈川県"
    case Prefecture.Niigata:
      return "新潟県"
    case Prefecture.Toyama:
      return "富山県"
    case Prefecture.Ishikawa:
      return "石川県"
    case Prefecture.Fukui:
      return "福井県"
    case Prefecture.Yamanashi:
      return "山梨県"
    case Prefecture.Nagano:
      return "長野県"
    case Prefecture.Gifu:
      return "岐阜県"
    case Prefecture.Shizuoka:
      return "静岡県"
    case Prefecture.Aichi:
      return "愛知県"
    case Prefecture.Mie:
      return "三重県"
    case Prefecture.Shiga:
      return "滋賀県"
    case Prefecture.Kyoto:
      return "京都府"
    case Prefecture.Osaka:
      return "大阪府"
    case Prefecture.Hyogo:
      return "兵庫県"
    case Prefecture.Nara:
      return "奈良県"
    case Prefecture.Wakayama:
      return "和歌山県"
    case Prefecture.Tottori:
      return "鳥取県"
    case Prefecture.Shimane:
      return "島根県"
    case Prefecture.Okayama:
      return "岡山県"
    case Prefecture.Hiroshima:
      return "広島県"
    case Prefecture.Yamaguchi:
      return "山口県"
    case Prefecture.Tokushima:
      return "徳島県"
    case Prefecture.Kagawa:
      return "香川県"
    case Prefecture.Ehime:
      return "愛媛県"
    case Prefecture.Kochi:
      return "高知県"
    case Prefecture.Fukuoka:
      return "福岡県"
    case Prefecture.Saga:
      return "佐賀県"
    case Prefecture.Nagasaki:
      return "長崎県"
    case Prefecture.Kumamoto:
      return "熊本県"
    case Prefecture.Oita:
      return "大分県"
    case Prefecture.Miyazaki:
      return "宮崎県"
    case Prefecture.Kagoshima:
      return "鹿児島県"
    case Prefecture.Okinawa:
      return "沖縄県"
  }
}
