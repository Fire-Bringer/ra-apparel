import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import ShopBanner from "@/components/shop-banner"
import ProductGrid from "@/components/product-grid"
import NewsletterSection from "@/components/newsletter-section"
import Footer from "@/components/footer"

export default function CategoriesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow">
        <ShopBanner />
        <ProductGrid />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

