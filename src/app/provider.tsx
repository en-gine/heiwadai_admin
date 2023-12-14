"use client"

// We can not useState or useRef in a server component, which is why we are
// extracting this part out into it's own file with 'use client' on top
import { TransportProvider } from "@connectrpc/connect-query"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import React, { useState } from "react"

import { transport } from "@/hooks/api/useGrpc"

const Providers = (props: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000
          }
        }
      })
  )

  return (
    <TransportProvider transport={transport}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </TransportProvider>
  )
}

export default Providers
