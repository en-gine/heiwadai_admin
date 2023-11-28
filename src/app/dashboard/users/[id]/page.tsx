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
  return <DataCard id={props.params.id} />
}


export function DataCard(params: { id: string }) {
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
                  onChange={
                    (event) => console.log(event.target.value)
                  }
                    className="max-w-xs"
                />
                <Input
                  placeholder="名"
                  value={data?.firstName ?? ""}
                  onChange={
                    (event) => console.log(event.target.value)
                  }
                    className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Input
                  placeholder="* せい"
                  value={data?.lastNameKana ?? "" ?? ""}
                  onChange={
                    (event) => console.log(event.target.value)
                  }
                    className="max-w-xs"
                />
                &nbsp;
                <Input
                  placeholder="めい"
                  value={data?.firstNameKana ?? ""}
                  onChange={
                    (event) => console.log(event.target.value)
                  }
                    className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Input
                  placeholder="会社名"
                  value={data?.companyName ?? ""}
                  onChange={
                    (event) => console.log(event.target.value)
                  }
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
                onChange={
                  (event) => console.log(event.target.value)
                }
                className="max-w-xs"
              />
              <Input
                placeholder="* 都道府県"
                value={data?.prefecture ?? ""}
                onChange={
                  (event) => console.log(event.target.value)
                }
                className="max-w-xs mt-4"
              />

              <Input
                placeholder="市区町村"
                value={data?.city ?? ""}
                onChange={
                  (event) => console.log(event.target.value)
                }
                className="max-w-xs mt-4"
              />

              <Input
                placeholder="番地マンション名"
                value={data?.address ?? ""}
                onChange={
                  (event) => console.log(event.target.value)
                }
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
                onChange={
                  (event) => console.log(event.target.value)
                }
                className="max-w-xs"
              />
              <Input
                placeholder="メールアドレス"
                value={data?.mail ?? ""}
                onChange={
                  (event) => console.log(event.target.value)
                }
                className="max-w-xs mt-4"
              />
              <div className="flex items-center space-x-2 mt-4">
                <div>メルマガ配信</div>
                <RadioGroup
                  defaultValue="1"
                  value={data?.acceptMail ? "1" : "0"}
                  className="flex"
                >
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
              <Textarea
                placeholder="内部伝達事項"
                className="mt-4"
                value={data?.internalMessage}
              />
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
