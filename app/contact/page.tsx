import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import ContactContent from "./contact-content"

export default function ContactPage() {
  return (
    <Suspense fallback={<div>Loading contact page...</div>}>
      <ClientOnly>
        <ContactContent />
      </ClientOnly>
    </Suspense>
  )
}

