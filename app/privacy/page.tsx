import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import PrivacyPolicyContent from "./privacy-content"

export default function PrivacyPolicyPage() {
  return (
    <Suspense fallback={<div>Loading privacy policy...</div>}>
      <ClientOnly>
        <PrivacyPolicyContent />
      </ClientOnly>
    </Suspense>
  )
}

