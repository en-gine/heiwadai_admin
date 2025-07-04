import * as React from "react"

import { BackToListButton } from "@/components/parts/BackToListButton"

import { Form } from "../_form"

const Page = async () => (
  <div className="w-full">
    <div className="flex justify-between">
      <BackToListButton href="/dashboard/store" />
    </div>
    <Form />
  </div>
)
export default Page
