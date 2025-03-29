"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import CartItem from "./cart-item"

// Sample cart data
const initialCartItems = [
  {
    id: "1",
    name: "Black Boss",
    price: 19.19,
    color: "Black",
    quantity: 2,
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "2",
    name: "Get Money",
    price: 19.19,
    color: "Red",
    quantity: 2,
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "3",
    name: "Tracksuit",
    price: 39.0,
    color: "Gold",
    quantity: 2,
    imageSrc: "/placeholder.svg?height=80&width=80",
  },
]

interface FlyCartProps {
  isOpen: boolean
  onClose: () => void
}

export default function FlyCart({ isOpen, onClose }: FlyCartProps) {
  const [cartItems, setCartItems] = useState(initialCartItems)
  const [isVisible, setIsVisible] = useState(false)

  // Handle animation states
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        document.getElementById("fly-cart")?.classList.remove("translate-x-full")
      }, 10)
      return () => clearTimeout(timer)
    } else {
      document.getElementById("fly-cart")?.classList.add("translate-x-full")
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
  // Adding shipping and tax for total
  const total = subtotal + 135.0 // Example shipping + tax

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
              cartItems.map((item) => (
                <CartItem key={item.id} {...item} onRemove={removeItem} onUpdateQuantity={updateQuantity} />
              ))
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

