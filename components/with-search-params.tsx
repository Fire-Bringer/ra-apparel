"use client"

import type React from "react"

import { useSearchParams as useNextSearchParams } from "next/navigation"
import { createContext, useContext, type ReactNode } from "react"

// Create a context to hold the search params
const SearchParamsContext = createContext<ReturnType<typeof useNextSearchParams> | null>(null)

// Provider component that will be used at the layout level
export function SearchParamsProvider({ children }: { children: ReactNode }) {
  const searchParams = useNextSearchParams()
  return <SearchParamsContext.Provider value={searchParams}>{children}</SearchParamsContext.Provider>
}

// Custom hook to use search params from context
export function useSearchParams() {
  const context = useContext(SearchParamsContext)
  if (context === null) {
    throw new Error("useSearchParams must be used within a SearchParamsProvider")
  }
  return context
}

// Higher-order component to wrap page content components
export function withSearchParams<P extends object>(
  Component: React.ComponentType<P & { searchParams?: ReturnType<typeof useNextSearchParams> }>,
) {
  return function WithSearchParams(props: P) {
    const searchParams = useNextSearchParams()
    return <Component {...props} searchParams={searchParams} />
  }
}

