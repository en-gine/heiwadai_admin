import * as React from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { Store } from "@/api/v1/shared/Store_pb"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(StoreController)
  const storeId = params.id
  let store: Store | undefined
  try {
    const res = await client.getByID({
      ID: storeId
    })
    store = res
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <Form data={store} />
    </div>
  )
}
export default Page
