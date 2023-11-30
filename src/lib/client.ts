import { useMemo } from "react"
import { ServiceType } from "@bufbuild/protobuf"
// import { createConnectTransport } from "@connectrpc/connect-node"
// import { createGrpcWebTransport } from "@connectrpc/connect-node"
import { createPromiseClient, Interceptor } from "@connectrpc/connect"
import { createConnectTransport } from "@connectrpc/connect-web"
import { BASE_URL } from "./env"
import { parseCookies } from "nookies"
const authHeader: Interceptor = (next) => async (req) => {
  // リクエストヘッダーにTokenヘッダーを追加
  req.header.set("Authorization", `${parseCookies(null, "accessToken")}`)
  req.header.set("X-Refresh-Token", `${parseCookies(null, "refreshToken")}`)
  return await next(req)
}

const transport = createConnectTransport({
  baseUrl: BASE_URL,
  httpVersion: "1.1",
  interceptors: [authHeader],
})

export const useClient = <T extends ServiceType>(service: T) => {
  return useMemo(() => createPromiseClient(service, transport), [service])
}
