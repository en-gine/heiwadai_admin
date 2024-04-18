import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import * as React from "react"
import { Suspense } from "react"

import { UserDataController } from "@/api/v1/admin/UserData_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { DataCard } from "./_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(UserDataController)
  const userId = params.id
  let user: JsonValue = {}
  try {
    unstable_noStore()
    const userRes = await client.getByID({
      ID: userId
    })
    user = userRes.toJson()
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Link href="/dashboard/users">一覧へ戻る</Link>
      </div>
      <Suspense fallback={<Loading />}>
        <DataCard data={user} />
      </Suspense>
    </div>
  )
}
export default Page
