"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

// Use all products for the featured carousel
const featuredProducts = products

export default function FeaturedCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setScrollPosition(scrollLeft)
      setMaxScroll(scrollWidth - clientWidth)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  return (
    <section className="py-12">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Featured</h2>
          <div className="flex items-center">
            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
                onClick={scrollLeft}
                disabled={scrollPosition <= 0}
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full h-8 w-8"
                onClick={scrollRight}
                disabled={scrollPosition >= maxScroll}
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>

            {/* More Options Button */}
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">More options</span>
            </Button>
          </div>
        </div>

        {/* Product Carousel */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar"
          onScroll={handleScroll}
        >
          {featuredProducts.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[160px] md:w-[200px]">
              <div className="relative group">
                <div className="relative aspect-[4/5] bg-gray-100 mb-2 overflow-hidden">
                  <Image
                    src={product.images[0].src || "/placeholder.svg"}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">NEW</div>
                  )}
                  {product.isSale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
                  )}
                </div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-sm">
                  {product.salePrice ? (
                    <>
                      <span className="font-medium">${product.salePrice.toFixed(2)}</span>{" "}
                      <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    </>
                  ) : (
                    `$${product.price.toFixed(2)}`
                  )}
                </p>
                <Link
                  href={`/product/${product.slug}`}
                  className="absolute inset-0"
                  aria-label={`View ${product.name}`}
                >
                  <span className="sr-only">View product</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className={`h-1 rounded-full ${i === 0 ? "w-4 bg-black" : "w-1 bg-gray-300"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

