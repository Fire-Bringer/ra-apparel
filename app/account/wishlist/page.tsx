"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Heart, X, ShoppingBag, Plus } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/toast"
import { useCart } from "@/contexts/cart-context"

// Define proper interface for wishlist items
interface WishlistItem {
  id: string
  name: string
  price: number
  color: string
  image: string
}

// Sample wishlist data - uncomment to show sample data
const sampleWishlistItems: WishlistItem[] = [
  {
    id: "1",
    name: "Nike Air Presto",
    price: 129.99,
    color: "Black",
    image: "/products/nike-shoes.webp",
  },
  {
    id: "2",
    name: "Chelsea FC Away Jersey 2023/24",
    price: 89.99,
    color: "Beige",
    image: "/products/nike-3-tshirt.webp",
  },
  {
    id: "3",
    name: "Ellesse Tricolor Sweatshirt",
    price: 74.99,
    color: "Navy/White/Red",
    image: "/products/ellesse-longsleeve.webp",
  },
  {
    id: "4",
    name: "705 California Long Sleeve Tee",
    price: 49.99,
    color: "Black",
    image: "/products/black-long-sleeve.webp",
  },
]

// To show an empty state, uncomment this line and comment out the sample data above
// const sampleWishlistItems: WishlistItem[] = []

export default function WishlistPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>(sampleWishlistItems)
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  const handleRemoveItem = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "Item has been removed from your wishlist",
    })
  }

  const handleAddToCart = (item: WishlistItem) => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      addToCart({
        productId: item.id,
        quantity: 1,
        color: item.color,
        size: "M", // Default size
      })

      toast({
        title: "Added to cart",
        description: `${item.name} has been added to your cart`,
      })

      setIsLoading(false)
    }, 500)
  }

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

        <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>

        {wishlistItems.length > 0 ? (
          <>
            {/* Desktop Table View (hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium text-gray-500 w-16"></th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Product</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Price</th>
                    <th className="text-right py-4 px-4 font-medium text-gray-500">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {wishlistItems.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-gray-400 hover:text-gray-600"
                          aria-label="Remove item"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <div className="h-16 w-16 bg-gray-100 mr-4 relative flex-shrink-0">
                            <Image
                              src={item.image || "/placeholder.svg"}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-sm text-gray-500">Color: {item.color}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 font-medium">${item.price.toFixed(2)}</td>
                      <td className="py-4 px-4 text-right">
                        <Button
                          className="bg-black hover:bg-black/90"
                          onClick={() => handleAddToCart(item)}
                          disabled={isLoading}
                        >
                          Add to cart
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View (visible only on mobile) */}
            <div className="md:hidden space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-lg border relative">
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 z-10"
                    aria-label="Remove item"
                  >
                    <X className="h-5 w-5" />
                  </button>

                  <div className="flex items-center mb-4">
                    <div className="h-20 w-20 bg-gray-100 mr-4 relative flex-shrink-0">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <p className="font-medium mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </div>

                  <Button
                    className="w-full bg-black hover:bg-black/90"
                    onClick={() => handleAddToCart(item)}
                    disabled={isLoading}
                  >
                    Add to cart
                  </Button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white p-6 rounded-lg border text-center py-12">
            <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">Your wishlist is empty.</p>
            <Button
              onClick={() => router.push("/categories")}
              className="bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
            >
              <ShoppingBag className="h-4 w-4 mr-2" />
              Discover Products
            </Button>
          </div>
        )}

        {wishlistItems.length > 0 && (
          <div className="mt-8 flex justify-center">
            <Button variant="outline" className="flex items-center" onClick={() => router.push("/categories")}>
              <Plus className="h-4 w-4 mr-2" />
              Add More Items
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

