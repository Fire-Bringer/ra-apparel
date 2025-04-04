"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, LogOut, MapPin, ShoppingBag, Heart } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/toast"

type AccountTab = "account" | "address" | "orders" | "wishlist"

export default function AccountPage() {
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuth()
  const { toast } = useToast()
  const [activeTab, setActiveTab] = useState<AccountTab>("account")
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    displayName: "",
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    } else if (user) {
      // Pre-fill form with user data
      const nameParts = user.name.split(" ")
      setFormData({
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        displayName: user.name,
        email: user.email,
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
      })
    }
  }, [isAuthenticated, user, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: "",
      })
    }
  }

  const validateForm = () => {
    const errors: Record<string, string> = {}

    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required"
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid"
    }

    // Only validate password fields if the user is trying to change password
    if (formData.oldPassword || formData.newPassword || formData.confirmPassword) {
      if (!formData.oldPassword) {
        errors.oldPassword = "Current password is required"
      }

      if (!formData.newPassword) {
        errors.newPassword = "New password is required"
      } else if (formData.newPassword.length < 6) {
        errors.newPassword = "Password must be at least 6 characters"
      }

      if (!formData.confirmPassword) {
        errors.confirmPassword = "Please confirm your new password"
      } else if (formData.newPassword !== formData.confirmPassword) {
        errors.confirmPassword = "Passwords do not match"
      }
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Success",
        description: "Your account details have been updated.",
      })
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (!isAuthenticated || !user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">My Account</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col items-center mb-6">
              <div className="relative w-24 h-24 rounded-full overflow-hidden bg-gray-200 mb-3">
                {/* Remove the conditional check for profileImage since it doesn't exist in the User type */}
                <div className="w-full h-full flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
              </div>
              <h2 className="font-medium text-lg">{user.name}</h2>
            </div>

            <nav className="space-y-1">
              <button
                className={`w-full flex items-center py-3 px-4 rounded-md ${
                  activeTab === "account" ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("account")}
              >
                <User className="h-5 w-5 mr-3" />
                Account
              </button>
              <button
                className={`w-full flex items-center py-3 px-4 rounded-md ${
                  activeTab === "address" ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("address")}
              >
                <MapPin className="h-5 w-5 mr-3" />
                Address
              </button>
              <button
                className={`w-full flex items-center py-3 px-4 rounded-md ${
                  activeTab === "orders" ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("orders")}
              >
                <ShoppingBag className="h-5 w-5 mr-3" />
                Orders
              </button>
              <button
                className={`w-full flex items-center py-3 px-4 rounded-md ${
                  activeTab === "wishlist" ? "bg-black text-white" : "hover:bg-gray-200"
                }`}
                onClick={() => setActiveTab("wishlist")}
              >
                <Heart className="h-5 w-5 mr-3" />
                Wishlist
              </button>
              <button
                className="w-full flex items-center py-3 px-4 rounded-md text-red-600 hover:bg-red-50"
                onClick={handleLogout}
              >
                <LogOut className="h-5 w-5 mr-3" />
                Log Out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeTab === "account" && (
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-bold mb-6">Account Details</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        FIRST NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border ${
                          formErrors.firstName ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                      />
                      {formErrors.firstName && <p className="text-red-500 text-sm mt-1">{formErrors.firstName}</p>}
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        LAST NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className={`w-full p-3 border ${
                          formErrors.lastName ? "border-red-500" : "border-gray-300"
                        } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                      />
                      {formErrors.lastName && <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 mb-1">
                      DISPLAY NAME <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="displayName"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                    <p className="text-gray-500 text-xs mt-1">
                      This will be how your name will be displayed in the account section and in reviews
                    </p>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      EMAIL <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 border ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-bold mb-4">Password</h3>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          OLD PASSWORD
                        </label>
                        <input
                          type="password"
                          id="oldPassword"
                          name="oldPassword"
                          value={formData.oldPassword}
                          onChange={handleInputChange}
                          className={`w-full p-3 border ${
                            formErrors.oldPassword ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                        />
                        {formErrors.oldPassword && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.oldPassword}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          NEW PASSWORD
                        </label>
                        <input
                          type="password"
                          id="newPassword"
                          name="newPassword"
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          className={`w-full p-3 border ${
                            formErrors.newPassword ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                        />
                        {formErrors.newPassword && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.newPassword}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                          REPEAT NEW PASSWORD
                        </label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          className={`w-full p-3 border ${
                            formErrors.confirmPassword ? "border-red-500" : "border-gray-300"
                          } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                        />
                        {formErrors.confirmPassword && (
                          <p className="text-red-500 text-sm mt-1">{formErrors.confirmPassword}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-black/90 transition-colors"
                    disabled={isLoading}
                  >
                    {isLoading ? "Saving changes..." : "Save changes"}
                  </button>
                </form>
              </div>
            )}

            {activeTab === "address" && (
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-bold mb-6">Address</h2>
                <p className="text-gray-500 mb-4">Manage your shipping and billing addresses</p>

                <div className="border rounded-md p-4 mb-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Shipping Address</h3>
                    <button className="text-sm text-black underline">Edit</button>
                  </div>
                  <p>No shipping address saved yet.</p>
                </div>

                <div className="border rounded-md p-4">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Billing Address</h3>
                    <button className="text-sm text-black underline">Edit</button>
                  </div>
                  <p>No billing address saved yet.</p>
                </div>
              </div>
            )}

            {activeTab === "orders" && (
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-bold mb-6">Orders</h2>
                <div className="text-center py-8">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">You havent placed any orders yet.</p>
                  <button
                    onClick={() => router.push("/categories")}
                    className="mt-4 bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              </div>
            )}

            {activeTab === "wishlist" && (
              <div className="bg-white p-6 rounded-lg border">
                <h2 className="text-xl font-bold mb-6">Wishlist</h2>
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">Your wishlist is empty.</p>
                  <button
                    onClick={() => router.push("/categories")}
                    className="mt-4 bg-black text-white py-2 px-4 rounded-md font-medium hover:bg-black/90 transition-colors"
                  >
                    Discover Products
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
