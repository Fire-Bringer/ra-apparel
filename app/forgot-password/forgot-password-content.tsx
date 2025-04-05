"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ForgotPasswordContent() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Reset Password</h1>

            {!isSubmitted ? (
              <>
                <p className="text-gray-600 mb-6 text-center">
                  Enter your email address and we&apos;ll send you a link to reset your password.
                </p>

                {error && <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-black hover:bg-black/90 text-white py-3 rounded-md font-medium"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send Reset Link"}
                  </Button>
                </form>
              </>
            ) : (
              <div className="bg-green-50 p-6 rounded-md text-center">
                <h2 className="text-xl font-bold mb-2">Check Your Email</h2>
                <p className="text-gray-600 mb-4">
                  We&apos;ve sent a password reset link to <span className="font-medium">{email}</span>. Please check your
                  email and follow the instructions to reset your password.
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  If you don&apos;t see the email, check your spam folder or{" "}
                  <button onClick={() => setIsSubmitted(false)} className="text-black underline">
                    try again
                  </button>
                  .
                </p>
              </div>
            )}

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Remember your password?{" "}
                <Link href="/sign-in" className="text-black hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

