"use client"

import { useEffect } from "react"

export default function NavbarSpacer() {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        document.body.classList.add("navbar-fixed")
      } else {
        document.body.classList.remove("navbar-fixed")
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return null
}

