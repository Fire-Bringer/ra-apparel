import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import EditAddressContent from "./content"

export default function EditAddressPage() {
  return (
    <Suspense fallback={<div>Loading address editor...</div>}>
      <ClientOnly>
        <EditAddressContent />
      </ClientOnly>
    </Suspense>
  )
}

