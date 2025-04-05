import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import PageContent from "./page-content"

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnly>
        <PageContent />
      </ClientOnly>
    </Suspense>
  )
}
