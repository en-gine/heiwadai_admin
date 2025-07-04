import { unstable_noStore } from "next/cache"
import * as React from "react"

import { MailMagazineController } from "@/api/v1/admin/MailMagazine_connect"
import { MailMagazine } from "@/api/v1/admin/MailMagazine_pb"
import { BackToListButton } from "@/components/parts/BackToListButton"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(MailMagazineController)
  const magazineId = params.id
  let magazine: MailMagazine | undefined
  try {
    unstable_noStore()
    const res = await client.getByID({
      ID: magazineId
    })
    magazine = res
  } catch (error) {
    console.error(error)
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <BackToListButton href="/dashboard/magazine" />
      </div>
      <Form data={magazine?.toJson()} />
    </div>
  )
}
export default Page
