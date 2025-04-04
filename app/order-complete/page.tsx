"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { useEffect, useState } from "react"
import { products } from "@/lib/products"

export default function OrderCompletePage() {
  const { cartItems, clearCart } = useCart()
  const [orderItems, setOrderItems] = useState(cartItems)
  const [orderCode] = useState(
    `#${Math.floor(1000 + Math.random() * 9000)}_${Math.floor(10000 + Math.random() * 90000)}`,
  )
  const [orderDate] = useState(new Date())
  const [orderTotal, setOrderTotal] = useState(0)

  // Calculate order total and save order items before clearing cart
  useEffect(() => {
    if (cartItems.length > 0) {
      const total = cartItems.reduce((sum, item) => {
        const product = products.find((p) => p.id === item.productId)
        if (!product) return sum
        return sum + (product.salePrice || product.price) * item.quantity
      }, 0)

      setOrderTotal(total)
      setOrderItems([...cartItems])

      // Clear cart after saving the order details
      clearCart()
    }
  }, [cartItems, clearCart])

  // Get product details for ordered items
  const orderProducts = orderItems.map((item) => {
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

      <main className="flex-grow container max-w-3xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link href="/" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back to home
        </Link>

        {/* Complete Heading */}
        <h1 className="text-4xl font-bold text-center mb-8">Complete!</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div className="ml-2 text-gray-500">Shopping cart</div>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm">
              <CheckCircle className="h-5 w-5" />
            </div>
            <div className="ml-2 text-gray-500">Checkout details</div>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm">3</div>
            <div className="ml-2 font-medium">Order complete</div>
          </div>
        </div>

        {/* Order Confirmation Card */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
          <div className="text-center mb-10">
            <h2 className="text-xl mb-2">Thank you!</h2>
            <h3 className="text-3xl font-bold">Your order has been received</h3>
          </div>

          {/* Order Items */}
          <div className="flex justify-center gap-6 mb-8">
            {orderProducts.map((item) => (
              <div key={item.productId} className="relative">
                <div className="h-24 w-24 bg-gray-100 relative">
                  <Image
                    src={item.product?.images[0].src || "/placeholder.svg"}
                    alt={item.product?.name || "Product"}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-2 -right-2 h-5 w-5 bg-black text-white text-xs rounded-full flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
            ))}
          </div>

          {/* Order Details */}
          <div className="space-y-3 mb-8">
            <div className="flex justify-between">
              <span className="text-gray-600">Order code:</span>
              <span className="font-medium">{orderCode}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">
                {orderDate.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium">${orderTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Payment method:</span>
              <span className="font-medium">Credit Card</span>
            </div>
          </div>

          {/* Purchase History Button */}
          <div className="text-center">
            <Button className="bg-black hover:bg-black/90 px-8">Purchase history</Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

