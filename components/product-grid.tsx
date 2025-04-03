"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"

// Use all products for the categories page
const categoryProducts = products

// Category options
const categoryOptions = [
  { id: "all-fits", label: "All Fits" },
  { id: "outfits", label: "Complete Outfits" },
  { id: "shoes", label: "Shoes" },
  { id: "jerseys", label: "Jerseys" },
  { id: "sweatshirts", label: "Sweatshirts" },
  { id: "hoodies", label: "Hoodies" },
  { id: "longsleeves", label: "Long Sleeves" },
  { id: "tshirts", label: "T-Shirts" },
]

// Price options
const priceOptions = [
  { id: "all-prices", label: "All Prices" },
  { id: "price-1", label: "$0 - $50" },
  { id: "price-2", label: "$50 - $100" },
  { id: "price-3", label: "$100 - $200" },
  { id: "price-4", label: "$200+" },
]

export default function ProductGrid() {
  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    categories: false,
    price: false,
  })
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all-fits")
  const [selectedPrice, setSelectedPrice] = useState("all-prices")

  const toggleFilter = (filter: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  return (
    <div className="container px-4 mx-auto py-8">
      {/* Mobile Filter Button */}
      <div className="flex justify-between items-center mb-4 md:hidden">
        <h2 className="text-xl font-bold">Products</h2>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          onClick={() => setShowMobileFilters(!showMobileFilters)}
        >
          <Filter className="h-4 w-4" />
          Filter
        </Button>
      </div>

      {/* Mobile Filters (Collapsible) - Updated to match Figma with darker borders */}
      {showMobileFilters && (
        <div className="p-4 mb-6 md:hidden">
          {/* Categories Section */}
          <div className="mb-6">
            <h3 className="text-gray-500 font-medium mb-3">CATEGORIES</h3>
            <div className="mb-2">
              <button
                className="flex items-center justify-between w-full p-4 border border-gray-400 rounded-lg"
                onClick={() => toggleFilter("categories")}
              >
                <span className="font-medium text-lg">
                  {categoryOptions.find((cat) => cat.id === selectedCategory)?.label || "All Fits"}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {openFilters.categories && (
              <div className="border border-gray-400 rounded-lg mt-1 overflow-hidden">
                {categoryOptions.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left p-4 ${
                      selectedCategory === category.id ? "bg-gray-100 font-medium" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.id)
                      toggleFilter("categories")
                    }}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Price Section */}
          <div className="mb-6">
            <h3 className="text-gray-500 font-medium mb-3">PRICE</h3>
            <div className="mb-2">
              <button
                className="flex items-center justify-between w-full p-4 border border-gray-400 rounded-lg"
                onClick={() => toggleFilter("price")}
              >
                <span className="font-medium text-lg">
                  {priceOptions.find((price) => price.id === selectedPrice)?.label || "All Prices"}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {openFilters.price && (
              <div className="border border-gray-400 rounded-lg mt-1 overflow-hidden">
                {priceOptions.map((price) => (
                  <button
                    key={price.id}
                    className={`w-full text-left p-4 ${
                      selectedPrice === price.id ? "bg-gray-100 font-medium" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedPrice(price.id)
                      toggleFilter("price")
                    }}
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Desktop Layout with Sidebar */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar Filters */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <h2 className="text-xl font-bold mb-6">Filters</h2>

          <div className="mb-6">
            <button
              className="flex items-center justify-between w-full font-medium mb-2"
              onClick={() => toggleFilter("categories")}
            >
              <span>Categories</span>
              {openFilters.categories ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {openFilters.categories && (
              <div className="space-y-2 pl-2">
                <div className="flex items-center">
                  <input type="checkbox" id="outfits" className="mr-2" />
                  <label htmlFor="outfits">Complete Outfits</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="shoes" className="mr-2" />
                  <label htmlFor="shoes">Shoes</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="jerseys" className="mr-2" />
                  <label htmlFor="jerseys">Jerseys</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="sweatshirts" className="mr-2" />
                  <label htmlFor="sweatshirts">Sweatshirts</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="hoodies" className="mr-2" />
                  <label htmlFor="hoodies">Hoodies</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="longsleeves" className="mr-2" />
                  <label htmlFor="longsleeves">Long Sleeves</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="tshirts" className="mr-2" />
                  <label htmlFor="tshirts">T-Shirts</label>
                </div>
              </div>
            )}
          </div>

          <div className="mb-6">
            <button
              className="flex items-center justify-between w-full font-medium mb-2"
              onClick={() => toggleFilter("price")}
            >
              <span>Price</span>
              {openFilters.price ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            {openFilters.price && (
              <div className="space-y-2 pl-2">
                <div className="flex items-center">
                  <input type="checkbox" id="price-1" className="mr-2" />
                  <label htmlFor="price-1">$0 - $50</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-2" className="mr-2" />
                  <label htmlFor="price-2">$50 - $100</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-3" className="mr-2" />
                  <label htmlFor="price-3">$100 - $200</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="price-4" className="mr-2" />
                  <label htmlFor="price-4">$200+</label>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Showing {categoryProducts.length} products</span>
              <select className="border rounded-md px-2 py-1 text-sm">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest</option>
              </select>
            </div>
          </div>

          {/* Mobile Product Grid (2 columns) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {categoryProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="block">
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.images[0].src || "/placeholder.svg"}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover"
                    />
                    {product.isNew && (
                      <div className="absolute top-1 left-1 bg-black text-white text-[10px] px-1.5 py-0.5">NEW</div>
                    )}
                    {product.isSale && (
                      <div className="absolute top-1 right-1 bg-red-500 text-white text-[10px] px-1.5 py-0.5">SALE</div>
                    )}
                  </div>
                  <div className="p-2">
                    <h3 className="font-medium text-sm truncate">{product.name}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      {product.salePrice ? (
                        <>
                          <span className="font-bold text-sm">${product.salePrice.toFixed(2)}</span>
                          <span className="text-gray-500 line-through text-xs">${product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="font-bold text-sm">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Desktop Product Grid (3 columns) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {categoryProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.slug}`} className="block group">
                <div className="border border-gray-300 rounded-md overflow-hidden">
                  <div className="relative aspect-square bg-gray-100">
                    <Image
                      src={product.images[0].src || "/placeholder.svg"}
                      alt={product.images[0].alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.isNew && (
                      <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">NEW</div>
                    )}
                    {product.isSale && (
                      <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg">{product.name}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      {product.salePrice ? (
                        <>
                          <span className="font-bold">${product.salePrice.toFixed(2)}</span>
                          <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
                        </>
                      ) : (
                        <span className="font-bold">${product.price.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

