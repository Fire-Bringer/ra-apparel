"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, ChevronUp, Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { useRouter, useSearchParams } from "next/navigation"

// Category options
const categoryOptions = [
  { id: "all-fits", label: "All Fits", slug: "all-fits" },
  { id: "outfits", label: "Complete Outfits", slug: "outfits" },
  { id: "shoes", label: "Shoes", slug: "shoes" },
  { id: "jerseys", label: "Jerseys", slug: "jerseys" },
  { id: "sweatshirts", label: "Sweatshirts", slug: "sweatshirts" },
  { id: "hoodies", label: "Hoodies", slug: "hoodies" },
  { id: "longsleeves", label: "Long Sleeves", slug: "longsleeves" },
  { id: "t-shirts", label: "T-Shirts", slug: "t-shirts" },
  { id: "tracksuits", label: "Tracksuits", slug: "tracksuits" },
  { id: "sweatsuits", label: "Sweatsuits", slug: "sweatsuits" },
  { id: "zip-ups", label: "Zip-Ups", slug: "zip-ups" },
  { id: "bomber-jackets", label: "Bomber Jackets", slug: "bomber-jackets" },
  { id: "mens-fits", label: "Men's Fits", slug: "mens-fits" },
  { id: "womens-fits", label: "Women's Fits", slug: "womens-fits" },
  { id: "couple-fits", label: "Couple Fits", slug: "couple-fits" },
  { id: "new-arrivals", label: "New Arrivals", slug: "new-arrivals" },
  { id: "bestsellers", label: "Bestsellers", slug: "bestsellers" },
  { id: "sale", label: "Sale", slug: "sale" },
  { id: "accessories", label: "Accessories", slug: "accessories" },
]

// Price options
const priceOptions = [
  { id: "all-prices", label: "All Prices" },
  { id: "price-1", label: "$0 - $50" },
  { id: "price-2", label: "$50 - $100" },
  { id: "price-3", label: "$100 - $200" },
  { id: "price-4", label: "$200+" },
]

// Add sortOptions array after the priceOptions array
const sortOptions = [
  { id: "featured", label: "Featured" },
  { id: "price-asc", label: "Price: Low to High" },
  { id: "price-desc", label: "Price: High to Low" },
  { id: "newest", label: "Newest" },
]

interface ProductGridProps {
  initialCategory?: string
  initialSort?: string
}

