"use client"
import { Sidebar } from "@/components/parts/sidebar"

// export const css = {
//   subsets: ["latin"],
//   variable: "--font-sans",
// }

export default function RootLayout(props: { children: React.ReactNode }) {
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
