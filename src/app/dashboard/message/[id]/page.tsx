import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import * as React from "react"
import { Suspense } from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { BackToListButton } from "@/components/parts/BackToListButton"
import { Loading } from "@/components/parts/loading"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(MessageController)
  const messageId = params.id
  let message: JsonValue = {}
  try {
    unstable_noStore()
    const res = await client.getByID({
      ID: messageId
    })
    message = res.toJson()
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <Suspense fallback={<Loading />}>
        <div className="flex justify-between">
          <BackToListButton href="/dashboard/message" />
        </div>
        <Form data={message} />
      </Suspense>
    </div>
  )
}
export default Page
