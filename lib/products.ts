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
    name: "Nike Air Presto",
    slug: "nike-air-presto",
    price: 129.99,
    salePrice: null,
    description:
      "The Nike Air Presto delivers unmatched comfort with its innovative design. Featuring a stretchy mesh upper, supportive midfoot cage, and responsive Air cushioning, these iconic sneakers offer the perfect blend of style and performance for everyday wear.",
    features: [
      "Stretchy mesh upper for breathable comfort",
      "Molded midfoot cage for support",
      "Nike Air cushioning for responsive comfort",
      "Durable rubber outsole with waffle pattern",
      "Signature 'T-shirt for your feet' fit",
    ],
    colors: [
      { name: "Black/Yellow", value: "#000000" },
      { name: "White/Blue", value: "#FFFFFF" },
    ],
    sizes: ["7", "8", "9", "10", "11", "12", "13"],
    images: [
      { src: "/nike-shoes.webp", alt: "Nike Air Presto - Top View", isPrimary: true },
      { src: "/nike-shoes.webp", alt: "Nike Air Presto - Side View" },
    ],
    isNew: true,
    isSale: false,
    category: "shoes",
  },
  {
    id: "2",
    name: "Chelsea FC Away Jersey 2023/24",
    slug: "chelsea-fc-away-jersey",
    price: 89.99,
    salePrice: 69.99,
    description:
      "Show your support for the Blues with the official Chelsea FC Away Jersey for the 2023/24 season. This Nike Dri-FIT jersey features a stylish beige design with orange accents, the iconic club crest, and is made with sweat-wicking technology to keep you comfortable whether you're on the pitch or in the stands.",
    features: [
      "Official Nike Dri-FIT technology",
      "100% recycled polyester fabric",
      "Breathable and sweat-wicking material",
      "Authentic Chelsea FC crest and sponsor logos",
      "Standard fit for a relaxed, easy feel",
    ],
    colors: [{ name: "Beige/Orange", value: "#E8D0B0" }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/nike-3-tshirt.webp", alt: "Chelsea FC Away Jersey - Front View", isPrimary: true },
      { src: "/nike-3-tshirt.webp", alt: "Chelsea FC Away Jersey - Back View" },
    ],
    isNew: false,
    isSale: true,
    category: "jerseys",
  },
  {
    id: "3",
    name: "Ellesse Tricolor Sweatshirt",
    slug: "ellesse-tricolor-sweatshirt",
    price: 74.99,
    salePrice: null,
    description:
      "Make a statement with this classic Ellesse Tricolor Sweatshirt. Featuring the iconic color-block design in navy, white, and red with an embossed Ellesse logo, this premium cotton-blend sweatshirt delivers both retro style and everyday comfort for an authentic sportswear look.",
    features: [
      "Premium cotton-polyester blend",
      "Classic tricolor design",
      "Embossed Ellesse logo on chest",
      "Ribbed collar, cuffs, and hem",
      "Regular fit for comfortable wear",
    ],
    colors: [{ name: "Navy/White/Red", value: "#1A2B4A" }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/ellesse-longsleeve.webp", alt: "Ellesse Tricolor Sweatshirt - Front View", isPrimary: true },
      { src: "/ellesse-longsleeve.webp", alt: "Ellesse Tricolor Sweatshirt - Detail View" },
    ],
    isNew: true,
    isSale: false,
    category: "sweatshirts",
  },
  {
    id: "4",
    name: "705 California Long Sleeve Tee",
    slug: "705-california-long-sleeve-tee",
    price: 49.99,
    salePrice: 39.99,
    description:
      "Rep the West Coast with our 705 California Long Sleeve Tee. This minimalist design features a clean '705 CALIFORNIA' print on premium cotton fabric, offering both style and comfort for everyday wear. Perfect for layering or wearing on its own.",
    features: [
      "100% premium cotton construction",
      "Bold '705 CALIFORNIA' chest print",
      "Ribbed crew neck and cuffs",
      "Relaxed fit for everyday comfort",
      "Pre-shrunk to maintain shape after washing",
    ],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
    ],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/black-long-sleeve.webp", alt: "705 California Long Sleeve Tee - Front View", isPrimary: true },
      { src: "/black-long-sleeve.webp", alt: "705 California Long Sleeve Tee - Back View" },
    ],
    isNew: false,
    isSale: true,
    category: "longsleeves",
  },
  {
    id: "5",
    name: "The North Face Urban Explorer Set",
    slug: "north-face-urban-explorer-set",
    price: 249.99,
    salePrice: 199.99,
    description:
      "Elevate your outdoor style with The North Face Urban Explorer Set. This complete outfit features a classic gray fleece jacket, essential white tee, black pants, and coordinating New Balance sneakers. Perfect for casual adventures or everyday urban exploration with premium comfort and iconic outdoor style.",
    features: [
      "Complete outfit set with coordinated pieces",
      "The North Face Denali-style fleece jacket with zippered chest pocket",
      "Premium cotton white t-shirt for layering",
      "Durable black pants with classic fit",
      "New Balance running shoes with cushioned support",
      "Includes matching black cap with embroidered logo",
    ],
    colors: [{ name: "Gray/Black", value: "#808080" }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      {
        src: "/northface-set.webp",
        alt: "The North Face Urban Explorer Set - Complete Outfit",
        isPrimary: true,
      },
      { src: "/northface-set.webp", alt: "The North Face Urban Explorer Set - Flat Lay" },
    ],
    isNew: true,
    isSale: true,
    category: "outfits",
  },
  {
    id: "6",
    name: "Urban Runner Sneakers",
    slug: "urban-runner-sneakers",
    price: 159.99,
    salePrice: 129.99,
    description:
      "Step up your sneaker game with our Urban Runner Sneakers. These contemporary athletic shoes feature a sleek gray mesh upper with vibrant coral accents, a distinctive yellow heel counter, and an ultra-cushioned white midsole. Designed for both performance and style, these versatile sneakers transition seamlessly from workout to weekend wear.",
    features: [
      "Breathable mesh upper with synthetic overlays",
      "Vibrant color-blocking design with coral and yellow accents",
      "Responsive cushioning for all-day comfort",
      "Durable rubber outsole with multi-directional traction pattern",
      "Pull tabs for easy on and off",
      "Reflective details for visibility in low light",
    ],
    colors: [{ name: "Gray/Coral/Yellow", value: "#A9A9A9" }],
    sizes: ["7", "8", "9", "10", "11", "12"],
    images: [
      { src: "/street-sneakers.webp", alt: "Urban Runner Sneakers - Side and Sole View", isPrimary: true },
      { src: "/street-sneakers.webp", alt: "Urban Runner Sneakers - Floating Display" },
    ],
    isNew: true,
    isSale: true,
    category: "shoes",
  },
  {
    id: "7",
    name: "Minimalist White Hoodie Set",
    slug: "minimalist-white-hoodie-set",
    price: 129.99,
    salePrice: null,
    description:
      "Embrace effortless style with our Minimalist White Hoodie Set. This curated outfit pairs a premium white cotton hoodie featuring black drawstrings and a kangaroo pocket with distressed light blue denim jeans. The perfect foundation for a clean, contemporary look that can be dressed up or down for any casual occasion.",
    features: [
      "Ultra-soft 100% cotton hoodie with brushed interior",
      "Black contrast drawstrings for subtle detail",
      "Spacious kangaroo pocket for essentials",
      "Light blue distressed denim with strategic rips",
      "Relaxed fit for comfortable, everyday wear",
      "Versatile pieces that pair with multiple items in your wardrobe",
    ],
    colors: [{ name: "White/Light Blue", value: "#FFFFFF" }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/white-hoodie-set.webp", alt: "Minimalist White Hoodie Set - Hanging Display", isPrimary: true },
      { src: "/white-hoodie-set.webp", alt: "Minimalist White Hoodie Set - Outfit Combination" },
    ],
    isNew: true,
    isSale: false,
    category: "outfits",
  },
  {
    id: "8",
    name: "Essential White Crewneck Set",
    slug: "essential-white-crewneck-set",
    price: 119.99,
    salePrice: 99.99,
    description:
      "Build your wardrobe foundation with our Essential White Crewneck Set. This timeless outfit combination features a clean white crewneck sweatshirt, versatile gray denim jeans, and classic white canvas sneakers. Perfect for creating a minimalist aesthetic that never goes out of style, this set offers endless styling possibilities for your everyday rotation.",
    features: [
      "Premium cotton-blend crewneck sweatshirt with ribbed trim",
      "Medium-weight fabric for year-round wear",
      "Classic gray denim with straight-leg fit",
      "White canvas sneakers with durable rubber outsole",
      "Versatile neutral color palette for easy mixing and matching",
      "Timeless silhouettes that transcend seasonal trends",
    ],
    colors: [{ name: "White/Gray", value: "#FFFFFF" }],
    sizes: ["S", "M", "L", "XL", "2XL"],
    images: [
      { src: "/white-longsleeve-set.webp", alt: "Essential White Crewneck Set - Flat Lay", isPrimary: true },
      { src: "/white-longsleeve-set.webp", alt: "Essential White Crewneck Set - Outfit Combination" },
    ],
    isNew: false,
    isSale: true,
    category: "outfits",
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
