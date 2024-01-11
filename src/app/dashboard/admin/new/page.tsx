import Link from "next/link"
import * as React from "react"

import { StoreController } from "@/api/v1/admin/Store_connect"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async () => {
  const storeClient = fetcher(StoreController)
  const storeRes = await storeClient.getAll({})

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="title">新規作成</h1>
        <Link href="/dashboard/message">一覧へ戻る</Link>
      </div>
      <Form storeData={storeRes.toJson()} />
    </div>
  )
}
export default Page
