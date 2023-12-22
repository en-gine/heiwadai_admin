import * as React from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Pagination } from "@/components/parts/pagination"
import { fetcher } from "@/lib/fetch"

import { MessageListTable } from "./_table"

const Page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const client = fetcher(MessageController)
  const pageParam = searchParams.page
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
    pageResponse = res.PageResponse
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
