"use client"

import { useCallback, useState, useRef, FormEvent } from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { useLogin } from "./hooks/useLogin"
import { useRouter } from 'next/navigation';

export default function Home() {
  return (
    <main>
      {/* <Titlebar /> */}
      <CardWithForm />
    </main>
  )
}

export function CardWithForm() {
  const { signIn } = useLogin()
  const router = useRouter();

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const handleLogin = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      const email = emailRef.current?.value;
      const password = passwordRef.current?.value;
      if (!email || !password) {
        alert("Emailとパスワードを入力してください");
        return;
      }
      try {
        await signIn({
          email,
          password
        })
        router.push("/dashboard")
      } catch (error) {
        alert("ログインに失敗しました");
      }
    },
    [emailRef.current?.value, emailRef.current?.value]
  )

  return (
    <Card className="w-[370px] m-auto">
      <form onSubmit={handleLogin}>
      <CardHeader>
        <CardTitle>平和台ホテルアプリ管理画面</CardTitle>
      </CardHeader>
      <CardContent>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Email</Label>
              <Input id="email" type="email" ref={emailRef} required/>
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" ref={passwordRef} required />
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit">ログイン</Button>
      </CardFooter>
      </form>
    </Card>
  )
}
