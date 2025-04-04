"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft, Plus, Pencil } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { Button } from "@/components/ui/button"

// Define address interface
interface Address {
  id: string
  type: "billing" | "shipping"
  name: string
  phone: string
  street: string
  city: string
  state: string
  zip: string
  country: string
}

export default function AddressPage() {
  const router = useRouter()
  const { isAuthenticated, user } = useAuth()

  // Sample addresses - empty by default
  const [addresses, setAddresses] = useState<Address[]>([
    // Uncomment to show sample addresses
    /*
    {
      id: "addr_1",
      type: "billing",
      name: "John Doe",
      phone: "(+1) 234 567 890",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States"
    },
    {
      id: "addr_2",
      type: "shipping",
      name: "John Doe",
      phone: "(+1) 234 567 890",
      street: "345 Long Island",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States"
    }
    */
  ])

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  // Get billing and shipping addresses
  const billingAddress = addresses.find((addr) => addr.type === "billing")
  const shippingAddress = addresses.find((addr) => addr.type === "shipping")

  // Handle edit address
  const handleEditAddress = (type: "billing" | "shipping") => {
    router.push(`/account/address/edit?type=${type}`)
  }

  // Handle add address
  const handleAddAddress = (type: "billing" | "shipping") => {
    router.push(`/account/address/add?type=${type}`)
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

        <h1 className="text-3xl font-bold mb-8">Address</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Billing Address */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Billing Address</h2>
              {billingAddress ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleEditAddress("billing")}
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
              ) : null}
            </div>

            {billingAddress ? (
              <div className="space-y-1">
                <p className="font-medium">{billingAddress.name}</p>
                <p className="text-gray-600">{billingAddress.phone}</p>
                <p className="text-gray-600">{billingAddress.street}</p>
                <p className="text-gray-600">
                  {billingAddress.city}, {billingAddress.state} {billingAddress.zip}
                </p>
                <p className="text-gray-600">{billingAddress.country}</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No billing address saved yet.</p>
                <Button onClick={() => handleAddAddress("billing")} className="bg-black hover:bg-black/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Billing Address
                </Button>
              </div>
            )}
          </div>

          {/* Shipping Address */}
          <div className="bg-white p-6 rounded-lg border">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-medium">Shipping Address</h2>
              {shippingAddress ? (
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => handleEditAddress("shipping")}
                >
                  <Pencil className="h-4 w-4" />
                  Edit
                </Button>
              ) : null}
            </div>

            {shippingAddress ? (
              <div className="space-y-1">
                <p className="font-medium">{shippingAddress.name}</p>
                <p className="text-gray-600">{shippingAddress.phone}</p>
                <p className="text-gray-600">{shippingAddress.street}</p>
                <p className="text-gray-600">
                  {shippingAddress.city}, {shippingAddress.state} {shippingAddress.zip}
                </p>
                <p className="text-gray-600">{shippingAddress.country}</p>
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">No shipping address saved yet.</p>
                <Button onClick={() => handleAddAddress("shipping")} className="bg-black hover:bg-black/90">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Shipping Address
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

