import Link from "next/link"
import * as React from "react"

import { Form } from "../_form"

const Page = async () => (
  <div className="w-full">
    <div className="flex justify-between">
      <Link href="/dashboard/store">一覧へ戻る</Link>
    </div>
    <Form />
  </div>
)
export default Page
