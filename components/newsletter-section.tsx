"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Mail } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email && email.includes("@") && email.includes(".")) {
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <section className="py-16 bg-[#121212] text-white relative overflow-hidden">
      {/* Desktop Background Image (hidden on mobile) */}
      <div className="absolute inset-0 hidden md:block opacity-40">
        <div className="relative w-full h-full">
          <Image src="/newsletter-bg.png" alt="Newsletter background" fill priority className="object-cover" />
        </div>
      </div>

      <div className="container px-4 mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-xl mb-10 text-white/90">Sign up for deals, new products and promotions</p>

        {isSubmitted ? (
          <div className="text-center py-4">
            <p className="text-xl">Thank you for subscribing!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative max-w-xl mx-auto">
            <div className="relative border-b border-white/80 flex items-center">
              <Mail className="absolute left-0 h-6 w-6 text-white/80" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full bg-transparent border-none pl-10 pr-24 py-3 text-white placeholder:text-white/80 focus:outline-none text-lg"
                required
              />
              <button type="submit" className="absolute right-0 text-white font-medium text-lg">
                Signup
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}

