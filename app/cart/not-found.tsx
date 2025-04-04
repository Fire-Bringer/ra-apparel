import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"

export default function CartNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <div className="inline-flex items-center justify-center h-24 w-24 rounded-full bg-gray-100 mb-6">
            <ShoppingBag className="h-12 w-12 text-gray-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Cart Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldnt find your cart. It may have expired or been cleared.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-black hover:bg-black/90">
              <Link href="/categories">Browse Products</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Return Home</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
