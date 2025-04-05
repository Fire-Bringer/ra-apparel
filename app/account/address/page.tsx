"use client"

import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import AddressContent from "./address-content"

export default function AddressPage() {
  return (
    <Suspense fallback={<div>Loading address page...</div>}>
      <ClientOnly>
        <AddressContent />
      </ClientOnly>
    </Suspense>
  )
}

