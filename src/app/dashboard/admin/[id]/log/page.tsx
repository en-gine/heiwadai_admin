import * as React from "react"

import { UserDataController } from "@/api/v1/admin/UserData_connect"
import { fetcher } from "@/lib/fetch"

import { LoginLogTable } from "./_loginLog"

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
      <p className="font-bold mb-4">{userName}</p>
      <h2 className="font-bold mb-2">ログイン履歴</h2>
      <LoginLogTable userId={userId} />
    </div>
  )
}
export default Page
