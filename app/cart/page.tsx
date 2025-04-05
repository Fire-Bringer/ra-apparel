import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import CartContent from "./cart-content"

export default function CartPage() {
  return (
    <Suspense fallback={<div>Loading cart...</div>}>
      <ClientOnly>
        <CartContent />
      </ClientOnly>
    </Suspense>
  )
}

