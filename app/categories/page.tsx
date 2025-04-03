import { Suspense } from "react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import ShopBanner from "@/components/shop-banner"
import ProductGrid from "@/components/product-grid"
import Footer from "@/components/footer"

export default function CategoriesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Extract category from search params
  const categoryParam = searchParams.category ? String(searchParams.category) : undefined

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow">
        <ShopBanner />
        <Suspense fallback={<div className="py-20 text-center">Loading products...</div>}>
          <ProductGrid initialCategory={categoryParam} />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

