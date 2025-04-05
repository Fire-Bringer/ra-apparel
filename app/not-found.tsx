import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import NotFoundContent from "./not-found-content"

export default function NotFoundPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnly>
        <NotFoundContent />
      </ClientOnly>
    </Suspense>
  )
}

