import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import ShippingPolicyContent from "./shipping-content"

export default function ShippingPolicyPage() {
  return (
    <Suspense fallback={<div>Loading shipping policy...</div>}>
      <ClientOnly>
        <ShippingPolicyContent />
      </ClientOnly>
    </Suspense>
  )
}

