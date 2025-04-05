"use client"

import { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import HomeLoading from "@/app/loading"
import ProductLoading from "@/app/product/[slug]/loading"
import CartLoading from "@/app/cart/loading"
import CategoriesLoading from "@/app/categories/loading"
import CheckoutLoading from "@/app/checkout/loading"
import AccountLoading from "@/app/account/loading"
import ContactLoading from "@/app/contact/loading"
import PrivacyLoading from "@/app/privacy/loading"
import TermsLoading from "@/app/terms/loading"
import ShippingLoading from "@/app/shipping/loading"
import ReturnsLoading from "@/app/returns/loading"
import SupportLoading from "@/app/support/loading"
import FaqsLoading from "@/app/faqs/loading"
import SignInLoading from "@/app/sign-in/loading"
import SignUpLoading from "@/app/sign-up/loading"

// Add these type definitions after the imports
interface NavigationStartEvent extends Event {
  detail: { url: string }
}

export function NavigationLoader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)
  const [prevPathname, setPrevPathname] = useState("")

  // Reset loading state when the route changes
  useEffect(() => {
    setLoading(false)
    setPrevPathname(pathname)
  }, [pathname, searchParams])

  // Set up navigation event listeners
  useEffect(() => {
    const handleStart = (e: Event) => {
      const event = e as NavigationStartEvent
      // Only show loading if navigating to a new page, not for hash changes
      const url = event.detail?.url || ""
      const { pathname: newPathname } = new URL(url, window.location.href)
      if (newPathname !== prevPathname) {
        setLoading(true)
      }
    }

    const handleComplete = () => {
      setLoading(false)
    }

    // Add event listeners
    document.addEventListener("navigationstart", handleStart)
    document.addEventListener("navigationcomplete", handleComplete)
    document.addEventListener("navigateerror", handleComplete)

    // Intercept link clicks to trigger loading state
    const handleLinkClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest("a")
      if (
        link &&
        link.href &&
        link.href.startsWith(window.location.origin) &&
        !link.href.includes("#") &&
        !e.ctrlKey &&
        !e.metaKey &&
        !e.shiftKey
      ) {
        const newPathname = new URL(link.href).pathname
        if (newPathname !== pathname) {
          setLoading(true)
          // We'll let Next.js handle the actual navigation
        }
      }
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      document.removeEventListener("navigationstart", handleStart)
      document.removeEventListener("navigationcomplete", handleComplete)
      document.removeEventListener("navigateerror", handleComplete)
      document.removeEventListener("click", handleLinkClick)
    }
  }, [pathname, prevPathname])

  if (!loading) return null

  // Return the appropriate loading component based on the path being navigated to
  if (pathname.startsWith("/product/")) return <ProductLoading />
  if (pathname.startsWith("/cart")) return <CartLoading />
  if (pathname.startsWith("/categories")) return <CategoriesLoading />
  if (pathname.startsWith("/checkout")) return <CheckoutLoading />
  if (pathname.startsWith("/account")) return <AccountLoading />
  if (pathname.startsWith("/contact")) return <ContactLoading />
  if (pathname.startsWith("/privacy")) return <PrivacyLoading />
  if (pathname.startsWith("/terms")) return <TermsLoading />
  if (pathname.startsWith("/shipping")) return <ShippingLoading />
  if (pathname.startsWith("/returns")) return <ReturnsLoading />
  if (pathname.startsWith("/support")) return <SupportLoading />
  if (pathname.startsWith("/faqs")) return <FaqsLoading />
  if (pathname.startsWith("/sign-in")) return <SignInLoading />
  if (pathname.startsWith("/sign-up")) return <SignUpLoading />

  // Default to home loading for any other routes
  return <HomeLoading />
}

