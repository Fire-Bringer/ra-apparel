import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products"

// Get the newest products (those marked with isNew: true)
const newestProducts = products.filter((product) => product.isNew).slice(0, 3) // Limit to 3 products for display

export default function LatestProducts() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Latest
            <br className="md:hidden" /> Products
          </h2>
          <Link href="/categories" className="flex items-center text-sm font-medium hover:underline">
            View More <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden space-y-8">
          {newestProducts.map((product) => (
            <div key={product.id} className="bg-white">
              <div className="relative bg-gray-100 aspect-video overflow-hidden">
                <Image
                  src={product.images[0].src || "/placeholder.svg"}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover"
                />
                {product.isSale && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  {product.salePrice ? (
                    <>
                      <span className="font-bold">${product.salePrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <Link
                  href={`/product/${product.slug}`}
                  className="flex items-center text-sm font-medium border-b border-black pb-1 hover:opacity-80"
                >
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {newestProducts.map((product) => (
            <div key={product.id} className="bg-white group">
              <div className="relative bg-gray-100 aspect-video overflow-hidden">
                <Image
                  src={product.images[0].src || "/placeholder.svg"}
                  alt={product.images[0].alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.isSale && (
                  <div className="absolute top-4 right-4 z-10 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <div className="flex items-center gap-2 mb-3">
                  {product.salePrice ? (
                    <>
                      <span className="font-bold">${product.salePrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    <span className="font-bold">${product.price.toFixed(2)}</span>
                  )}
                </div>
                <Link
                  href={`/product/${product.slug}`}
                  className="flex items-center text-sm font-medium border-b border-black pb-1 hover:opacity-80"
                >
                  Shop Now <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
