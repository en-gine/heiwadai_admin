import { useMemo } from "react"
import { ServiceType } from "@bufbuild/protobuf"
import { createConnectTransport } from "@connectrpc/connect-node"
import { createPromiseClient } from "@connectrpc/connect"
import { BASE_URL } from "./env"
const transport = createConnectTransport({
  baseUrl: BASE_URL,
  httpVersion: "1.1",
})

export const useClient = <T extends ServiceType>(service: T) => {
  return useMemo(() => createPromiseClient(service, transport), [service])
}
