import { JsonValue } from "@bufbuild/protobuf"
import * as React from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { fetcher } from "@/lib/fetch"

import { StoreListTable } from "./_table"

const Page = async () => {
  const client = fetcher(StoreController)
  let data: JsonValue
  try {
    const res = await client.getAll({})
    data = res.toJson()
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <StoreListTable data={data} />
    </div>
  )
}
export default Page
