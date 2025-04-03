import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import ProductDetail from "@/components/product-detail"
import RelatedProducts from "@/components/related-products"
import Footer from "@/components/footer"
import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"

// Define the correct type for the page props
interface ProductPageProps {
  params: {
    slug: string
  }
}

// Make the page component async to align with Next.js App Router conventions
export default async function ProductPage({ params }: ProductPageProps) {
  // Get the product data
  const product = getProductBySlug(params.slug)

  // If product not found, show the not-found page
  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow">
        <ProductDetail product={product} />
        <RelatedProducts currentProductId={product.id} />
      </main>
      <Footer />
    </div>
  )
}

