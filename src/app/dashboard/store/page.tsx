import * as React from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { Store } from "@/api/v1/shared/Store_pb"
import { fetcher } from "@/lib/fetch"

import { StoreListTable } from "./_table"

const Page = async () => {
  const client = fetcher(StoreController)
  let stores: Store[] = []
  try {
    const res = await client.getAll({})
    stores = res.Stores
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <StoreListTable stores={stores} />
    </div>
  )
}
export default Page
