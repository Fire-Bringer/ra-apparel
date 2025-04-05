"use client"

import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import WishlistContent from "./wishlist-content"

export default function WishlistPage() {
  return (
    <Suspense fallback={<div>Loading wishlist...</div>}>
      <ClientOnly>
        <WishlistContent />
      </ClientOnly>
    </Suspense>
  )
}

