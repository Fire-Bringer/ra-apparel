"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronUp } from "lucide-react"
import { Instagram, Facebook, Youtube } from "lucide-react"

export default function Footer() {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    page: false,
    info: false,
  })

  const toggleSection = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      {/* Mobile Footer */}
      <div className="md:hidden px-5 py-8">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">RAA</h2>
          <p className="text-sm mb-4">More than just a hustle. It's a lifestyle.</p>

          <div className="flex space-x-4 mb-6">
            <Link href="https://instagram.com" className="hover:opacity-80">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="https://facebook.com" className="hover:opacity-80">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://youtube.com" className="hover:opacity-80">
              <Youtube size={20} />
              <span className="sr-only">Youtube</span>
            </Link>
          </div>

          <div className="h-px bg-gray-800 my-4"></div>
        </div>

        {/* Page Section */}
        <div className="border-b border-gray-800 py-3">
          <button className="flex items-center justify-between w-full" onClick={() => toggleSection("page")}>
            <span className="font-medium">Page</span>
            <ChevronUp className={`h-4 w-4 transition-transform ${openSections.page ? "rotate-0" : "rotate-180"}`} />
          </button>

          {openSections.page && (
            <div className="mt-3 flex flex-col space-y-3 pl-1">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link href="/shop" className="text-sm hover:underline">
                Shop
              </Link>
              <Link href="/product" className="text-sm hover:underline">
                Product
              </Link>
              <Link href="/articles" className="text-sm hover:underline">
                Articles
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact Us
              </Link>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="border-b border-gray-800 py-3">
          <button className="flex items-center justify-between w-full" onClick={() => toggleSection("info")}>
            <span className="font-medium">Info</span>
            <ChevronUp className={`h-4 w-4 transition-transform ${openSections.info ? "rotate-0" : "rotate-180"}`} />
          </button>

          {openSections.info && (
            <div className="mt-3 flex flex-col space-y-3 pl-1">
              <Link href="/shipping" className="text-sm hover:underline">
                Shipping Policy
              </Link>
              <Link href="/returns" className="text-sm hover:underline">
                Return & Refund
              </Link>
              <Link href="/support" className="text-sm hover:underline">
                Support
              </Link>
              <Link href="/faqs" className="text-sm hover:underline">
                FAQs
              </Link>
            </div>
          )}
        </div>

        {/* Office Section */}
        <div className="py-4">
          <h3 className="font-medium mb-3">Office</h3>
          <div className="space-y-2 text-sm">
            <p>J Street,</p>
            <p>District 1, HCMC</p>
            <p>Sacramento</p>
            <p className="mt-4">84-756-3237</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap gap-2 my-6">
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="Visa" className="h-5" />
          </div>
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="American Express" className="h-5" />
          </div>
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="Mastercard" className="h-5" />
          </div>
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="Stripe" className="h-5" />
          </div>
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="PayPal" className="h-5" />
          </div>
          <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
            <img src="/placeholder.svg?height=20&width=30" alt="Apple Pay" className="h-5" />
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-4 text-xs my-4">
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Use
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs mt-4">
          <p>Copyright © {currentYear} RAA All rights reserved</p>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="col-span-1">
              <h2 className="text-xl font-bold mb-4">RAA</h2>
              <p className="text-sm mb-6">
                More than just a hustle.
                <br />
                It's a lifestyle.
              </p>

              <div className="flex space-x-4">
                <Link href="https://instagram.com" className="hover:opacity-80">
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="hover:opacity-80">
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://youtube.com" className="hover:opacity-80">
                  <Youtube size={20} />
                  <span className="sr-only">Youtube</span>
                </Link>
              </div>
            </div>

            {/* Page Section */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Page</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
                <Link href="/shop" className="text-sm hover:underline">
                  Shop
                </Link>
                <Link href="/product" className="text-sm hover:underline">
                  Product
                </Link>
                <Link href="/articles" className="text-sm hover:underline">
                  Articles
                </Link>
                <Link href="/contact" className="text-sm hover:underline">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Info Section */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Info</h3>
              <div className="flex flex-col space-y-3">
                <Link href="/shipping" className="text-sm hover:underline">
                  Shipping Policy
                </Link>
                <Link href="/returns" className="text-sm hover:underline">
                  Return & Refund
                </Link>
                <Link href="/support" className="text-sm hover:underline">
                  Support
                </Link>
                <Link href="/faqs" className="text-sm hover:underline">
                  FAQs
                </Link>
              </div>
            </div>

            {/* Office Section */}
            <div className="col-span-1">
              <h3 className="font-medium mb-4">Office</h3>
              <div className="space-y-1 text-sm">
                <p>431H Hai Trieu street,</p>
                <p>District 1, HCMC</p>
                <p>Vietnam</p>
                <p className="mt-4">84-756-3237</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center pt-6 border-t border-gray-800">
            {/* Copyright */}
            <div className="text-sm">
              <p>Copyright © {currentYear} RAA All rights reserved</p>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms & Conditions
              </Link>
            </div>

            {/* Payment Methods */}
            <div className="flex flex-wrap gap-2">
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="Visa" className="h-5" />
              </div>
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="American Express" className="h-5" />
              </div>
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="Mastercard" className="h-5" />
              </div>
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="Stripe" className="h-5" />
              </div>
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="PayPal" className="h-5" />
              </div>
              <div className="bg-white rounded p-1 h-8 w-12 flex items-center justify-center">
                <img src="/placeholder.svg?height=20&width=30" alt="Apple Pay" className="h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

