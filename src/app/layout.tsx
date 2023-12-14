// import './globals.css'
import "@/styles/globals.css"
import "@/styles/custom.scss"

import type { Metadata } from "next"
import { Noto_Sans_JP } from "next/font/google"
import React from "react"

import Titlebar from "@/components/parts/titlebar"

import Providers from "./provider"

const noto = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto"
})

export const metadata: Metadata = {
  title: "平和台ホテルアプリ管理画面",
  description: "Generated by create next app"
}

const RootLayout = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <html lang="ja">
      <body className={noto.variable}>
        <Titlebar title="平和台ホテルアプリ管理画面" />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
export default RootLayout
