"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ShoppingBag } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"

// Define proper interfaces for our data
interface OrderItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface Order {
  id: string
  date: string
  status: string
  total: number
  items: OrderItem[]
}

// Sample order data - switch between empty array and mock data as needed
const orders: Order[] = [
  // Uncomment the following object to show sample data
  /*
  {
    id: "ORD-12345",
    date: "March 15, 2023",
    status: "Delivered",
    total: 129.99,
    items: [
      {
        id: "1",
        name: "Nike Air Presto",
        price: 129.99,
        quantity: 1,
        image: "/products/nike-shoes.webp",
      },
    ],
  }
  */
] // Empty array by default

export default function OrdersPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  // To show sample data, uncomment the next line and comment out the line after it
  // const orders: Order[] = mockOrders;
  // const orders: Order[] = [] // Empty array for now

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

        <h1 className="text-3xl font-bold mb-8">My Orders</h1>

        {orders.length > 0 ? (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-lg border">
                <div className="flex flex-col md:flex-row justify-between mb-4">
                  <div>
                    <h2 className="font-bold">Order #{order.id}</h2>
                    <p className="text-gray-500 text-sm">Placed on {order.date}</p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  {order.items.map((item) => (
                    <div key={item.id} className="flex items-center py-4">
                      <div className="h-20 w-20 bg-gray-100 mr-4 relative flex-shrink-0">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${order.total.toFixed(2)}</span>
                </div>

                <div className="mt-4">
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="text-sm font-medium underline underline-offset-4"
                  >
                    View Order Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg border text-center py-12">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">You havent placed any orders yet.</p>
            <button
              onClick={() => router.push("/categories")}
              className="bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
            >
              Start Shopping
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
