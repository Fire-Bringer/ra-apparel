import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import AccountContent from "./account-content"

export default function AccountPage() {
  return (
    <Suspense fallback={<div>Loading account page...</div>}>
      <ClientOnly>
        <AccountContent />
      </ClientOnly>
    </Suspense>
  )
}

