import * as React from "react"

import { UserDataController } from "@/api/v1/admin/UserData_connect"
import { fetcher } from "@/lib/fetch"

import { CheckinTable } from "./_checkin"
import { CouponTable } from "./_coupon"
import { NewsletterTable } from "./_newsletter"

const Page = async ({ params }: { params: { id: string } }) => {
  const client = fetcher(UserDataController)

  const userId = params.id
  let userName: string = ""
  try {
    const userRes = await client.getByID({
      ID: userId
    })
    userName = `${userRes.User?.LastName} ${userRes.User?.FirstName}`
  } catch (error) {
    console.error(error)
  }

  return (
    <div className="w-full">
      <p className="font-bold mb-4">{userName}様</p>
      <h2 className="font-bold mb-2">チェックイン履歴</h2>
      <CheckinTable userId={userId} />
      <h2 className="font-bold mt-4 mb-2">クーポン履歴</h2>
      <CouponTable userId={userId} />
      <h2 className="font-bold mt-4 mb-2">メルマガ受信履歴</h2>
      <NewsletterTable userId={userId} />
    </div>
  )
}
export default Page
