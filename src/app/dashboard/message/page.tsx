import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Loading } from "@/components/parts/loading"
import { Pagination } from "@/components/parts/pagination"
import { fetcher } from "@/lib/fetch"

import { MessageListTable } from "./_table"

const Page = async ({ searchParams }: { searchParams: { page: number } }) => {
  const client = fetcher(MessageController)
  const pageParam = searchParams.page
  const currentPage =
    pageParam && Number.isNaN(pageParam) ? Number(pageParam) : 1
  let data: JsonValue
  let pageResponse: PageResponse | undefined
  try {
    unstable_noStore()
    const res = await client.getList({
      Pager: {
        CurrentPage: currentPage,
        PerPage: 30
      }
    })
    data = res.toJson()
    pageResponse = res.PageResponse
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <MessageListTable data={data} />
        {pageResponse && <Pagination {...pageResponse} />}
      </Suspense>
    </div>
  )
}
export default Page
