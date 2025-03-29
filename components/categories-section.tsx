import Image from "next/image"
import Link from "next/link"

// Category data
const categories = [
  {
    id: "1",
    name: "Hoodies",
    imageSrc: "/new-hoodie-image.webp",
    slug: "hoodies",
  },
  {
    id: "2",
    name: "Tracksuits",
    imageSrc: "/tracksuit-new.webp",
    slug: "tracksuits",
  },
  {
    id: "3",
    name: "Sweatsuits",
    imageSrc: "/sweatsuit-new.webp",
    slug: "sweatsuits",
  },
  {
    id: "4",
    name: "T-Shirts",
    imageSrc: "/tshirt-new.webp",
    slug: "t-shirts",
  },
  {
    id: "5",
    name: "Zip-Ups",
    imageSrc: "/zipup-new.webp",
    slug: "zip-ups",
  },
  {
    id: "6",
    name: "Bomber Jackets",
    imageSrc: "/bomber-jacket-new.webp",
    slug: "bomber-jackets",
  },
]

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-gray-200">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Shop by Categories</h2>

        {/* Desktop Grid (3 columns) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop/${category.slug}`} className="block group">
              <div className="bg-white p-4 rounded-md overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={category.imageSrc || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center font-medium text-lg mt-4">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop/${category.slug}`} className="block group">
              <div className="bg-white p-3 rounded-md overflow-hidden">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={category.imageSrc || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-center font-medium text-sm mt-2">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

