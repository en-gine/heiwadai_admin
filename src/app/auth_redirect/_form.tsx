"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { FormEvent, useCallback, useEffect, useRef, useState } from "react"

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

export const CardWithForm = () => {
  const { setNewPassword } = useLogin()
  const router = useRouter()

  const [accessToken, setAccessToken] = useState<string | null>(null)
  const [paramError, setParamError] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.substring(1)
      const params = new URLSearchParams(hash)

      setAccessToken(params.get("access_token"))
      setParamError(params.get("error"))
    }
  }, [])

  const passwordRef = useRef<HTMLInputElement>(null)

  const handleSetNewPassword = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const password = passwordRef.current?.value
      if (!password) {
        alert("パスワードを入力してください")
        return
      }
      if (accessToken === null || accessToken === "") {
        alert("アクセストークンがありません。\n処理を中止します。")
        router.push("/")
        return null
      }
      try {
        await setNewPassword(accessToken, password)
        alert("設定しました。\nログインしてください。")
        router.push("/")
      } catch (e) {
        console.error(e)
        if (e instanceof Error) {
          alert(`設定に失敗しました。\n${e.message}`)
        }
      }
    },
    [router, setNewPassword, accessToken]
  )

  return (
    <Card className="w-[370px] m-auto">
      <form onSubmit={handleSetNewPassword}>
        <CardHeader>
          <CardTitle>パスワード設定</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            {paramError && (
              <>
                <span className="text-red-500">
                  ※有効期限が切れたか、エラーが発生しました。最初から手続きしてください。
                </span>
                <Link href="/">←戻る</Link>
              </>
            )}
            {!accessToken && !paramError && (
              <>
                <span className="text-red-500">
                  ※トークンが確認出来ません。改めて認証メールからアクセスしてください。
                </span>
                <Link href="/">←戻る</Link>
              </>
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
