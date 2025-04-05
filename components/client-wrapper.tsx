"use client"

import { Suspense, type ReactNode } from "react"

interface ClientWrapperProps {
  fallback?: ReactNode
  children: ReactNode
}

export function ClientWrapper({ fallback = <div>Loading...</div>, children }: ClientWrapperProps) {
  return <Suspense fallback={fallback}>{children}</Suspense>
}

// This component doesn't use useSearchParams but provides a clean way to
// wrap client components that might use it
export function ClientOnly({ children }: { children: ReactNode }) {
  return children
}

