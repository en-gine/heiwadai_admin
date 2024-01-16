// import './globals.css'
import "@/styles/globals.css"
import "@/styles/custom.scss"

import type { Metadata } from "next"
import localFont from "next/font/local"
import React from "react"

import Titlebar from "@/components/parts/titlebar"
import { cn } from "@/lib/utils"

import Providers from "./provider"

// サーバーからだとビルド時にエラーがでるためローカルに移植
const NotoFont = localFont({
  src: "../font/NotoSansJP-VariableFont_wght.ttf",
  variable: "--font-noto"
})
export const fetchCache = "default-no-store"
export const dynamic = "force-dynamic"

export const metadata: Metadata = {
  title: "平和台ホテルアプリ管理画面",
  description: "平和台ホテルアプリ管理画面"
}

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <html lang="ja">
      <body
        className={cn(
          NotoFont.className,
          "bg-gradient-to-r",
          "from-green-400/20",
          "to-blue-500/20"
        )}
      >
        <Titlebar title="平和台ホテルアプリ管理画面" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
export default RootLayout
