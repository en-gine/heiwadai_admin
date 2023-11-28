"use client"

import * as React from "react"
import { CheckinTable } from "./checkin"
import { CouponTable } from "./coupon"
import { NewsletterTable } from "./newsletter"



export default function Home(props: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <CheckinTable />
      <CouponTable />
      <NewsletterTable />
    </div>
  )
}
