import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import OrdersContent from "./orders-content"

export default function OrdersPage() {
  return (
    <Suspense fallback={<div>Loading orders...</div>}>
      <ClientOnly>
        <OrdersContent />
      </ClientOnly>
    </Suspense>
  )
}

