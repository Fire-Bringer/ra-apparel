"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function NavigationEvents() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Create custom events for navigation
    const dispatchNavigationEvent = (eventName: string, url: string) => {
      const event = new CustomEvent(eventName, {
        detail: { url },
      })
      document.dispatchEvent(event)
    }

    // Function to handle route change start
    const handleRouteChangeStart = (url: string) => {
      dispatchNavigationEvent("navigationstart", url)
    }

    // Function to handle route change complete
    const handleRouteChangeComplete = (url: string) => {
      dispatchNavigationEvent("navigationcomplete", url)
    }

    // Create a MutationObserver to detect when Next.js updates the DOM during navigation
    const observer = new MutationObserver((mutations) => {
      // Check if the mutations include changes that would indicate a navigation
      const navigationMutation = mutations.some(
        (mutation) => mutation.type === "childList" && mutation.target.nodeName === "BODY",
      )

      if (navigationMutation) {
        handleRouteChangeComplete(window.location.href)
      }
    })

    // Start observing the document body for DOM changes
    observer.observe(document.body, {
      childList: true,
      subtree: true,
    })

    // Simulate a route change start when a link is clicked
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
        handleRouteChangeStart(link.href)
      }
    }

    document.addEventListener("click", handleLinkClick)

    return () => {
      observer.disconnect()
      document.removeEventListener("click", handleLinkClick)
    }
  }, [pathname, searchParams])

  return null
}

