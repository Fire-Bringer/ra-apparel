"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, X } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"

// Define proper interface for wishlist items
interface WishlistItem {
  id: string
  name: string
  price: number
  salePrice?: number
  image: string
}

// Sample wishlist data - switch between empty array and mock data as needed
const wishlistItems: WishlistItem[] = [
  // Uncomment the following objects to show sample data
  /*
  {
    id: "1",
    name: "Nike Air Presto",
    price: 129.99,
    image: "/products/nike-shoes.webp",
  },
  {
    id: "2",
    name: "Chelsea FC Away Jersey 2023/24",
    price: 89.99,
    salePrice: 69.99,
    image: "/products/nike-3-tshirt.webp",
  },
  */
] // Empty array by default

export default function WishlistPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/account" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back to account
        </Link>

        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg border overflow-hidden group">
                <div className="relative">
                  <Link href={`/product/${item.id}`}>
                    <div className="relative aspect-square bg-gray-100">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                  </Link>
                  <button className="absolute top-2 right-2 h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-100">
                    <X className="h-4 w-4" />
                  </button>
                </div>
                <div className="p-4">
                  <Link href={`/product/${item.id}`}>
                    <h3 className="font-medium mb-2">{item.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    {item.salePrice ? (
                      <>
                        <span className="font-bold">${item.salePrice.toFixed(2)}</span>
                        <span className="text-gray-500 line-through">${item.price.toFixed(2)}</span>
                      </>
                    ) : (
                      <span className="font-bold">${item.price.toFixed(2)}</span>
                    )}
                  </div>
                  <button className="w-full bg-black text-white py-2 rounded-md font-medium hover:bg-black/90 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg border text-center py-12">
            <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
            <button
              onClick={() => router.push("/categories")}
              className="bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
            >
              Discover Products
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

