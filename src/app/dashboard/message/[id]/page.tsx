import * as React from "react"

import { MessageController } from "@/api/v1/admin/Messages_connect"
import { MessageResponse } from "@/api/v1/admin/Messages_pb"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { slug: string } }) => {
  const client = fetcher(MessageController)
  const messageId = params.slug
  let message: MessageResponse | undefined
  try {
    const res = await client.getByID({
      ID: messageId
    })
    message = res
  } catch (error) {
    alert("エラーが発生しました。")
    console.error(error)
  }
  return (
    <div className="w-full">
      <Form data={message} />
    </div>
  )
}
export default Page
