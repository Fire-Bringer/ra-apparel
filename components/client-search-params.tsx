"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSearchParams as useNextSearchParams, type ReadonlyURLSearchParams } from "next/navigation"

// Create a context for search params
const SearchParamsContext = createContext<ReadonlyURLSearchParams | null>(null)

// Provider component that wraps the useSearchParams hook
export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useNextSearchParams()

  return <SearchParamsContext.Provider value={searchParams}>{children}</SearchParamsContext.Provider>
}

// Custom hook to use search params from context
export function useClientSearchParams() {
  const context = useContext(SearchParamsContext)

  if (context === null) {
    throw new Error("useClientSearchParams must be used within a SearchParamsProvider")
  }

  return context
}

