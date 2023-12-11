"use server"
import { ServiceType } from "@bufbuild/protobuf"
import { createConnectTransport } from "@connectrpc/connect-node"
import { createPromiseClient, Interceptor } from "@connectrpc/connect"
import { BASE_URL } from "../env"
import { cookies } from "next/headers"

const authHeader: Interceptor = (next) => async (req) => {
  // リクエストヘッダーにTokenヘッダーを追加
  req.header.set("Authorization", `${_getCookie("accessToken")}`)
  req.header.set("X-Refresh-Token", `${_getCookie("refreshToken")}`)

  const res = await next(req)
  // レスポンスヘッダーからTokenを取得
  const token = res.header.get("AccessToken")
  const refreshToken = res.header.get("RefreshToken")
  const expiresIn = res.header.get("Expire")
  // TokenがあればCookieに保存
  if (token) {
    _setCookie("accessToken", token, Number(expiresIn))
  }
  if (refreshToken) {
    _setCookie("refreshToken", refreshToken)
  }

  return res
}

const transport = createConnectTransport({
  baseUrl: BASE_URL,
  httpVersion: "1.1",
  interceptors: [authHeader],
})

const _setCookie = (key: string, value: string, maxAge?: number) => {
  cookies().set(key, value, {
    maxAge: maxAge,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
}

const _destroyCookie = (key: string) => {
  cookies().delete(key)
}

const _getCookie = (key: string) => {
  return cookies().get(key)
}

export const serverFetcher = <T extends ServiceType>(service: T) => {
  return createPromiseClient(service, transport)
}

export const isAuthenticatied = () => {
  console.log(_getCookie("accessToken"))
  return !!_getCookie("accessToken")
}
