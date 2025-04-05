import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import ForgotPasswordContent from "./forgot-password-content"

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ClientOnly>
        <ForgotPasswordContent />
      </ClientOnly>
    </Suspense>
  )
}

