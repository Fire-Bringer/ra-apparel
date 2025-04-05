"use client"

import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Hero from "@/components/hero"
import FeaturedCarousel from "@/components/featured-carousel"
import CategoriesSection from "@/components/categories-section"
import LimitedEdition from "@/components/limited-edition"
import CollectionsSection from "@/components/collections-section"
import LatestProducts from "@/components/latest-products"
import NewsletterSection from "@/components/newsletter-section"
import SmsPlug from "@/components/sms-plug"
import Footer from "@/components/footer"
// Import only if needed
// import { useSearchParams } from "@/components/search-params-provider"

export default function HomeContent() {
  // Only use this if you actually need search params
  // const searchParams = useSearchParams()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow">
        <Hero />
        <FeaturedCarousel />
        <CategoriesSection />
        <LimitedEdition />
        <CollectionsSection />
        <LatestProducts />
        <NewsletterSection />
        <SmsPlug />
      </main>
      <Footer />
    </div>
  )
}

