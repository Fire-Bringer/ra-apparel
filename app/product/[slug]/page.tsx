import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import ProductDetail from "@/components/product-detail"
import RelatedProducts from "@/components/related-products"
import Footer from "@/components/footer"
import { getProductBySlug } from "@/lib/products"
import { notFound } from "next/navigation"

// Define the page component with inline type annotation
export default function ProductPage({
  params,
}: {
  params: { slug: string }
}) {
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

