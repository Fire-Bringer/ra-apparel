"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, Package, Truck, CheckCircle } from "lucide-react"
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
  shippingAddress?: {
    name: string
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  paymentMethod?: string
}

// Sample order data
const sampleOrders: Order[] = [
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
    shippingAddress: {
      name: "John Doe",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: "Credit Card (•••• 4242)",
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
    shippingAddress: {
      name: "John Doe",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: "PayPal",
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
    shippingAddress: {
      name: "John Doe",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: "Credit Card (•••• 4242)",
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
    shippingAddress: {
      name: "John Doe",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States",
    },
    paymentMethod: "Credit Card (•••• 4242)",
  },
]

export default function OrderDetailPage() {
  const router = useRouter()
  const params = useParams()
  const { isAuthenticated } = useAuth()
  const [order, setOrder] = useState<Order | null>(null)
  const [loading, setLoading] = useState(true)

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  // Fetch order data
  useEffect(() => {
    if (params.id) {
      // Simulate API call
      setLoading(true)
      setTimeout(() => {
        const foundOrder = sampleOrders.find((o) => o.id === params.id)
        setOrder(foundOrder || null)
        setLoading(false)
      }, 500)
    }
  }, [params.id])

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
        <NavbarSpacer />
        <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (!order) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
        <NavbarSpacer />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Link href="/account/orders" className="flex items-center text-sm mb-6">
            <ChevronLeft className="h-4 w-4 mr-1" />
            back to orders
          </Link>
          <div className="bg-white p-6 rounded-lg border text-center py-12">
            <p className="text-gray-500 mb-4">Order not found.</p>
            <Button
              onClick={() => router.push("/account/orders")}
              className="bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
            >
              Return to Orders
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <Link href="/account/orders" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back to orders
        </Link>

        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">Order {order.orderNumber}</h1>
              <p className="text-gray-500">Placed on {order.date}</p>
            </div>
            <span
              className={`mt-2 md:mt-0 inline-block px-3 py-1 rounded-full text-sm ${
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

          {/* Order Timeline */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Order Status</h2>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-200"></div>

              {/* Timeline Steps */}
              <div className="space-y-6 relative">
                <div className="flex items-start">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center z-10 ${
                      order.status === "Processing" || order.status === "Shipped" || order.status === "Delivered"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Package className="h-3.5 w-3.5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Order Processed</h3>
                    <p className="text-sm text-gray-500">Your order has been processed</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center z-10 ${
                      order.status === "Shipped" || order.status === "Delivered"
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <Truck className="h-3.5 w-3.5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Order Shipped</h3>
                    <p className="text-sm text-gray-500">Your order has been shipped</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div
                    className={`h-7 w-7 rounded-full flex items-center justify-center z-10 ${
                      order.status === "Delivered" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    <CheckCircle className="h-3.5 w-3.5" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium">Order Delivered</h3>
                    <p className="text-sm text-gray-500">Your order has been delivered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Items */}
          <div className="mb-8">
            <h2 className="text-lg font-medium mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center border-b pb-4">
                  <div className="h-20 w-20 bg-gray-100 mr-4 relative flex-shrink-0">
                    <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${item.price.toFixed(2)}</p>
                    <p className="text-sm text-gray-500">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Shipping Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">Shipping Information</h2>
              {order.shippingAddress ? (
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-medium">{order.shippingAddress.name}</p>
                  <p>{order.shippingAddress.street}</p>
                  <p>
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </p>
                  <p>{order.shippingAddress.country}</p>
                </div>
              ) : (
                <p className="text-gray-500">No shipping information available.</p>
              )}
            </div>

            {/* Payment Information */}
            <div>
              <h2 className="text-lg font-medium mb-4">Payment Information</h2>
              <div className="bg-gray-50 p-4 rounded">
                <p>
                  <span className="font-medium">Payment Method:</span> {order.paymentMethod || "Not available"}
                </p>
                <div className="border-t border-gray-200 my-3"></div>
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${(order.total * 0.9).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>$10.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax:</span>
                  <span>${(order.total * 0.1 - 10).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 my-3"></div>
                <div className="flex justify-between font-bold">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/account/orders")}>
            Back to Orders
          </Button>
          <Button className="bg-black hover:bg-black/90">Download Invoice</Button>
        </div>
      </main>

      <Footer />
    </div>
  )
}

