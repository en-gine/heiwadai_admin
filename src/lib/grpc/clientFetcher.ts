import { useMemo } from "react"
import { ServiceType } from "@bufbuild/protobuf"

import {
  createPromiseClient,
  Interceptor,
  ConnectError,
} from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-web"
import { BASE_URL } from "../env"
import { destroyCookie, setCookie, parseCookies } from "nookies"
const authHeader: Interceptor = (next) => async (req) => {
  // リクエストヘッダーにTokenヘッダーを追加
  req.header.set("Authorization", `${getToken("accessToken")}`)
  req.header.set("X-Refresh-Token", `${getToken("refreshToken")}`)
  return await next(req)
}

const setAuthHeader: Interceptor = (next) => async (req) => {
  const res = await next(req)
  // レスポンスヘッダーからTokenを取得
  const token = res.header.get("AccessToken")
  const refreshToken = res.header.get("RefreshToken")
  const expiresIn = res.header.get("Expire")
  // TokenがあればCookieに保存
  if (token) {
    storeToken("accessToken", token, Number(expiresIn))
  }
  if (refreshToken) {
    storeToken("refreshToken", refreshToken)
  }

  return res
}

const transport = createConnectTransport({
  baseUrl: BASE_URL,
  interceptors: [authHeader, setAuthHeader],
})

export const storeToken = (
  key: "accessToken" | "refreshToken",
  value: string,
  maxAge?: number,
) => {
  setCookie(null, key, value, {
    maxAge: maxAge,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
}

export const disposeToken = (key: "accessToken" | "refreshToken") => {
  destroyCookie(null, key)
}

const getToken = (key: "accessToken" | "refreshToken") => {
  const cookies = parseCookies()
  return cookies[key]
}

export const clientFetcher = <T extends ServiceType>(service: T) => {
  return useMemo(() => createPromiseClient(service, transport), [service])
}
