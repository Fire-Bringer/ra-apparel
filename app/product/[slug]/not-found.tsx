import Link from "next/link"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ProductNotFound() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow flex items-center justify-center py-16">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            We couldnt find the product youre looking for. It may have been removed or the URL might be incorrect.
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
