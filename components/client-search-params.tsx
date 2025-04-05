"use client"

import { useSearchParams as useNextSearchParams } from "next/navigation"
import { createContext, useContext, type ReactNode } from "react"

// Create a context to hold the search params
const SearchParamsContext = createContext<URLSearchParams | null>(null)

// Provider component that will wrap the application
export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useNextSearchParams()

  return <SearchParamsContext.Provider value={searchParams}>{children}</SearchParamsContext.Provider>
}

// Custom hook to use the search params
export function useClientSearchParams() {
  const context = useContext(SearchParamsContext)
  if (context === null) {
    throw new Error("useClientSearchParams must be used within a SearchParamsProvider")
  }
  return context
}

