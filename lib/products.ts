export interface Product {
  id: string
  name: string
  slug: string
  price: number
  salePrice: number | null
  description: string
  features: string[]
  colors: ProductColor[]
  sizes: string[]
  images: ProductImage[]
  isNew: boolean
  isSale: boolean
  category: string
}

export interface ProductColor {
  name: string
  value: string
}

export interface ProductImage {
  src: string
  alt: string
  isPrimary?: boolean
}

// Sample product data
export const products: Product[] = [
  {
    id: "1",
    name: "Black Boss",
    slug: "black-boss",
    price: 39.0,
    salePrice: null,
    description:
      "Our signature Black Boss hoodie features premium cotton blend fabric for ultimate comfort. This versatile piece is perfect for everyday wear with its minimalist design and durable construction.",
    features: [
      "Premium cotton blend fabric",
      "Ribbed cuffs and hem",
      "Adjustable drawstring hood",
      "Front kangaroo pocket",
      "Regular fit",
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
      { name: "Navy", value: "#000080" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/new-hoodie.webp", alt: "Black Boss Hoodie - Front View", isPrimary: true },
      { src: "/new-hoodie.webp", alt: "Black Boss Hoodie - Side View" },
      { src: "/new-hoodie.webp", alt: "Black Boss Hoodie - Back View" },
      { src: "/new-hoodie.webp", alt: "Black Boss Hoodie - Detail View" },
    ],
    isNew: true,
    isSale: false,
    category: "hoodies",
  },
  {
    id: "2",
    name: "Get Money",
    slug: "get-money",
    price: 49.99,
    salePrice: 39.99,
    description:
      "The Get Money long sleeve tee combines style and comfort with its soft cotton fabric and bold graphic design. Perfect for making a statement while staying comfortable all day long.",
    features: ["100% cotton fabric", "Ribbed crew neck", "Bold graphic print", "Regular fit", "Machine washable"],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#FF0000" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/long-sleeve.webp", alt: "Get Money Long Sleeve - Front View", isPrimary: true },
      { src: "/long-sleeve.webp", alt: "Get Money Long Sleeve - Back View" },
      { src: "/long-sleeve.webp", alt: "Get Money Long Sleeve - Detail View" },
    ],
    isNew: false,
    isSale: true,
    category: "tshirts",
  },
  {
    id: "3",
    name: "Africa - Tribe Hoodie",
    slug: "africa-tribe-hoodie",
    price: 59.99,
    salePrice: 49.99,
    description:
      "Our Africa Tribe Hoodie celebrates cultural heritage with its unique design and premium quality construction. Made from soft, durable fabric that keeps you comfortable in any weather.",
    features: [
      "Heavy-weight cotton blend",
      "Cultural-inspired design",
      "Oversized hood with drawstrings",
      "Front kangaroo pocket",
      "Relaxed fit",
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "Brown", value: "#964B00" },
      { name: "Green", value: "#006400" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/fresh-set.webp", alt: "Africa Tribe Hoodie - Front View", isPrimary: true },
      { src: "/fresh-set.webp", alt: "Africa Tribe Hoodie - Side View" },
      { src: "/fresh-set.webp", alt: "Africa Tribe Hoodie - Back View" },
    ],
    isNew: false,
    isSale: true,
    category: "hoodies",
  },
  {
    id: "4",
    name: "Nike Air Force 1",
    slug: "nike-air-force-1",
    price: 110.0,
    salePrice: null,
    description:
      "The iconic Nike Air Force 1 features a timeless design with premium leather upper and Air-Sole cushioning. A streetwear essential that combines style, comfort, and durability.",
    features: [
      "Premium leather upper",
      "Air-Sole cushioning",
      "Perforated toe box",
      "Rubber outsole for traction",
      "Padded collar for comfort",
    ],
    colors: [
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
      { name: "Gray", value: "#808080" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      { src: "/nikes.webp", alt: "Nike Air Force 1 - Side View", isPrimary: true },
      { src: "/nikes.webp", alt: "Nike Air Force 1 - Top View" },
      { src: "/nikes.webp", alt: "Nike Air Force 1 - Back View" },
    ],
    isNew: true,
    isSale: false,
    category: "shoes",
  },
  {
    id: "5",
    name: "Pink Boss Tee",
    slug: "pink-boss-tee",
    price: 34.99,
    salePrice: null,
    description:
      "Make a statement with our Pink Boss Tee, featuring vibrant color and premium cotton construction. This eye-catching tee offers both style and comfort for everyday wear.",
    features: ["100% premium cotton", "Vibrant pink color", "Ribbed crew neck", "Regular fit", "Machine washable"],
    colors: [
      { name: "Pink", value: "#FFC0CB" },
      { name: "White", value: "#FFFFFF" },
      { name: "Black", value: "#000000" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/article-1.webp", alt: "Pink Boss Tee - Front View", isPrimary: true },
      { src: "/article-1.webp", alt: "Pink Boss Tee - Back View" },
      { src: "/article-1.webp", alt: "Pink Boss Tee - Detail View" },
    ],
    isNew: false,
    isSale: false,
    category: "tshirts",
  },
  {
    id: "6",
    name: "Ellesse Sweatshirt",
    slug: "ellesse-sweatshirt",
    price: 69.99,
    salePrice: null,
    description:
      "The Ellesse Sweatshirt combines vintage style with modern comfort. Featuring the iconic Ellesse logo and made from soft, warm fabric perfect for cooler days.",
    features: ["Cotton-polyester blend", "Vintage-inspired design", "Ribbed cuffs and hem", "Crew neck", "Regular fit"],
    colors: [
      { name: "Navy", value: "#000080" },
      { name: "Gray", value: "#808080" },
      { name: "Red", value: "#FF0000" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/article-2.webp", alt: "Ellesse Sweatshirt - Front View", isPrimary: true },
      { src: "/article-2.webp", alt: "Ellesse Sweatshirt - Side View" },
      { src: "/article-2.webp", alt: "Ellesse Sweatshirt - Back View" },
    ],
    isNew: false,
    isSale: false,
    category: "sweatsuits",
  },
]

// Helper functions
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getRelatedProducts(currentProductId: string, limit = 4): Product[] {
  return products.filter((product) => product.id !== currentProductId).slice(0, limit)
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((product) => product.category === category)
}

