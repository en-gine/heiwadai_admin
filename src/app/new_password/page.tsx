"use client"

import { useRouter, useSearchParams } from "next/navigation"
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
  const { setNewPassword } = useLogin()
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get("access_token")
  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSetNewPassword = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const password = passwordRef.current?.value
      if (!password) {
        alert("パスワードを入力してください")
        return
      }
      if (token === null || token === "") {
        alert("アクセストークンがありません。\n処理を中止します。")
        router.push("/")
        return null
      }
      try {
        await setNewPassword(token, password)
        alert("設定しました。\nログインしてください。")
        router.push("/")
      } catch (error) {
        console.error(error)
        alert("設定に失敗しました。")
      }
    },
    [router, setNewPassword, token]
  )

  return (
    <Card className="w-[370px] m-auto">
      <form onSubmit={handleSetNewPassword}>
        <CardHeader>
          <CardTitle>パスワード設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {!token && (
              <span className="text-red-500">
                ※トークンが確認出来ません。改めて認証メールからアクセスしてください。
              </span>
            )}
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" ref={passwordRef} required />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="submit">設定</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
