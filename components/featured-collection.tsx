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
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/new-hoodie-image-VCf36O17CukOfDU2H0GADh7NB5Y9Wj.webp"
                alt="White hoodie with light jeans"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Classic White Hoodie</h3>
            <p className="text-gray-600 mb-2">$89.99</p>
            <Link href="/product/classic-white-hoodie" className="text-sm font-medium underline underline-offset-4">
              View Details
            </Link>
          </div>

          {/* Featured Item 2 */}
          <div className="group">
            <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nikes-FCSjHvUX0SoTHDXxBf2Afg6KvDYBuV.webp"
                alt="Black Nike running shoes"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Premium Running Shoes</h3>
            <p className="text-gray-600 mb-2">$129.99</p>
            <Link href="/product/premium-running-shoes" className="text-sm font-medium underline underline-offset-4">
              View Details
            </Link>
          </div>

          {/* Featured Item 3 */}
          <div className="group">
            <div className="relative overflow-hidden mb-4 bg-gray-200 aspect-[3/4]">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/article-2-p7dfoSUz53YI5c14Lcx5keLWzFiSV9.webp"
                alt="Ellesse tricolor sweatshirt"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="font-medium text-lg">Vintage Sport Sweatshirt</h3>
            <p className="text-gray-600 mb-2">$79.99</p>
            <Link href="/product/vintage-sport-sweatshirt" className="text-sm font-medium underline underline-offset-4">
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

