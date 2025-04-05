"use client"
import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import FAQsContent from "./faqs-content"

// FAQ data structure would be defined here when implementing the full FAQ functionality
// interface FAQ {
//   id: string
//   question: string
//   answer: React.ReactNode
//   category: string
// }

// FAQ categories would be defined here
// const categories = [
//   { id: "general", name: "General" },
//   { id: "orders", name: "Orders & Shipping" },
//   { id: "returns", name: "Returns & Refunds" },
//   { id: "products", name: "Products & Sizing" },
//   { id: "account", name: "Account & Payment" },
// ]

// Sample FAQ data would be defined here
// const faqs: FAQ[] = [
//   {
//     id: "general-1",
//     question: "What is R.A. Apparel?",
//     answer: (
//       <p>
//         R.A. Apparel is a premium streetwear brand focused on delivering high-quality, stylish clothing that combines
//         urban aesthetics with comfort and durability.
//       </p>
//     ),
//     category: "general",
//   },
//   // More FAQs...
// ]

export default function FAQsPage() {
  return (
    <Suspense fallback={<div>Loading FAQs...</div>}>
      <ClientOnly>
        <FAQsContent />
      </ClientOnly>
    </Suspense>
  )
}

