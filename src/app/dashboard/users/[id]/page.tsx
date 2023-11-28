"use client"

import * as React from "react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

// import { SelectPref } from "@/components/parts/prefecture"
import { getSingleUser } from "@/lib/getUsers"

export default function Home(props: {
  children: React.ReactNode
  params: { id: string }
}) {
  return <DataTable id={props.params.id} />
}

// export const columns: ColumnDef<User>[] = [
//   {
//     accessorKey: "firstName",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           ユーザー名
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => (
//       <div className="lowercase">
//         {row.getValue("firstName")} {row.original.lastName}
//       </div>
//     ),
//   },
//   {
//     accessorKey: "prefecture",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           都道府県
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => (
//       <div className="lowercase">{row.getValue("prefecture")}</div>
//     ),
//   },
//   {
//     accessorKey: "CheckInAt",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           最終チェックイン
//           <ArrowUpDown className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => (
//       <div className="lowercase">{row.getValue("CheckInAt")}</div>
//     ),
//   },
// ]

export function DataTable(params: { id: string }) {
  const data = getSingleUser(params.id)

  // const [sorting, setSorting] = React.useState<SortingState>([])
  // const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
  //   [],
  // )
  // const [columnVisibility, setColumnVisibility] =
  //   React.useState<VisibilityState>({})
  // const [rowSelection, setRowSelection] = React.useState({})

  return (
    <div className="w-full">
      <Card className="w-[700px] mb-20">
        <CardContent>
          <form>
            <div className="grid w-full items-center pt-4">
              <div className="flex items-center justify-between py-2">
                <Input
                  placeholder="* 姓"
                  value={data?.lastName ?? ""}
                  // onChange={(event) =>
                  // }
                  className="max-w-xs"
                />
                <Input
                  placeholder="名"
                  value={data?.firstName ?? ""}
                  // onChange={(event) =>
                  //   table
                  //     .getColumn("firstName")
                  //     ?.setFilterValue(event.target.value)
                  // }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Input
                  placeholder="* せい"
                  value={data?.lastNameKana ?? "" ?? ""}
                  // onChange={(event) =>
                  //   table
                  //     .getColumn("lastNameKana")
                  //     ?.setFilterValue(event.target.value)
                  // }
                  className="max-w-xs"
                />
                &nbsp;
                <Input
                  placeholder="めい"
                  value={data?.firstNameKana ?? ""}
                  // onChange={(event) =>
                  //   table
                  //     .getColumn("firstNameKana")
                  //     ?.setFilterValue(event.target.value)
                  // }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Input
                  placeholder="会社名"
                  value={data?.companyName ?? ""}
                  // onChange={(event) =>
                  //   table
                  //     .getColumn("companyName")
                  //     ?.setFilterValue(event.target.value)
                  // }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center py-4">生年月日</div>
            </div>
          </form>
          <Card className="w-[650px] mt-4">
            <CardHeader>
              <CardTitle>ご住所</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="郵便番号"
                value={data?.zipCode ?? ""}
                // onChange={(event) =>
                //   table.getColumn("zipCode")?.setFilterValue(event.target.value)
                // }
                className="max-w-xs"
              />
              <Input
                placeholder="* 都道府県"
                value={data?.prefecture ?? ""}
                // onChange={(event) =>
                //   table
                //     .getColumn("prefecture")
                //     ?.setFilterValue(event.target.value)
                // }
                className="max-w-xs mt-4"
              />

              <Input
                placeholder="市区町村"
                value={data?.city ?? ""}
                // onChange={(event) =>
                //   table.getColumn("city")?.setFilterValue(event.target.value)
                // }
                className="max-w-xs mt-4"
              />

              <Input
                placeholder="番地マンション名"
                value={data?.address ?? ""}
                // onChange={(event) =>
                //   table.getColumn("address")?.setFilterValue(event.target.value)
                // }
                className="max-w-xs mt-4"
              />
            </CardContent>
          </Card>
          <Card className="w-[650px] mt-4">
            <CardHeader>
              <CardTitle>ご連絡先</CardTitle>
            </CardHeader>
            <CardContent>
              <Input
                placeholder="電話番号"
                value={data?.tel ?? ""}
                // onChange={(event) =>
                //   table.getColumn("tel")?.setFilterValue(event.target.value)
                // }
                className="max-w-xs"
              />
              <Input
                placeholder="メールアドレス"
                value={data?.mail ?? ""}
                // onChange={(event) =>
                //   table.getColumn("mail")?.setFilterValue(event.target.value)
                // }
                className="max-w-xs mt-4"
              />
              <div className="flex items-center space-x-2 mt-4">
                <div>メルマガ配信</div>
                <RadioGroup defaultValue="1" className="flex">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="r1" />
                    <Label htmlFor="r1">受信する</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="r2" />
                    <Label htmlFor="r2">受信しない</Label>
                  </div>
                </RadioGroup>
              </div>
              <Textarea placeholder="内部伝達事項" className="mt-4" />
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="block">
          <div className="flex items-center space-x-2 text-red-500">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              アプリ使用禁止
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <Button variant="destructive">ユーザー削除</Button>
            <Button>変更</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
