import { unstable_noStore } from "next/cache"
import Link from "next/link"
import * as React from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async () => {
  const storeClient = fetcher(StoreController)
  unstable_noStore()
  const storeRes = await storeClient.getAll({})

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Link href="/dashboard/admin">一覧へ戻る</Link>
      </div>
      <Form storeData={storeRes.toJson()} />
    </div>
  )
}
export default Page
