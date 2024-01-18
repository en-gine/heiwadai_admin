import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Loading } from "@/components/parts/loading"
import { Pagination } from "@/components/parts/pagination.server"
import { fetcher } from "@/lib/fetch"

import { MagazineListTable } from "./_table"

const Page = async ({ searchParams }: { searchParams: { page: number } }) => {
  const client = fetcher(MailMagazineController)
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

    pageResponse = res.PageResponse
    data = res.toJson()
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <MagazineListTable data={data} />
        {pageResponse && <Pagination {...pageResponse} />}
      </Suspense>
    </div>
  )
}
export default Page
