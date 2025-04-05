import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import SignInContent from "./sign-in-content"

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading sign in page...</div>}>
      <ClientOnly>
        <SignInContent />
      </ClientOnly>
    </Suspense>
  )
}

