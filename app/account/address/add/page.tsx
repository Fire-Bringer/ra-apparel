"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { useAuth } from "@/contexts/auth-context"
import { useToast } from "@/components/ui/toast"
import { Button } from "@/components/ui/button"

export default function AddAddressPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { isAuthenticated } = useAuth()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  // Get address type from URL query
  const addressType = (searchParams.get("type") as "billing" | "shipping") || "billing"

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
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
        description: `Your ${addressType} address has been added.`,
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
          Add {addressType.charAt(0).toUpperCase() + addressType.slice(1)} Address
        </h1>

        <div className="bg-white p-6 rounded-lg border max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
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

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="(+1) 234 567 890"
                className={`w-full p-3 border ${
                  formErrors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
              />
              {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
            </div>

            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700 mb-1">
                Street Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleInputChange}
                className={`w-full p-3 border ${
                  formErrors.street ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
              />
              {formErrors.street && <p className="text-red-500 text-sm mt-1">{formErrors.street}</p>}
            </div>

            <div>
              <label htmlFor="apartment" className="block text-sm font-medium text-gray-700 mb-1">
                Apartment, suite, etc. (optional)
              </label>
              <input
                type="text"
                id="apartment"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${
                    formErrors.city ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                />
                {formErrors.city && <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>}
              </div>

              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${
                    formErrors.state ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                />
                {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                  ZIP Code <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className={`w-full p-3 border ${
                    formErrors.zipCode ? "border-red-500" : "border-gray-300"
                  } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
                />
                {formErrors.zipCode && <p className="text-red-500 text-sm mt-1">{formErrors.zipCode}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                Country <span className="text-red-500">*</span>
              </label>
              <select
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className={`w-full p-3 border ${
                  formErrors.country ? "border-red-500" : "border-gray-300"
                } rounded-md focus:outline-none focus:ring-1 focus:ring-black`}
              >
                <option value="">Select a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="AU">Australia</option>
              </select>
              {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
            </div>

            <div className="flex items-center space-x-4">
              <Button
                type="submit"
                className="bg-black text-white py-3 px-6 rounded-md font-medium hover:bg-black/90 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Address"}
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

