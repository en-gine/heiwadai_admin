import { createPromiseClient } from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-web"
import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

import { AuthController } from "./api/v1/admin/Auth_connect"
import { BASE_URL } from "./lib/env"

export const middleware = async (request: NextRequest) => {
  // ダッシュボードのページを保護する
  try {
    const prevPath = request.headers.get("next-url")
    if (prevPath === "/") return NextResponse.next() // ログインページからの遷移時は処理をスキップ
    if (request.nextUrl.pathname === "/") return NextResponse.next() // ログインページへの遷移時はログアウトのため処理をスキップ

    const accessToken = request.cookies.get("accessToken")
    const refreshToken = request.cookies.get("refreshToken")
    const transport = createConnectTransport({
      baseUrl: BASE_URL,
      interceptors: [
        (next) => async (req) => {
          // リクエストヘッダーにTokenヘッダーを追加
          req.header.set("Authorization", `${accessToken?.value}`)
          req.header.set("X-Refresh-Token", `${refreshToken?.value}`)
          return await next(req)
        }
      ]
    })
    const client = createPromiseClient(AuthController, transport)
    const data = await client.refresh({
      accessToken: accessToken?.value,
      refreshToken: refreshToken?.value
    })
    // リフレッシュトークンが有効ならば、アクセストークンを更新
    if (data.accessToken) {
      request.cookies.set("accessToken", data.accessToken)
      request.cookies.set("refreshToken", data.refreshToken)
      // request.cookies.set("expireIn", data.expiresIn.toString())
    } else {
      throw new Error("refresh token is invalid")
    }
  } catch (error) {
    console.error(error)
    const url = request.nextUrl.clone()
    url.pathname = "/" // ログインページへのパス
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
export const config = {
  matcher: "/dashboard/:path*"
}
