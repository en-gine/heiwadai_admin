import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { StoreListTable } from "./_table"

const Page = async () => {
  const client = fetcher(StoreController)
  let data: JsonValue = {}
  try {
    unstable_noStore()
    const res = await client.getAll({})
    data = res.toJson()
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <StoreListTable data={data} />
      </Suspense>
    </div>
  )
}
export default Page
