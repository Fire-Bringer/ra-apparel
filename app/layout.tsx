import type React from "react"
import { Suspense } from "react"
import { SearchParamsProvider } from "@/components/with-search-params"
import "./globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <SearchParamsProvider>{children}</SearchParamsProvider>
        </Suspense>
      </body>
    </html>
  )
}

