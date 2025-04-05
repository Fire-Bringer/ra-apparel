import { Suspense } from "react"
import EditAddressContent from "./edit-address-content"

export default function EditAddressPage() {
  return (
    <Suspense fallback={<div>Loading address editor...</div>}>
      <EditAddressContent />
    </Suspense>
  )
}
