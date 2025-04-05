import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import CategoriesContent from "./categories-content"

export default function CategoriesPage() {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <ClientOnly>
        <CategoriesContent />
      </ClientOnly>
    </Suspense>
  )
}

