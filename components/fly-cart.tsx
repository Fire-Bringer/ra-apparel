"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartItem from "./cart-item"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/lib/products"

interface FlyCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function FlyCart({ isOpen, onClose }: FlyCartProps) {
  const { cartItems, removeFromCart, updateQuantity, subtotal, total } = useCart()
  const [isVisible, setIsVisible] = useState(false)

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      // First set visible to trigger the overlay
      setIsVisible(true)
      // Small delay to ensure DOM is updated before animation starts
      const timer = setTimeout(() => {
        document.getElementById("fly-cart")?.classList.remove("translate-x-full")
      }, 10)
      return () => clearTimeout(timer)
    } else {
      // First animate out
      document.getElementById("fly-cart")?.classList.add("translate-x-full")
      // Then remove from DOM after animation completes
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Calculate shipping and tax
  const shipping = cartItems.length > 0 ? 10.0 : 0
  const tax = subtotal * 0.07

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300">
      <div
        id="fly-cart"
        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-xl overflow-y-auto translate-x-full transition-transform duration-300 ease-in-out"
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Cart</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          <div className="divide-y divide-gray-200">
            {cartItems.length > 0 ? (
              cartItems.map((item) => {
                const product = products.find((p) => p.id === item.productId)
                if (!product) return null

                return (
                  <CartItem
                    key={item.productId}
                    id={item.productId}
                    name={product.name}
                    price={product.salePrice || product.price}
                    color={item.color}
                    size={item.size}
                    image={product.images[0].src}
                    quantity={item.quantity}
                    onRemove={removeFromCart}
                    onUpdateQuantity={updateQuantity}
                  />
                )
              })
            ) : (
              <div className="py-6 text-center">
                <p>Your cart is empty</p>
              </div>
            )}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-base font-medium">
                <p>Subtotal</p>
                <p>${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <p>Shipping</p>
                <p>${shipping.toFixed(2)}</p>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <p>Tax</p>
                <p>${tax.toFixed(2)}</p>
              </div>

              <div className="h-px bg-gray-200 my-2"></div>

              <div className="flex justify-between text-xl font-bold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>

              <Button className="w-full py-6 text-base bg-black hover:bg-black/90">Checkout</Button>

              <div className="text-center">
                <Link href="/cart" className="text-sm font-medium underline underline-offset-4" onClick={onClose}>
                  View Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

