import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { UserDataController } from "@/api/v1/admin/UserData_connect"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Loading } from "@/components/parts/loading"
import { Pagination } from "@/components/parts/pagination.server"
import { fetcher } from "@/lib/fetch"

import { UserListTable } from "./_table"

export type SearchFilterProps = {
  LastName?: string
  FirstName?: string
  LastNameKana?: string
  FirstNameKana?: string
  Prefecture?: number
}
const Page = async ({
  searchParams
}: {
  searchParams: { page: number; search: string }
}) => {
  const client = fetcher(UserDataController)
  const pageParam = searchParams.page
  const searchParam = searchParams.search
    ? JSON.parse(searchParams.search)
    : (undefined as SearchFilterProps | undefined)
  const currentPage =
    pageParam && Number.isNaN(pageParam) ? Number(pageParam) : 1

  let data: JsonValue = {}
  let pageResponse: PageResponse | undefined

  try {
    unstable_noStore()
    const res = await client.getList({
      Pager: {
        CurrentPage: currentPage,
        PerPage: 30
      },
      Search: {
        ...searchParam,
        Prefecture: searchParam?.Prefecture
          ? Number(searchParam.Prefecture)
          : undefined
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
        <UserListTable data={data} searchParam={searchParam} />
        {pageResponse && <Pagination {...pageResponse} />}
      </Suspense>
    </div>
  )
}
export default Page
