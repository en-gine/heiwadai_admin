"use client"

import dayjs from "dayjs"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
// import { SelectPref } from "@/components/parts/prefecture"
import { getSingleUser } from "@/lib/getUsers"

const Home = (props: { params: { id: string } }) => (
  <DataCard id={props.params.id} />
)

export default Home

const DataCard = (params: { id: string }) => {
  const data = getSingleUser(params.id)
  return (
    <div className="w-full">
      <Card className="w-[700px] mb-20">
        <CardContent>
          <form>
            <div className="grid w-full items-center pt-4">
              <div className="flex items-center justify-between py-2">
                <Label htmlFor="lastName" className="required">
                  姓
                </Label>
                <Input
                  id="lastName"
                  placeholder="* 姓"
                  value={data.lastName}
                  required
                  onChange={(event) => console.debug(event.target.value)}
                  className="max-w-xs"
                />
                <Label htmlFor="firstName" className="required">
                  名
                </Label>
                <Input
                  id="firstName"
                  required
                  placeholder="名"
                  value={data.firstName}
                  onChange={(event) => console.debug(event.target.value)}
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-between py-2">
                <Label htmlFor="lastNameKana" className="required">
                  せい
                </Label>
                <Input
                  placeholder="* せい"
                  id="lastNameKana"
                  required
                  value={data.lastNameKana}
                  onChange={(event) => console.debug(event.target.value)}
                  className="max-w-xs"
                />
                <Label htmlFor="firstNameKana" className="required">
                  めい
                </Label>
                <Input
                  placeholder="めい"
                  id="firstNameKana"
                  value={data.firstNameKana}
                  onChange={(event) => console.debug(event.target.value)}
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-left-2 py-2">
                <Label htmlFor="companyName">会社名</Label>
                <Input
                  placeholder="会社名"
                  id="companyName"
                  value={data.companyName}
                  onChange={(event) => console.debug(event.target.value)}
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center py-4">
                <Label htmlFor="borth-date">生年月日</Label>
                <Input
                  type="date"
                  id="birth-date"
                  className="max-w-[15em]"
                  defaultValue={dayjs(data.birthDate).format("YYYY-MM-DD")}
                />
              </div>
            </div>
          </form>
          <Card className="w-[650px] mt-4">
            <CardHeader>
              <CardTitle>ご住所</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>郵便番号</Label>
              <Input
                placeholder="郵便番号"
                value={data.zipCode}
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
              <Label>都道府県</Label>
              <Input
                placeholder="* 都道府県"
                value={data.prefecture}
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
              <Label>市区町村</Label>
              <Input
                placeholder="市区町村"
                value={data.city}
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
              <Label>番地マンション名</Label>
              <Input
                placeholder="番地マンション名"
                value={data.address}
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
            </CardContent>
          </Card>
          <Card className="w-[650px] mt-4">
            <CardHeader>
              <CardTitle>ご連絡先</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="tel">電話番号</Label>
              <Input
                id="tel"
                placeholder="電話番号"
                value={data.tel}
                type="tel"
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
              <Label htmlFor="mail">メールアドレス</Label>
              <Input
                id="mail"
                placeholder="メールアドレス"
                value={data.mail}
                type="email"
                onChange={(event) => console.debug(event.target.value)}
                className="max-w-xs mb-4"
              />
              <div className="flex items-center space-x-2 mt-6 mb-6">
                <Label htmlFor="magazine">メルマガ配信</Label>
                <RadioGroup
                  id="magazine"
                  defaultValue="1"
                  value={data.acceptMail ? "1" : "0"}
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
              <Label htmlFor="innnerNote">内部伝達事項</Label>

              <Textarea
                id="innnerNote"
                placeholder="内部伝達事項"
                className="mt-b"
                value={data.internalMessage}
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
