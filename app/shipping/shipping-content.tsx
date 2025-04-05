"use client"

import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ShippingPolicyContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="font-medium">Shipping Policy</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shipping Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
              <p>
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your
                order confirmation email. You will receive another notification when your order has shipped.
              </p>
              <p>
                During high-volume periods such as holidays or special promotions, processing times may be slightly
                longer. We&apos;ll always communicate any expected delays via email.
              </p>
            </section>

            {/* Additional shipping sections would go here */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

