"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "@/components/search-params-provider"

export default function EditAddressContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const addressType = (searchParams.get("type") as "billing" | "shipping") || "billing"
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Mock data for the existing address
  const [formData, setFormData] = useState({
    fullName: "John Doe",
    phone: "(+1) 234 567 890",
    street: "345 Long Island",
    apartment: "",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    country: "US",
  })

  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  // Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/sign-in")
    }
  }, [isAuthenticated, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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

    if (!formData.fullName.trim()) {
      errors.fullName = "Full name is required"
    }

    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required"
    }

    if (!formData.street.trim()) {
      errors.street = "Street address is required"
    }

    if (!formData.city.trim()) {
      errors.city = "City is required"
    }

    if (!formData.state.trim()) {
      errors.state = "State is required"
    }

    if (!formData.zipCode.trim()) {
      errors.zipCode = "ZIP code is required"
    }

    if (!formData.country.trim()) {
      errors.country = "Country is required"
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
        description: `Your ${addressType} address has been updated.`,
      })
      router.push("/account/address")
    }, 1000)
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
        <Link href="/account/address" className="flex items-center text-sm mb-6">
          <ChevronLeft className="h-4 w-4 mr-1" />
          back to addresses
        </Link>

        <h1 className="text-3xl font-bold mb-8">
          Edit {addressType.charAt(0).toUpperCase() + addressType.slice(1)} Address
        </h1>

        <div className="bg-white p-6 rounded-lg border max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Form fields similar to add address */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full p-3 border ${
                  formErrors.fullName ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
              />
              {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
            </div>

            {/* More form fields would go here */}

            <div className="flex items-center space-x-4">
              <Button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-black/90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Update Address"}
              </Button>
              <Button
                type="button"
                onClick={() => router.push("/account/address")}
                variant="outline"
                className="border border-gray-300 py-3 px-6 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  )
}

