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
// import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  // DropdownMenuItem,
  // DropdownMenuLabel,
  // DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data: User[] = [
  {
    id: "m5gr84i9",
    name: "m5gr84i9_1",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "3u1reuv4",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "derv1ws0",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "5kma53ae",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "bhqecj4p",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    name: "m5gr84i9_1",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "3u1reuv4",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "derv1ws0",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "5kma53ae",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "bhqecj4p",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    name: "m5gr84i9_1",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "3u1reuv4",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "derv1ws0",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "5kma53ae",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "bhqecj4p",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    name: "m5gr84i9_1",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "3u1reuv4",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "derv1ws0",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "5kma53ae",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "bhqecj4p",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "carmella@hotmail.com",
  },
  {
    id: "m5gr84i9",
    name: "m5gr84i9_1",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    name: "3u1reuv4",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    name: "derv1ws0",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Monserrat44@gmail.com",
  },
  {
    id: "5kma53ae",
    name: "5kma53ae",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "Silas22@gmail.com",
  },
  {
    id: "bhqecj4p",
    name: "bhqecj4p",
    shop: "ken99@yahoo.com",
    checkin: "2023/9/20",
    email: "carmella@hotmail.com",
  },
]

export type User = {
  id: string
  name: string
  shop: string
  checkin: string
  email: string
}


export default function Home(props: { children: React.ReactNode }) {
  return <DataTable />
}


export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
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
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },
  {
    accessorKey: "shop",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          チェックイン店舗
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("shop")}</div>,
  },
  {
    accessorKey: "checkin",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          チェックイン時間
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("checkin")}</div>,
  },
]

export function DataTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
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
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter username..."
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
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
                            header.getContext()
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
                        cell.getContext()
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
