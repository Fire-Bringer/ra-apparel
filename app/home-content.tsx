"use client"

import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Hero from "@/components/hero"
import FeaturedCollection from "@/components/featured-collection"
import LatestArticles from "@/components/latest-articles"
import Footer from "@/components/footer"
import SmsPlug from "@/components/sms-plug"
import FeaturedCarousel from "@/components/featured-carousel"
import LatestProducts from "@/components/latest-products"
import LimitedEdition from "@/components/limited-edition"
import { withSearchParams } from "@/components/with-search-params"

function HomeContent() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow">
        <Hero />
        <FeaturedCollection />
        <FeaturedCarousel />
        <LatestProducts />
        <LimitedEdition />
        <LatestArticles />
        <SmsPlug />
      </main>
      <Footer />
    </div>
  )
}

export default withSearchParams(HomeContent)
