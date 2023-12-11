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
  req.header.set("Authorization", `${_getCookie("accessToken")}`)
  req.header.set("X-Refresh-Token", `${_getCookie("refreshToken")}`)
  return await next(req)
}

// const setAuthHeader: Interceptor = (next) => async (req) => {
//   const res = await next(req)
//   // レスポンスヘッダーからTokenを取得
//   const token = res.header.get("AccessToken")
//   const refreshToken = res.header.get("RefreshToken")
//   const expiresIn = res.header.get("Expire")
//   // TokenがあればCookieに保存
//   if (token) {
//     _setCookie("accessToken", token, Number(expiresIn))
//   }
//   if (refreshToken) {
//     _setCookie("refreshToken", refreshToken)
//   }

//   return res
// }

const transport = createConnectTransport({
  baseUrl: BASE_URL,
  interceptors: [authHeader],
})

const _setCookie = (key: string, value: string, maxAge?: number) => {
  setCookie(null, key, value, {
    maxAge: maxAge,
    path: "/",
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  })
}

const _destroyCookie = (key: string) => {
  destroyCookie(null, key)
}

const _getCookie = (key: string) => {
  return parseCookies(null, key)
}

export const clientFetcher = <T extends ServiceType>(service: T) => {
  return useMemo(() => createPromiseClient(service, transport), [service])
}
