import { ServiceType } from "@bufbuild/protobuf"
import { createPromiseClient, Interceptor } from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-node"
import { cookies } from "next/headers"

import { BASE_URL } from "./env"

const authHeader: Interceptor = (next) => async (req) => {
  // リクエストヘッダーにTokenヘッダーを追加
  req.header.set("Authorization", `${getCookie("accessToken")}`)
  req.header.set("X-Refresh-Token", `${getCookie("refreshToken")}`)
  const res = await next(req)
  // レスポンスヘッダーからTokenを取得
  res.header.get("AccessToken")
  res.header.get("RefreshToken")
  res.header.get("ExpiresIn")
  return res
}

const transport = createConnectTransport({
  baseUrl: BASE_URL,
  httpVersion: "1.1",
  interceptors: [authHeader]
})

const getCookie = (key: string) => {
  const cookie = cookies().get(key)
  return cookie?.value
}

export const fetcher = <T extends ServiceType>(service: T) =>
  createPromiseClient(service, transport)
