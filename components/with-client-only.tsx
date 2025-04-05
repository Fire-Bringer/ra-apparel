"use client"

import type { ReactNode } from "react"
import { SearchParamsProvider } from "./search-params-provider"

// Component to use in page files
export function ClientOnly({ children }: { children: ReactNode }) {
  return <SearchParamsProvider>{children}</SearchParamsProvider>
}

