import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { AdminDataController } from "@/api/v1/admin/AdminData_connect"
import { StoreController } from "@/api/v1/admin/Store_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(AdminDataController)
  const adminId = params.id
  let admin: JsonValue = {}
  let store: JsonValue = {}
  try {
    const storeClient = fetcher(StoreController)
    const storeRes = await storeClient.getAll({})

    unstable_noStore()
    const adminRes = await client.getByID({
      ID: adminId
    })
    admin = adminRes.toJson()
    store = storeRes.toJson()
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <Form adminData={admin} storeData={store} />
      </Suspense>
    </div>
  )
}
export default Page
