"use client"

import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { useRouter } from "next/navigation"
import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CartItem } from "@/contexts/cart-context"

export default function CartContent() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
  const router = useRouter()

  // Calculate totals
  const subtotal = cartItems.reduce((total: number, item: CartItem) => {
    // Since CartItem only has productId, we need to find the product to get its price
    // For simplicity, let's assume each item has a price of 100
    const itemPrice = 100
    return total + itemPrice * item.quantity
  }, 0)

  const shipping = subtotal > 100 ? 0 : 10
  const total = subtotal + shipping

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Your Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={`${item.productId}-${item.color}-${item.size}`}
                      className="flex items-center p-4 bg-white rounded-lg border"
                    >
                      <div className="w-20 h-20 bg-gray-100 rounded-md mr-4"></div>
                      <div className="flex-grow">
                        <h3 className="font-medium">Product {item.productId}</h3>
                        <p className="text-sm text-gray-500">
                          Color: {item.color}, Size: {item.size}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                            className="p-1 rounded-md border"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="mx-2">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                            className="p-1 rounded-md border"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">$100.00</p>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-red-500 mt-2 flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-1" />
                          <span className="text-sm">Remove</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white p-6 rounded-lg border">
                  <h2 className="text-xl font-bold mb-4">Order Summary</h2>
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                  <Button
                    onClick={() => router.push("/checkout")}
                    className="w-full bg-black hover:bg-black/90 text-white py-3 rounded-md font-medium"
                  >
                    Proceed to Checkout
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
              <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven&apos;t added any items to your cart yet.</p>
              <Button
                onClick={() => router.push("/categories")}
                className="bg-black hover:bg-black/90 text-white py-3 px-6 rounded-md font-medium"
              >
                Start Shopping
              </Button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

