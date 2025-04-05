"use client"

import type React from "react"

import { type ComponentType, Suspense } from "react"
import { SearchParamsProvider } from "./search-params-provider"

// HOC to wrap client components that need search params
export function withClientOnly<P extends object>(Component: ComponentType<P>) {
  function ClientOnlyComponent(props: P) {
    return (
      <SearchParamsProvider>
        <Component {...props} />
      </SearchParamsProvider>
    )
  }

  // Set display name for debugging
  ClientOnlyComponent.displayName = `withClientOnly(${Component.displayName || Component.name || "Component"})`

  return ClientOnlyComponent
}

// Component to use in page files
export function ClientOnly({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchParamsProvider>{children}</SearchParamsProvider>
    </Suspense>
  )
}

