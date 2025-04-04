"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, ShoppingBag, ChevronRight, Eye } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"

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
  orderNumber: string
  date: string
  status: "Delivered" | "Processing" | "Shipped" | "Cancelled"
  total: number
  items: OrderItem[]
}

// Sample order data - uncomment to show sample data
const orders: Order[] = [
  {
    id: "1",
    orderNumber: "#3456_768",
    date: "October 17, 2023",
    status: "Delivered",
    total: 1234.0,
    items: [
      {
        id: "item1",
        name: "Nike Air Presto",
        price: 129.99,
        quantity: 1,
        image: "/products/nike-shoes.webp",
      },
      {
        id: "item2",
        name: "Chelsea FC Away Jersey 2023/24",
        price: 89.99,
        quantity: 2,
        image: "/products/nike-3-tshirt.webp",
      },
    ],
  },
  {
    id: "2",
    orderNumber: "#3456_980",
    date: "October 11, 2023",
    status: "Delivered",
    total: 345.0,
    items: [
      {
        id: "item3",
        name: "Ellesse Tricolor Sweatshirt",
        price: 74.99,
        quantity: 1,
        image: "/products/ellesse-longsleeve.webp",
      },
    ],
  },
  {
    id: "3",
    orderNumber: "#3456_120",
    date: "August 24, 2023",
    status: "Delivered",
    total: 2345.0,
    items: [
      {
        id: "item4",
        name: "705 California Long Sleeve Tee",
        price: 49.99,
        quantity: 1,
        image: "/products/black-long-sleeve.webp",
      },
    ],
  },
  {
    id: "4",
    orderNumber: "#3456_030",
    date: "August 12, 2023",
    status: "Delivered",
    total: 845.0,
    items: [
      {
        id: "item5",
        name: "The North Face Urban Explorer Set",
        price: 249.99,
        quantity: 1,
        image: "/products/northface-set.webp",
      },
    ],
  },
]

// To show an empty state, uncomment this line and comment out the sample data above
// const orders: Order[] = []

export default function OrdersPage() {
  const router = useRouter()
  const { isAuthenticated } = useAuth()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  const handleViewOrder = (orderId: string) => {
    router.push(`/account/orders/${orderId}`)
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

        <h1 className="text-3xl font-bold mb-8">Orders History</h1>

        {orders.length > 0 ? (
          <>
            {/* Desktop Table View (hidden on mobile) */}
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Number ID</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Dates</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Status</th>
                    <th className="text-left py-4 px-4 font-medium text-gray-500">Price</th>
                    <th className="text-right py-4 px-4 font-medium text-gray-500">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-4">{order.orderNumber}</td>
                      <td className="py-4 px-4">{order.date}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`inline-block px-2 py-1 rounded-full text-xs ${
                            order.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "Shipped"
                                  ? "bg-purple-100 text-purple-800"
                                  : "bg-red-100 text-red-800"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">${order.total.toFixed(2)}</td>
                      <td className="py-4 px-4 text-right">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-600 hover:text-black"
                          onClick={() => handleViewOrder(order.id)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Card View (visible only on mobile) */}
            <div className="md:hidden space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="bg-white p-4 rounded-lg border">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-medium">{order.orderNumber}</h3>
                    <span
                      className={`inline-block px-2 py-1 rounded-full text-xs ${
                        order.status === "Delivered"
                          ? "bg-green-100 text-green-800"
                          : order.status === "Processing"
                            ? "bg-blue-100 text-blue-800"
                            : order.status === "Shipped"
                              ? "bg-purple-100 text-purple-800"
                              : "bg-red-100 text-red-800"
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-600 mb-3">
                    <p>Date: {order.date}</p>
                    <p>Total: ${order.total.toFixed(2)}</p>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full flex items-center justify-center"
                    onClick={() => handleViewOrder(order.id)}
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    View Order
                    <ChevronRight className="h-4 w-4 ml-auto" />
                  </Button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="bg-white p-6 rounded-lg border text-center py-12">
            <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 mb-4">You havent placed any orders yet.</p>
            <Button
              onClick={() => router.push("/categories")}
              className="bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
            >
              Start Shopping
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  )
}
