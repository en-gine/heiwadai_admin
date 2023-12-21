import { useSearchParams } from "next/navigation"
import * as React from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import { MailMagazine } from "@/api/v1/admin/MailMagazine_pb"
import { PageResponse } from "@/api/v1/shared/Pager_pb"
import { Pagination } from "@/components/parts/pagination"
import { fetcher } from "@/lib/fetch"

import { MagazineListTable } from "./_table"

const Page = async () => {
  const client = fetcher(MailMagazineController)
  const searchParams = useSearchParams()
  const pageParam = searchParams.get("page")
  const currentPage =
    pageParam && Number.isNaN(pageParam) ? Number(pageParam) : 1
  let magazines: MailMagazine[] = []
  let pageResponse: PageResponse | undefined
  try {
    const res = await client.getList({
      Pager: {
        CurrentPage: currentPage,
        PerPage: 30
      }
    })
    magazines = res.MailMagazines
    pageResponse = res.PageResponse
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <MagazineListTable magazines={magazines} />
      {pageResponse && <Pagination {...pageResponse} />}
    </div>
  )
}
export default Page
