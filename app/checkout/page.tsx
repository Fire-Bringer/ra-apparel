import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import CheckoutContent from "./checkout-content"

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading checkout...</div>}>
      <ClientOnly>
        <CheckoutContent />
      </ClientOnly>
    </Suspense>
  )
}

