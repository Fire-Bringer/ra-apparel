"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingBag, User, ChevronDown, X, Heart, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import FlyCart from "./fly-cart"

// Category options for consistent linking
const shopCategories = [
  { name: "Men", slug: "mens-fits" },
  { name: "Women", slug: "womens-fits" },
  { name: "Hoodies", slug: "hoodies" },
  { name: "Tracksuits", slug: "tracksuits" },
  { name: "T-Shirts", slug: "t-shirts" },
  { name: "Shoes", slug: "shoes" },
  { name: "Accessories", slug: "accessories" },
]

// Product categories for consistent linking
const productCategories = [
  { name: "New Arrivals", slug: "new-arrivals" },
  { name: "Bestsellers", slug: "bestsellers" },
  { name: "Sale", slug: "sale" },
]

// Number of items in cart - this would typically come from a cart context
const cartItemCount = 3

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [menuVisible, setMenuVisible] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({})
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll event to fix navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Handle animation states for menu
  useEffect(() => {
    if (isMenuOpen) {
      // First set visible to trigger the overlay
      setMenuVisible(true)
      // Small delay to ensure DOM is updated before animation starts
      const timer = setTimeout(() => {
        document.getElementById("flyout-menu")?.classList.remove("-translate-x-full")
      }, 10)
      return () => clearTimeout(timer)
    } else {
      // First animate out
      document.getElementById("flyout-menu")?.classList.add("-translate-x-full")
      // Then remove from DOM after animation completes
      const timer = setTimeout(() => {
        setMenuVisible(false)
      }, 300) // Match this with the transition duration
      return () => clearTimeout(timer)
    }
  }, [isMenuOpen])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <>
      <header
        className={`w-full border-b z-50 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 shadow-[0_4px_10px_rgba(0,0,0,0.1)] bg-white transition-all duration-300"
            : "relative transition-all duration-300"
        }`}
      >
        {/* Desktop Navbar */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8 hidden md:flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl">
            RAA LOGO
          </Link>

          <nav className="flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary">
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {shopCategories.map((category) => (
                  <DropdownMenuItem key={category.slug}>
                    <Link href={`/categories?category=${category.slug}`} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem>
                  <Link href="/categories" className="w-full">
                    View All
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-primary">
                Product <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {productCategories.map((category) => (
                  <DropdownMenuItem key={category.slug}>
                    <Link href={`/categories?category=${category.slug}`} className="w-full">
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
              <span className="sr-only">Cart</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="container mx-auto px-4 flex md:hidden items-center justify-between h-14">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>

          <Link href="/" className="font-bold">
            RAA
          </Link>

          <Button variant="ghost" size="icon" className="relative" onClick={() => setIsCartOpen(true)}>
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartItemCount}
            </span>
            <span className="sr-only">Cart</span>
          </Button>
        </div>

        {/* Fly-out Menu with Animation */}
        {menuVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden transition-opacity duration-300">
            <div
              id="flyout-menu"
              className="fixed inset-y-0 left-0 w-[85%] max-w-sm bg-white overflow-y-auto -translate-x-full transition-transform duration-300 ease-in-out shadow-lg"
            >
              <div className="p-4 border-b flex items-center justify-between">
                <div className="font-bold">RAA LOGO</div>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-5 w-5" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {/* Search */}
              <div className="p-4 border-b">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="p-4 border-b">
                <ul className="space-y-4">
                  <li>
                    <Link href="/" className="block py-1" onClick={() => setIsMenuOpen(false)}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full py-1"
                      onClick={() => toggleSection("shop")}
                    >
                      <span>Shop</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.shop ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.shop && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {shopCategories.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/categories?category=${category.slug}`}
                              className="block py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href="/categories" className="block py-1" onClick={() => setIsMenuOpen(false)}>
                            View All
                          </Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button
                      className="flex items-center justify-between w-full py-1"
                      onClick={() => toggleSection("product")}
                    >
                      <span>Product</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${expandedSections.product ? "rotate-180" : ""}`}
                      />
                    </button>
                    {expandedSections.product && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {productCategories.map((category) => (
                          <li key={category.slug}>
                            <Link
                              href={`/categories?category=${category.slug}`}
                              className="block py-1"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {category.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/contact" className="block py-1" onClick={() => setIsMenuOpen(false)}>
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </nav>

              {/* Cart & Wishlist */}
              <div className="p-4 border-b space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    <span>Cart</span>
                  </div>
                  <span className="bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Heart className="h-5 w-5 mr-2" />
                    <span>Wishlist</span>
                  </div>
                  <span className="bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    0
                  </span>
                </div>
              </div>

              {/* Sign In Button */}
              <div className="p-4 border-b">
                <Button className="w-full bg-black text-white hover:bg-black/90">Sign In</Button>
              </div>

              {/* Social Media */}
              <div className="p-4 flex items-center space-x-4">
                <Link href="https://instagram.com" className="text-gray-600 hover:text-black">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://facebook.com" className="text-gray-600 hover:text-black">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="https://youtube.com" className="text-gray-600 hover:text-black">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">Youtube</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Fly Cart */}
      <FlyCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}

