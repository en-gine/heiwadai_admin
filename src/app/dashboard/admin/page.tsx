import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { AdminDataController } from "@/api/v1/admin/AdminData_connect"
import { StoreController } from "@/api/v1/admin/Store_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { AdminListTable } from "./_table"

const Page = async () => {
  const client = fetcher(AdminDataController)
  const storeClient = fetcher(StoreController)

  let AdminData: JsonValue = {}
  let storeData: JsonValue = {}
  try {
    unstable_noStore()
    const storeRes = await storeClient.getAll({})
    const Admins = await client.getAll({})
    AdminData = Admins.toJson()
    storeData = storeRes.toJson()
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <AdminListTable adminData={AdminData} storeData={storeData} />
      </Suspense>
    </div>
  )
}
export default Page
