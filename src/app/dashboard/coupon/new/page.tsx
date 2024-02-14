import { JsonValue } from "@bufbuild/protobuf"
import { unstable_noStore } from "next/cache"
import Link from "next/link"
import * as React from "react"

import { AdminCouponController } from "@/api/v1/admin/Coupon_connect"
import { fetcher } from "@/lib/fetch"

import { Form } from "../_form"

const Page = async () => {
  const client = fetcher(AdminCouponController)
  let coupon: JsonValue = {}
  try {
    unstable_noStore()
    const res = await client.getDefaultEmptyCoupon({})
    coupon = res.Coupon?.toJson() || {}
  } catch (error) {
    console.error(error)
    throw error
  }
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <Link href="/dashboard/coupon">一覧へ戻る</Link>
      </div>
      <Form data={coupon} />
    </div>
  )
}
export default Page
