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

export const useClientGRPC = <T extends ServiceType>(service: T) => {
  const client = () => {
    return createPromiseClient(service, transport)
  }
  return { client }
}
