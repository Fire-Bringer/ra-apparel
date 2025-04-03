"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Product } from "@/lib/products"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[0])
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = () => {
    console.log("Added to cart:", {
      product,
      color: selectedColor,
      size: selectedSize,
      quantity,
    })
    // Here you would typically dispatch to a cart context or make an API call
  }

  // Get the primary product image or the first image if no primary is specified
  const primaryImage = product.images.find((img) => img.isPrimary) || product.images[0]

  return (
    <div className="container px-4 mx-auto py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Images - Mobile */}
        <div className="md:hidden w-full">
          <div className="relative aspect-square mb-4 bg-gray-100 overflow-hidden">
            <Image src={primaryImage.src || "/placeholder.svg"} alt={primaryImage.alt} fill className="object-cover" />
            {product.isNew && <div className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1">NEW</div>}
            {product.isSale && (
              <div className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
            )}
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className={`relative w-16 h-16 flex-shrink-0 border-2 ${
                  index === 0 ? "border-black" : "border-transparent"
                } bg-gray-200 overflow-hidden`}
              >
                <Image
                  src={primaryImage.src || "/placeholder.svg"}
                  alt={`${primaryImage.alt} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Images - Desktop Gallery */}
        <div className="hidden md:block md:w-1/2">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square bg-gray-100 col-span-2 row-span-2 overflow-hidden">
              <Image
                src={primaryImage.src || "/placeholder.svg"}
                alt={primaryImage.alt}
                fill
                className="object-cover"
              />
              {product.isNew && <div className="absolute top-4 left-4 bg-black text-white text-xs px-2 py-1">NEW</div>}
              {product.isSale && (
                <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-2 py-1">SALE</div>
              )}
            </div>
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={primaryImage.src || "/placeholder.svg"}
                alt={`${primaryImage.alt} view 2`}
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square bg-gray-100 overflow-hidden">
              <Image
                src={primaryImage.src || "/placeholder.svg"}
                alt={`${primaryImage.alt} view 3`}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-2 mt-2">
            {product.salePrice ? (
              <>
                <span className="text-xl md:text-2xl font-bold">${product.salePrice.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-xl md:text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          <div className="mt-6">
            <h2 className="font-medium mb-2">Color</h2>
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  className={`w-8 h-8 rounded-full border ${
                    selectedColor.name === color.name ? "ring-2 ring-black ring-offset-2" : ""
                  }`}
                  style={{ backgroundColor: color.value }}
                  onClick={() => setSelectedColor(color)}
                  aria-label={`Select ${color.name} color`}
                />
              ))}
            </div>
            <p className="text-sm mt-1">Selected: {selectedColor.name}</p>
          </div>

          <div className="mt-6">
            <h2 className="font-medium mb-2">Size</h2>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className={`w-10 h-10 flex items-center justify-center border ${
                    selectedSize === size ? "bg-black text-white" : "bg-white text-black hover:bg-gray-100"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h2 className="font-medium mb-2">Quantity</h2>
            <div className="flex items-center border border-gray-300 w-fit">
              <button
                className="px-3 py-2 border-r border-gray-300"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-6 py-2">{quantity}</span>
              <button className="px-3 py-2 border-l border-gray-300" onClick={() => handleQuantityChange(1)}>
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button className="bg-black hover:bg-black/90 text-white py-6 flex-1" onClick={handleAddToCart}>
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Add to wishlist</span>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share product</span>
            </Button>
          </div>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="shipping">Shipping</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-gray-700">{product.description}</p>
            </TabsContent>
            <TabsContent value="features" className="pt-4">
              <ul className="list-disc pl-5 space-y-1 text-gray-700">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <p className="text-gray-700">
                Free standard shipping on all orders over $100. Delivery typically takes 3-5 business days. Express
                shipping available at checkout for an additional fee.
              </p>
              <p className="text-gray-700 mt-2">
                International shipping available to select countries. Customs fees may apply.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

