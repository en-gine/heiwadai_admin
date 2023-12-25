import { JsonValue } from "@bufbuild/protobuf"
import * as React from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import {
  MailMagazine,
  MailMagazinesResponse
} from "@/api/v1/admin/MailMagazine_pb"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Pagination } from "@/components/parts/pagination"
import { fetcher } from "@/lib/fetch"
import { AsJSON } from "@/lib/json"

import { MagazineListTable } from "./_table"

const Page = async ({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const client = fetcher(MailMagazineController)
  const pageParam = searchParams.page
  const currentPage =
    pageParam && Number.isNaN(pageParam) ? Number(pageParam) : 1

  let data: JsonValue
  let pageResponse: PageResponse | undefined
  try {
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
      <MagazineListTable data={data} />
      {pageResponse && <Pagination {...pageResponse} />}
    </div>
  )
}
export default Page
