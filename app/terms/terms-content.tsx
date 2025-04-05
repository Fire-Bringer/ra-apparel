"use client"

import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
// Import only if needed
// import { useSearchParams } from "@/components/search-params-provider"

export default function TermsContent() {
  // Only use this if you actually need search params
  // const searchParams = useSearchParams()

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
            <span className="font-medium">Terms of Use</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            {/* Terms content sections */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to R.A. Apparel. These Terms of Use (&quot;Terms&quot;) govern your use of our website located
                at www.ra-apparel.com (the &quot;Site&quot;) and all related services, features, content, and
                applications offered by R.A. Apparel (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms, you may not access or use the Services.
              </p>
            </section>

            {/* Additional terms sections would go here */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

