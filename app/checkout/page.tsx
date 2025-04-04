"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, CreditCard, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/products"

export default function CheckoutPage() {
  const router = useRouter()
  const { cartItems, subtotal } = useCart()
  const [selectedShipping, setSelectedShipping] = useState("free")
  const [differentBillingAddress, setDifferentBillingAddress] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate processing time
    setTimeout(() => {
      router.push("/order-complete")
    }, 1000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
        <NavbarSpacer />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-6">Add some products to your cart to checkout</p>
            <Button asChild className="bg-black hover:bg-black/90">
              <Link href="/categories">Browse Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow container max-w-6xl mx-auto px-4 py-6">
        {/* Back Button */}
        <Link href="/cart" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back
        </Link>

        {/* Checkout Title */}
        <h1 className="text-3xl font-bold text-center mb-6">Check Out</h1>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center">
            <Link href="/cart" className="flex items-center">
              <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
                1
              </div>
              <div className="ml-2 text-gray-500">Shopping cart</div>
            </Link>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center text-sm">2</div>
            <div className="ml-2 font-medium">Checkout details</div>
          </div>
          <div className="border-t border-gray-300 w-12 mx-4"></div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center text-sm">
              3
            </div>
            <div className="ml-2 text-gray-500">Order complete</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid md:grid-cols-12 gap-8">
          {/* Left Column - Forms */}
          <div className="md:col-span-7 space-y-8">
            {/* Contact Information */}
            <div className="border rounded-lg p-6">
              <h2 className="font-medium mb-4">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm text-gray-600 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm text-gray-600 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input type="tel" id="phone" className="w-full border border-gray-300 rounded p-2 text-sm" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="border rounded-lg p-6">
              <h2 className="font-medium mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div>
                  <label htmlFor="streetAddress" className="block text-sm text-gray-600 mb-1">
                    Street Address
                  </label>
                  <input
                    type="text"
                    id="streetAddress"
                    className="w-full border border-gray-300 rounded p-2 text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="apartment" className="block text-sm text-gray-600 mb-1">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input type="text" id="apartment" className="w-full border border-gray-300 rounded p-2 text-sm" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm text-gray-600 mb-1">
                    Country
                  </label>
                  <select id="country" className="w-full border border-gray-300 rounded p-2 text-sm" required>
                    <option value="">Select Country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="state" className="block text-sm text-gray-600 mb-1">
                      State/City
                    </label>
                    <input
                      type="text"
                      id="state"
                      className="w-full border border-gray-300 rounded p-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="zip" className="block text-sm text-gray-600 mb-1">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      className="w-full border border-gray-300 rounded p-2 text-sm"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <input
                    type="checkbox"
                    id="differentBilling"
                    checked={differentBillingAddress}
                    onChange={() => setDifferentBillingAddress(!differentBillingAddress)}
                    className="mr-2"
                  />
                  <label htmlFor="differentBilling" className="text-sm">
                    Use a different billing address (optional)
                  </label>
                </div>
              </div>
            </div>

            {/* Billing Address (conditional) */}
            {differentBillingAddress && (
              <div className="border rounded-lg p-6">
                <h2 className="font-medium mb-4">Billing Address</h2>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="billingStreet" className="block text-sm text-gray-600 mb-1">
                      Street Address
                    </label>
                    <input
                      type="text"
                      id="billingStreet"
                      className="w-full border border-gray-300 rounded p-2 text-sm"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="billingApartment" className="block text-sm text-gray-600 mb-1">
                      Apartment, suite, etc. (optional)
                    </label>
                    <input
                      type="text"
                      id="billingApartment"
                      className="w-full border border-gray-300 rounded p-2 text-sm"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="billingState" className="block text-sm text-gray-600 mb-1">
                        State/City
                      </label>
                      <input
                        type="text"
                        id="billingState"
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="billingZip" className="block text-sm text-gray-600 mb-1">
                        ZIP Code
                      </label>
                      <input
                        type="text"
                        id="billingZip"
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Payment Method */}
            <div className="border rounded-lg p-6">
              <h2 className="font-medium mb-4">Payment method</h2>
              <div className="space-y-4">
                <label className="flex items-center p-3 border rounded-md bg-gray-50">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mr-2"
                  />
                  <span className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Pay by Credit Card
                  </span>
                </label>

                <label className="flex items-center p-3 border rounded-md">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                    className="mr-2"
                  />
                  <span>Paypal</span>
                </label>

                {paymentMethod === "card" && (
                  <div className="space-y-4 mt-4">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm text-gray-600 mb-1">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="w-full border border-gray-300 rounded p-2 text-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expirationDate" className="block text-sm text-gray-600 mb-1">
                          Expiration Date
                        </label>
                        <input
                          type="text"
                          id="expirationDate"
                          placeholder="MM/YY"
                          className="w-full border border-gray-300 rounded p-2 text-sm"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm text-gray-600 mb-1">
                          CVV Code
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          placeholder="123"
                          className="w-full border border-gray-300 rounded p-2 text-sm"
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary */}
          <div className="md:col-span-5">
            <div className="border rounded-lg p-6 sticky top-24">
              <h2 className="font-medium mb-4">Order summary</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartProducts.map((item) => (
                  <div key={item.productId} className="flex items-center">
                    <div className="h-16 w-16 bg-gray-100 mr-3 relative flex-shrink-0">
                      <Image
                        src={item.product?.images[0].src || "/placeholder.svg"}
                        alt={item.product?.name || "Product"}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-medium text-sm">{item.product?.name}</h3>
                      <p className="text-xs text-gray-500">Color: {item.color}</p>
                    </div>
                    <div className="text-right ml-2">
                      <p className="font-medium">${((item.product?.price || 0) * item.quantity).toFixed(2)}</p>
                      <div className="flex items-center mt-1 justify-end">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <button type="button" className="ml-2 text-gray-400 hover:text-gray-600">
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Shipping Options */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <h3 className="font-medium mb-2">Shipping</h3>
                <div className="space-y-2">
                  <label className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="free"
                        checked={selectedShipping === "free"}
                        onChange={() => setSelectedShipping("free")}
                        className="mr-2"
                      />
                      <span className="text-sm">Free shipping</span>
                    </div>
                    <span className="text-sm font-medium">Free</span>
                  </label>

                  <label className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={selectedShipping === "express"}
                        onChange={() => setSelectedShipping("express")}
                        className="mr-2"
                      />
                      <span className="text-sm">Express shipping</span>
                    </div>
                    <span className="text-sm font-medium">+$15.00</span>
                  </label>

                  <label className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        name="shipping"
                        value="pickup"
                        checked={selectedShipping === "pickup"}
                        onChange={() => setSelectedShipping("pickup")}
                        className="mr-2"
                      />
                      <span className="text-sm">Pick Up</span>
                    </div>
                    <span className="text-sm font-medium">%21.00</span>
                  </label>
                </div>
              </div>

              {/* Totals */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <Button
                type="submit"
                className="w-full bg-black hover:bg-black/90 py-6 text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Place Order"}
              </Button>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  )
}

