import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { UserCheckinController } from "@/api/v1/admin/UserCheckin_connect"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { UserListTable } from "./_table"

export type SearchFilterProps = {
  LastName?: string
  FirstName?: string
  LastNameKana?: string
  FirstNameKana?: string
  Prefecture?: string
}
const Page = async () => {
  const client = fetcher(UserCheckinController)

  let data: JsonValue = {}

  try {
    unstable_noStore()
    const res = await client.getAllRecent({
      limit: 30
    })

    data = res.toJson()
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <UserListTable data={data} />
      </Suspense>
    </div>
  )
}
export default Page
