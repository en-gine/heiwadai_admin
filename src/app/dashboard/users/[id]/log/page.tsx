"use client"

import * as React from "react"

import { CheckinTable } from "./checkin"
import { CouponTable } from "./coupon"
import { NewsletterTable } from "./newsletter"

const Page = () => (
  <div className="w-full">
    <CheckinTable />
    <CouponTable />
    <NewsletterTable />
  </div>
)
export default Page
