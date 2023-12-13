"use client"

import * as React from "react"

import Sidebar from "@/components/parts/sidebar"

const Layout = (props: { children: React.ReactNode }) => {
  const { children } = props
  return (
    <main>
      <style jsx>{`
        main {
          display: flex;
          padding: 0 50px;
          gap: 20px;
        }
      `}</style>
      <Sidebar />
      {children}
    </main>
  )
}

export default Layout
