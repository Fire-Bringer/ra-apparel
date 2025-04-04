"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Minus, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/products"

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart()
  const [selectedShipping, setSelectedShipping] = useState("free")

  // Calculate shipping cost based on selection
  const getShippingCost = () => {
    switch (selectedShipping) {
      case "express":
        return 15.0
      case "pickup":
        return subtotal * 0.21 // 21% of subtotal for pickup
      default:
        return 0.0 // Free shipping
    }
  }

  // Calculate final total with shipping
  const finalTotal = subtotal + getShippingCost()

  // Get product details for cart items
  const cartProducts = cartItems.map((item) => {
    const product = products.find((p) => p.id === item.productId)
    return {
      ...item,
      product,
    }
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow container max-w-3xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back
        </Link>

        {/* Cart Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Cart</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm">1</div>
            <div className="ml-2 font-medium">Shopping cart</div>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              2
            </div>
            <div className="ml-2 text-gray-500">Checkout details</div>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4 hidden md:block"></div>
          <div className="hidden md:flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              3
            </div>
            <div className="ml-2 text-gray-500">Order complete</div>
          </div>
        </div>

        <div className="border-t border-gray-200 mb-4"></div>

        {/* Product List */}
        <div className="mb-8">
          <h2 className="font-medium mb-4">Product</h2>

          {cartItems.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <Button asChild className="bg-black hover:bg-black/90">
                <Link href="/categories">Continue Shopping</Link>
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartProducts.map((item) => (
                <div key={item.productId} className="flex items-center py-4 border-b border-gray-200">
                  <div className="h-20 w-20 bg-gray-100 mr-4 relative flex-shrink-0">
                    <Image
                      src={item.product?.images[0].src || "/placeholder.svg"}
                      alt={item.product?.name || "Product"}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.product?.name}</h3>
                    <p className="text-sm text-gray-500">Color: {item.color}</p>
                  </div>
                  <div className="text-right ml-4">
                    <p className="font-medium">${(item.product?.price || 0).toFixed(2)}</p>
                    <div className="flex items-center mt-2 justify-end">
                      <button
                        onClick={() => updateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                        className="h-8 w-8 flex items-center justify-center border border-gray-300"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="mx-2 w-6 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="h-8 w-8 flex items-center justify-center border border-gray-300"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.productId)}
                    className="ml-4 text-gray-400 hover:text-gray-600"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border rounded-lg p-6">
            <h2 className="font-medium mb-4">Cart summary</h2>

            {/* Shipping Options */}
            <div className="space-y-2 mb-6">
              <label className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="free"
                    checked={selectedShipping === "free"}
                    onChange={() => setSelectedShipping("free")}
                    className="mr-2"
                  />
                  <span>Free shipping</span>
                </div>
                <span className="font-medium">$0.00</span>
              </label>

              <label className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="express"
                    checked={selectedShipping === "express"}
                    onChange={() => setSelectedShipping("express")}
                    className="mr-2"
                  />
                  <span>Express shipping</span>
                </div>
                <span className="font-medium">+$15.00</span>
              </label>

              <label className="flex items-center justify-between p-3 border rounded-md">
                <div className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="pickup"
                    checked={selectedShipping === "pickup"}
                    onChange={() => setSelectedShipping("pickup")}
                    className="mr-2"
                  />
                  <span>Pick Up</span>
                </div>
                <span className="font-medium">%21.00</span>
              </label>
            </div>

            {/* Totals */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <Button asChild className="w-full bg-black hover:bg-black/90 py-6 text-base">
              <Link href="/checkout">Checkout</Link>
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}

