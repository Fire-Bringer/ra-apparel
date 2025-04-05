"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { User, ShoppingBag, Heart, MapPin, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccountContent() {
  const router = useRouter()
  const { isAuthenticated, user, signOut } = useAuth()

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }

  if (!isAuthenticated) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">My Account</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Account Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg border">
                <div className="flex items-center mb-6">
                  <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{user?.name || "User"}</p>
                    <p className="text-sm text-gray-600">{user?.email}</p>
                  </div>
                </div>

                <nav className="space-y-1">
                  <Link href="/account/orders" className="flex items-center px-4 py-3 rounded-md hover:bg-gray-100">
                    <ShoppingBag className="h-5 w-5 mr-3 text-gray-500" />
                    Orders
                  </Link>
                  <Link href="/account/wishlist" className="flex items-center px-4 py-3 rounded-md hover:bg-gray-100">
                    <Heart className="h-5 w-5 mr-3 text-gray-500" />
                    Wishlist
                  </Link>
                  <Link href="/account/address" className="flex items-center px-4 py-3 rounded-md hover:bg-gray-100">
                    <MapPin className="h-5 w-5 mr-3 text-gray-500" />
                    Addresses
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="w-full flex items-center px-4 py-3 rounded-md hover:bg-gray-100 text-left"
                  >
                    <LogOut className="h-5 w-5 mr-3 text-gray-500" />
                    Sign Out
                  </button>
                </nav>
              </div>
            </div>

            {/* Account Overview */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-bold mb-6">Account Overview</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Personal Information</h3>
                    <p className="text-gray-600 mb-4">
                      {user?.name || "User"}
                      <br />
                      {user?.email}
                    </p>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>

                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium mb-2">Default Shipping Address</h3>
                    <p className="text-gray-600 mb-4">{user?.address || "No address saved yet"}</p>
                    <Button variant="outline" size="sm" onClick={() => router.push("/account/address")}>
                      {user?.address ? "Edit" : "Add Address"}
                    </Button>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white p-6 rounded-lg border mt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold">Recent Orders</h2>
                  <Link href="/account/orders" className="text-sm text-black hover:underline">
                    View All
                  </Link>
                </div>

                {/* Recent orders would go here */}
                <div className="text-center py-8 text-gray-500">
                  <p>You haven&apos;t placed any orders yet.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

