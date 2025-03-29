"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sample product data
const products = [
  {
    id: "1",
    name: "Black Boss",
    price: 39.0,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: true,
    slug: "black-boss",
  },
  {
    id: "2",
    name: "Get Money",
    price: 39.0,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: true,
    slug: "get-money",
  },
  {
    id: "3",
    name: "Africa - Tribe Hoodie",
    price: 49.0,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: false,
    slug: "africa-tribe-hoodie-1",
  },
  {
    id: "4",
    name: "Africa - Tribe Hoodie",
    price: 49.0,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: false,
    slug: "africa-tribe-hoodie-2",
  },
  {
    id: "5",
    name: "Africa - Tribe Hoodie",
    price: 49.0,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: false,
    slug: "africa-tribe-hoodie-3",
  },
  {
    id: "6",
    name: "T-Shirt",
    price: 24.99,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: true,
    slug: "t-shirt",
  },
  {
    id: "7",
    name: "Sweatshirt",
    price: 44.99,
    imageSrc: "/placeholder.svg?height=300&width=240",
    isHot: false,
    slug: "sweatshirt",
  },
]

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
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-[160px] md:w-[200px]">
              <div className="relative group">
                <div className="relative aspect-[4/5] bg-gray-100 mb-2 overflow-hidden">
                  <Image
                    src={product.imageSrc || "/placeholder.svg?height=300&width=240"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.isHot && (
                    <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1">HOT</div>
                  )}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
                <h3 className="font-medium text-sm">{product.name}</h3>
                <p className="text-sm">${product.price.toFixed(2)}</p>
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
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-1 rounded-full ${i === 0 ? "w-4 bg-black" : "w-1 bg-gray-300"}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

