"use client"

import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import SignUpContent from "./sign-up-content"

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading sign up page...</div>}>
      <ClientOnly>
        <SignUpContent />
      </ClientOnly>
    </Suspense>
  )
}

