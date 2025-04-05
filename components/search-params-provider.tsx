"use client"

import { createContext, useContext, type ReactNode } from "react"
import { useSearchParams as useNextSearchParams, type ReadonlyURLSearchParams } from "next/navigation"

// Create a context to store search params
const SearchParamsContext = createContext<ReadonlyURLSearchParams | null>(null)

// Provider component
export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useNextSearchParams()

  return <SearchParamsContext.Provider value={searchParams}>{children}</SearchParamsContext.Provider>
}

// Custom hook to safely use search params
export function useSearchParams() {
  const context = useContext(SearchParamsContext)

  if (context === null) {
    throw new Error("useSearchParams must be used within a SearchParamsProvider")
  }

  return context
}

