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
  searchParams?: Record<string, string | string[] | undefined>
}

// Use the correct type annotation for the page component
export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug)

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

