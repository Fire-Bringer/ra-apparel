"use client"

import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import OrderCompleteContent from "./order-complete-content"

export default function OrderCompletePage() {
  return (
    <Suspense fallback={<div>Loading order confirmation...</div>}>
      <ClientOnly>
        <OrderCompleteContent />
      </ClientOnly>
    </Suspense>
  )
}

