"use client"

import * as React from "react"

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
import { Titlebar } from "@/components/parts/titlebar"

export default function Home() {
  return (
    <main>
      {/* <Titlebar /> */}
      <CardWithForm />
    </main>
  )
}

export function CardWithForm() {
  return (
    <Card className="w-[370px] m-auto">
      <CardHeader>
        <CardTitle>平和台ホテルアプリ管理画面</CardTitle>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">ID</Label>
              <Input id="name" placeholder="" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Password</Label>
              <Input id="name" placeholder="" />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>ログイン</Button>
      </CardFooter>
    </Card>
  )
}
