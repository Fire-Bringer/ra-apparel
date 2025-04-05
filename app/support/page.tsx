import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import SupportContent from "./support-content"

export default function SupportPage() {
  return (
    <Suspense fallback={<div>Loading support page...</div>}>
      <ClientOnly>
        <SupportContent />
      </ClientOnly>
    </Suspense>
  )
}

