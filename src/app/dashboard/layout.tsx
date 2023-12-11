"use client"
import { Sidebar } from "@/components/parts/sidebar"

export default function Layout(props: { children: React.ReactNode }) {
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
      {props.children}
    </main>
  )
}
