import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import TermsContent from "./terms-content"

export default function TermsPage() {
  return (
    <Suspense fallback={<div>Loading terms page...</div>}>
      <ClientOnly>
        <TermsContent />
      </ClientOnly>
    </Suspense>
  )
}

