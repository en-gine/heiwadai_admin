"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useCallback, useRef } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLogin } from "@/hooks/api/useLogin"

const Page = () => (
  <main>
    {/* <Titlebar /> */}
    <CardWithForm />
  </main>
)

export default Page

const CardWithForm = () => {
  const { resetPasswordMail } = useLogin()
  const router = useRouter()
  const mailRef = useRef<HTMLInputElement>(null)

  const handleResetPassword = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const mail = mailRef.current?.value
      if (!mail) {
        alert("アドレスを入力してください")
        return
      }
      try {
        await resetPasswordMail(mail)
        alert("リセットメールをご指定のアドレスに送信しました。")
        router.push("/")
      } catch (error) {
        console.error(error)
        alert("設定に失敗しました。")
      }
    },
    [router, resetPasswordMail]
  )

  return (
    <Card className="w-[370px] m-auto">
      <form onSubmit={handleResetPassword}>
        <CardHeader>
          <CardTitle>パスワード再設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="mail">メールアドレス</Label>
              <Input id="mail" type="mail" ref={mailRef} required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href="/">戻る</Link>
          <Button type="submit">パスワードリセット送信</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