export default function ProductGrid({ initialCategory, initialSort }: ProductGridProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [openFilters, setOpenFilters] = useState<Record<string, boolean>>({
    categories: false,
    price: false,
    sort: false,
  })
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || "all-fits")
  const [selectedPrice, setSelectedPrice] = useState("all-prices")
  // Add selectedSort state after the other state declarations
  const [selectedSort, setSelectedSort] = useState(initialSort || "featured")
  const [filteredProducts, setFilteredProducts] = useState(products)

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (selectedCategory && selectedCategory !== "all-fits") {
      params.set("category", selectedCategory)
    } else {
      params.delete("category")
    }

    if (selectedPrice && selectedPrice !== "all-prices") {
      params.set("price", selectedPrice)
    } else {
      params.delete("price")
    }

    if (selectedSort && selectedSort !== "featured") {
      params.set("sort", selectedSort)
    } else {
      params.delete("sort")
    }

    router.push(`/categories?${params.toString()}`, { scroll: false })
  }, [selectedCategory, selectedPrice, selectedSort, router, searchParams])

  // Filter products based on selected category and price
  useEffect(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory && selectedCategory !== "all-fits") {
      filtered = filtered.filter((product) => {
        // Map category slugs to product categories
        const categoryMap: Record<string, string[]> = {
          hoodies: ["hoodies"],
          tracksuits: ["tracksuits"],
          sweatsuits: ["sweatshirts"],
          "t-shirts": ["tshirts"],
          "zip-ups": ["longsleeves"],
          "bomber-jackets": ["outfits"],
          shoes: ["shoes"],
          jerseys: ["jerseys"],
          outfits: ["outfits"],
          longsleeves: ["longsleeves"],
          "mens-fits": ["outfits", "hoodies", "tshirts", "shoes"],
          "womens-fits": ["outfits", "hoodies", "tshirts", "shoes"],
          "couple-fits": ["outfits"],
          "new-arrivals": [], // Will be handled separately
          bestsellers: [], // Will be handled separately
          sale: [], // Will be handled separately
          accessories: ["shoes", "jerseys"],
        }

        // Special cases
        if (selectedCategory === "new-arrivals") {
          return product.isNew
        }

        if (selectedCategory === "sale") {
          return product.isSale
        }

        if (selectedCategory === "bestsellers") {
          // For demo purposes, let's say the first 3 products are bestsellers
          return ["1", "2", "3"].includes(product.id)
        }

        // Regular category mapping
        const mappedCategories = categoryMap[selectedCategory]
        if (mappedCategories && mappedCategories.length > 0) {
          return mappedCategories.includes(product.category)
        }

        return product.category === selectedCategory || product.category.includes(selectedCategory.replace("-", ""))
      })
    }

    // Filter by price
    if (selectedPrice && selectedPrice !== "all-prices") {
      const priceRanges = {
        "price-1": { min: 0, max: 50 },
        "price-2": { min: 50, max: 100 },
        "price-3": { min: 100, max: 200 },
        "price-4": { min: 200, max: Number.POSITIVE_INFINITY },
      }

      const range = priceRanges[selectedPrice as keyof typeof priceRanges]
      if (range) {
        filtered = filtered.filter((product) => {
          const price = product.salePrice || product.price
          return price >= range.min && price < range.max
        })
      }
    }

    // Apply sorting
    if (selectedSort) {
      switch (selectedSort) {
        case "price-asc":
          filtered.sort((a, b) => {
            const priceA = a.salePrice || a.price
            const priceB = b.salePrice || b.price
            return priceA - priceB
          })
          break
        case "price-desc":
          filtered.sort((a, b) => {
            const priceA = a.salePrice || a.price
            const priceB = b.salePrice || b.price
            return priceB - priceA
          })
          break
        case "newest":
          // For demo purposes, we'll sort by isNew flag and then by id
          filtered.sort((a, b) => {
            if (a.isNew && !b.isNew) return -1
            if (!a.isNew && b.isNew) return 1
            return Number.parseInt(b.id) - Number.parseInt(a.id) // Assuming newer products have higher IDs
          })
          break
        case "featured":
        default:
          // For featured, we'll keep the original order
          break
      }
    }

    setFilteredProducts(filtered)
  }, [selectedCategory, selectedPrice, selectedSort])

  const toggleFilter = (filter: string) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }))
  }

  // Find the category label for display
  const selectedCategoryLabel = categoryOptions.find((cat) => cat.slug === selectedCategory)?.label || "All Fits"
  const selectedPriceLabel = priceOptions.find((price) => price.id === selectedPrice)?.label || "All Prices"

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

      {/* Active Filters Display */}
      {(selectedCategory !== "all-fits" || selectedPrice !== "all-prices") && (
        <div className="flex flex-wrap gap-2 mb-4">
          {selectedCategory !== "all-fits" && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              Category: {selectedCategoryLabel}
              <button onClick={() => setSelectedCategory("all-fits")} className="ml-2">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
          {selectedPrice !== "all-prices" && (
            <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full text-sm">
              Price: {selectedPriceLabel}
              <button onClick={() => setSelectedPrice("all-prices")} className="ml-2">
                <X className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Mobile Filters (Collapsible) */}
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
                <span className="font-medium text-lg">{selectedCategoryLabel}</span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {openFilters.categories && (
              <div className="border border-gray-400 rounded-lg mt-1 overflow-hidden">
                {categoryOptions.map((category) => (
                  <button
                    key={category.id}
                    className={`w-full text-left p-4 ${
                      selectedCategory === category.slug ? "bg-gray-100 font-medium" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedCategory(category.slug)
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
                <span className="font-medium text-lg">{selectedPriceLabel}</span>
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

          {/* Add a sort section to the mobile filters */}
          <div className="mb-6">
            <h3 className="text-gray-500 font-medium mb-3">SORT BY</h3>
            <div className="mb-2">
              <button
                className="flex items-center justify-between w-full p-4 border border-gray-400 rounded-lg"
                onClick={() => toggleFilter("sort")}
              >
                <span className="font-medium text-lg">
                  {sortOptions.find((option) => option.id === selectedSort)?.label || "Featured"}
                </span>
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            {openFilters.sort && (
              <div className="border border-gray-400 rounded-lg mt-1 overflow-hidden">
                {sortOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`w-full text-left p-4 ${
                      selectedSort === option.id ? "bg-gray-100 font-medium" : "text-gray-600"
                    }`}
                    onClick={() => {
                      setSelectedSort(option.id)
                      toggleFilter("sort")
                    }}
                  >
                    {option.label}
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
                {categoryOptions.map((category) => (
                  <div key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={category.id}
                      className="mr-2"
                      checked={selectedCategory === category.slug}
                      onChange={() =>
                        setSelectedCategory(selectedCategory === category.slug ? "all-fits" : category.slug)
                      }
                    />
                    <label htmlFor={category.id}>{category.label}</label>
                  </div>
                ))}
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
                {priceOptions.map((price) => (
                  <div key={price.id} className="flex items-center">
                    <input
                      type="checkbox"
                      id={price.id}
                      className="mr-2"
                      checked={selectedPrice === price.id}
                      onChange={() => setSelectedPrice(selectedPrice === price.id ? "all-prices" : price.id)}
                    />
                    <label htmlFor={price.id}>{price.label}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="hidden md:flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Showing {filteredProducts.length} products</span>
              {/* Update the sort dropdown in the desktop view */}
              <select
                className="border rounded-md px-2 py-1 text-sm"
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
              >
                {sortOptions.map((option) => (
                  <option key={option.id} value={option.id}>
                    Sort by: {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* No Results Message */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-lg text-gray-500">No products match your selected filters.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSelectedCategory("all-fits")
                  setSelectedPrice("all-prices")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Mobile Product Grid (2 columns) */}
          <div className="grid grid-cols-2 gap-3 md:hidden">
            {filteredProducts.map((product) => (
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
            {filteredProducts.map((product) => (
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
