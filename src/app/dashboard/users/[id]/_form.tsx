"use client"

import { JsonValue, Timestamp } from "@bufbuild/protobuf"
import { useMutation } from "@connectrpc/connect-query"
import dayjs from "dayjs"
import { useCallback, useMemo, useState } from "react"

import { UserDataResponse } from "@/api/v1/admin/UserData_pb"
import {
  delete$,
  update
} from "@/api/v1/admin/UserData-UserDataController_connectquery"
import { Prefecture } from "@/api/v1/shared/Prefecture_pb"
import { SelectPref } from "@/components/parts/prefecture"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"

type Props = {
  data?: JsonValue
}

export const DataCard = ({ data }: Props) => {
  const datum = data ? UserDataResponse.fromJson(data) : undefined
  const defaultUser = useMemo(
    () => ({
      ...datum?.User,
      innerNote: datum?.InnerNote,
      isBlackCustomer: datum?.IsBlackCustomer
    }),
    [datum]
  )

  const [updateUser, setUpdateUser] = useState<typeof defaultUser>(defaultUser)
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
  const { mutate: mutateUpdate } = useMutation(update)
  const { mutate: mutateDelete } = useMutation(delete$)
  const handleUpdate = useCallback(() => {
    mutateUpdate(
      {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        UserID: updateUser.ID,
        User: updateUser,
        InnerNote: updateUser.innerNote,
        IsBlackCustomer: updateUser.isBlackCustomer
      },
      {
        onSuccess: () => {
          alert("更新しました。")
        },
        onError: (e) => {
          alert("更新に失敗しました。")
          console.error(e)
        }
      }
    )
  }, [mutateUpdate, updateUser])

  const handleDelete = useCallback(() => {
    mutateDelete(
      {
        ID: defaultUser.ID
      },
      {
        onSuccess: () => {
          setIsDeleteDialogOpen(false)
          alert("削除しました。")
          window.location.href = "/dashboard/users"
        },
        onError: (e) => {
          setIsDeleteDialogOpen(false)
          alert("削除に失敗しました。")
          console.error(e)
        }
      }
    )
  }, [defaultUser, mutateDelete])

  return (
    <div className="w-full">
      <Card className="mb-20">
        <CardContent>
          <form>
            <div className="grid w-full items-center pt-4">
              <div className="flex items-center justify-start py-2">
                <Label htmlFor="lastName" className="required mt-0 w-10">
                  姓
                </Label>
                <Input
                  id="lastName"
                  placeholder="* 姓"
                  value={updateUser.LastName}
                  required
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      LastName: event.target.value
                    })
                  }
                  className="max-w-xs"
                />
                <Label htmlFor="firstName" className="required ml-4 mt-0 w-10">
                  名
                </Label>
                <Input
                  id="firstName"
                  required
                  placeholder="名"
                  value={updateUser.FirstName}
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      FirstName: event.target.value
                    })
                  }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-start py-2">
                <Label htmlFor="lastNameKana" className="required mt-0 w-10">
                  せい
                </Label>
                <Input
                  placeholder="* せい"
                  id="lastNameKana"
                  required
                  value={updateUser.LastNameKana}
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      LastNameKana: event.target.value
                    })
                  }
                  className="max-w-xs"
                />
                <Label
                  htmlFor="firstNameKana"
                  className="required mt-0 ml-4 w-10"
                >
                  めい
                </Label>
                <Input
                  placeholder="めい"
                  id="firstNameKana"
                  value={updateUser.FirstNameKana}
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      FirstNameKana: event.target.value
                    })
                  }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center justify-left-2 py-2">
                <Label htmlFor="companyName" className="mt-0 mr-4">
                  会社名
                </Label>
                <Input
                  placeholder="会社名"
                  id="companyName"
                  value={updateUser.CompanyName}
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      CompanyName: event.target.value
                    })
                  }
                  className="max-w-xs"
                />
              </div>
              <div className="flex items-center py-4">
                <Label htmlFor="borth-date" className="mt-0 mr-4">
                  生年月日
                </Label>
                <Input
                  type="date"
                  id="birth-date"
                  className="max-w-[15em]"
                  value={
                    updateUser.BirthDate
                      ? dayjs(updateUser?.BirthDate?.toDate()).format(
                          "YYYY-MM-DD"
                        )
                      : undefined
                  }
                  onChange={(event) =>
                    setUpdateUser({
                      ...updateUser,
                      BirthDate: event.target.value
                        ? Timestamp.fromDate(new Date(event.target.value))
                        : undefined
                    })
                  }
                />
              </div>
            </div>
          </form>
          <Card className=" mt-4">
            <CardHeader>
              <CardTitle>ご住所</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>郵便番号</Label>
              <Input
                placeholder="郵便番号"
                value={updateUser.ZipCode}
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    ZipCode: event.target.value
                  })
                }
                className="max-w-xs mb-4"
              />
              <Label>都道府県</Label>
              <SelectPref
                onValueChange={(value) =>
                  setUpdateUser({
                    ...updateUser,
                    Prefecture: value
                      ? (value as unknown as Prefecture)
                      : undefined
                  })
                }
                value={updateUser.Prefecture?.toString()}
              />
              <Label>市区町村</Label>
              <Input
                placeholder="市区町村"
                value={updateUser.City}
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    City: event.target.value
                  })
                }
                className="max-w-xs mb-4"
              />
              <Label>番地マンション名</Label>
              <Input
                placeholder="番地マンション名"
                value={updateUser.Address}
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    Address: event.target.value
                  })
                }
                className="max-w-xs mb-4"
              />
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>ご連絡先</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="tel">電話番号</Label>
              <Input
                id="tel"
                placeholder="電話番号"
                value={updateUser.Tel}
                type="tel"
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    Tel: event.target.value
                  })
                }
                className="max-w-xs mb-4"
              />
              <Label htmlFor="mail">メールアドレス</Label>
              <Input
                id="mail"
                readOnly
                aria-disabled
                placeholder="メールアドレス"
                defaultValue={updateUser.Mail}
                type="email"
                disabled
                className="max-w-xs mb-4"
              />
              <div className="space-x-2 mt-6 mb-6">
                <Label htmlFor="magazine" className="mt-0 mb-4">
                  メルマガ配信
                </Label>
                <RadioGroup
                  id="magazine"
                  defaultValue="1"
                  value={updateUser.AcceptMail ? "1" : "0"}
                  onValueChange={(value) =>
                    setUpdateUser({
                      ...updateUser,
                      AcceptMail: value === "1"
                    })
                  }
                  className="flex"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="r1" />
                    <Label htmlFor="r1" className="mt-0">
                      受信する
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="0" id="r2" />
                    <Label htmlFor="r2" className="mt-0">
                      受信しない
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Label htmlFor="innnerNote">内部伝達事項</Label>

              <Textarea
                id="innnerNote"
                placeholder="内部伝達事項"
                className="mt-b"
                value={updateUser.innerNote}
                onChange={(event) =>
                  setUpdateUser({
                    ...updateUser,
                    innerNote: event.target.value
                  })
                }
              />
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="block">
          <div className="flex items-center space-x-2 text-red-500">
            <Checkbox
              id="is-black-customer"
              checked={updateUser.isBlackCustomer}
              onCheckedChange={() => {
                setUpdateUser({
                  ...updateUser,
                  isBlackCustomer: !updateUser.isBlackCustomer
                })
              }}
            />
            <label
              htmlFor="is-black-customer"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              アプリ使用禁止
            </label>
          </div>
          <div className="flex justify-between mt-4">
            <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="destructive">
                  ユーザー削除
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>ユーザーを削除しますか？</DialogTitle>
                  <DialogDescription>
                    この操作は取り消すことができません。本当にこのユーザーを削除してもよろしいですか？
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>
                    キャンセル
                  </Button>
                  <Button variant="destructive" onClick={handleDelete}>
                    削除する
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <Button onClick={handleUpdate}>変更</Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
