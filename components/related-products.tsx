import Link from "next/link"
import Image from "next/image"
import { getRelatedProducts } from "@/lib/products"

interface RelatedProductsProps {
  currentProductId: string
}

export default function RelatedProducts({ currentProductId }: RelatedProductsProps) {
  const relatedProducts = getRelatedProducts(currentProductId, 4)

  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>

        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} className="block">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.images[0].src || "/placeholder.svg"}
                    alt={product.images[0].alt}
                    fill
                    className="object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-black text-white text-[10px] px-1.5 py-0.5">NEW</div>
                  )}
                  {product.isSale && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5">SALE</div>
                  )}
                </div>
                <div className="p-3">
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

        {/* Desktop Grid (4 columns) */}
        <div className="hidden md:grid grid-cols-4 gap-6">
          {relatedProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.slug}`} className="block group">
              <div className="bg-white border border-gray-200 rounded-md overflow-hidden">
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
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
    </section>
  )
}

