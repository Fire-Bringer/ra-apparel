import Image from "next/image"
import Link from "next/link"

export default function FeaturedCollection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Collection</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Featured Item 1 */}
          <div className="group">
            <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Hip hop style hoodie"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Oversized Graphic Hoodie</h3>
            <p className="text-gray-600 mb-2">$89.99</p>
            <Link href="/product/oversized-hoodie" className="text-sm font-medium underline underline-offset-4">
              View Details
            </Link>
          </div>

          {/* Featured Item 2 */}
          <div className="group">
            <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Baggy cargo pants"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Baggy Cargo Pants</h3>
            <p className="text-gray-600 mb-2">$74.99</p>
            <Link href="/product/baggy-cargo-pants" className="text-sm font-medium underline underline-offset-4">
              View Details
            </Link>
          </div>

          {/* Featured Item 3 */}
          <div className="group">
            <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
              <Image
                src="/placeholder.svg?height=600&width=450"
                alt="Vintage basketball jersey"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Vintage Basketball Jersey</h3>
            <p className="text-gray-600 mb-2">$59.99</p>
            <Link href="/product/vintage-jersey" className="text-sm font-medium underline underline-offset-4">
              View Details
            </Link>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-block px-8 py-3 bg-black text-white font-medium hover:bg-black/90 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

