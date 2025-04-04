"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { products } from "@/lib/products"

// Define the cart item type
export interface CartItem {
  productId: string
  quantity: number
  color: string
  size: string
}

// Define the cart context type
interface CartContextType {
  cartItems: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  cartCount: number
  subtotal: number
  total: number
}

// Create the cart context
const CartContext = createContext<CartContextType | undefined>(undefined)

// Create a provider component
export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart")
    if (storedCart) {
      try {
        setCartItems(JSON.parse(storedCart))
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error)
      }
    }
    setIsInitialized(true)
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems))
    }
  }, [cartItems, isInitialized])

  // Add an item to the cart
  const addToCart = (item: CartItem) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the cart
      const existingItemIndex = prevItems.findIndex(
        (cartItem) =>
          cartItem.productId === item.productId && cartItem.color === item.color && cartItem.size === item.size,
      )

      if (existingItemIndex !== -1) {
        // If the item exists, update its quantity
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex].quantity += item.quantity
        return updatedItems
      } else {
        // If the item doesn't exist, add it to the cart
        return [...prevItems, item]
      }
    })
  }

  // Remove an item from the cart
  const removeFromCart = (productId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.productId !== productId))
  }

  // Update the quantity of an item in the cart
  const updateQuantity = (productId: string, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.productId === productId ? { ...item, quantity } : item)))
  }

  // Clear the cart
  const clearCart = () => {
    setCartItems([])
  }

  // Calculate the total number of items in the cart
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0)

  // Calculate the subtotal
  const subtotal = cartItems.reduce((total, item) => {
    const product = products.find((p) => p.id === item.productId)
    if (!product) return total
    const price = product.salePrice || product.price
    return total + price * item.quantity
  }, 0)

  // Calculate the total (subtotal + shipping + tax)
  const shipping = cartItems.length > 0 ? 10.0 : 0
  const tax = subtotal * 0.07
  const total = subtotal + shipping + tax

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// Create a custom hook to use the cart context
export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

