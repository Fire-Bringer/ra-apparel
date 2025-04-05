import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import AddAddressContent from "./content"

export default function AddAddressPage() {
  return (
    <Suspense fallback={<div>Loading address form...</div>}>
      <ClientOnly>
        <AddAddressContent />
      </ClientOnly>
    </Suspense>
  )
}

