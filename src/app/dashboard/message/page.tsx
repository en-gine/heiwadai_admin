import { useSearchParams } from "next/navigation"
import * as React from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Pagination } from "@/components/parts/pagination"
import { fetcher } from "@/lib/fetch"

import { MessageListTable } from "./_table"

const Page = async () => {
  const client = fetcher(MessageController)
  const searchParams = useSearchParams()
  const pageParam = searchParams.get("page")
  const currentPage =
    pageParam && Number.isNaN(pageParam) ? Number(pageParam) : 1
  let messages: MessageResponse[] = []
  let pageResponse: PageResponse | undefined
  try {
    const res = await client.getList({
      Pager: {
        CurrentPage: currentPage,
        PerPage: 30
      }
    })
    messages = res.messages
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <MessageListTable messages={messages} />
      {pageResponse && <Pagination {...pageResponse} />}
    </div>
  )
}
export default Page
