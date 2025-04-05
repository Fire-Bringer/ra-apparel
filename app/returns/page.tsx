import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import ReturnsContent from "./returns-content"

export default function ReturnsPage() {
  return (
    <Suspense fallback={<div>Loading returns policy...</div>}>
      <ClientOnly>
        <ReturnsContent />
      </ClientOnly>
    </Suspense>
  )
}

