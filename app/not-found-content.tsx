"use client"

import Link from "next/link"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function NotFoundContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-9xl font-bold text-black mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-6">Page Not Found</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-black hover:bg-black/90">
              <Link href="/">Go to Homepage</Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-300">
              <Link href="/categories">Browse Products</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

