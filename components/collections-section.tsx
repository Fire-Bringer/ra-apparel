import Image from "next/image"
import Link from "next/link"

// Collection data
const collections = [
  {
    id: "1",
    name: "Couple Fits",
    description: "Perfect for you and your partner",
    imageSrc: "/couple-fits-collection.webp",
    slug: "couple-fits",
  },
  {
    id: "2",
    name: "Men's Fits",
    description: "Stylish options for him",
    imageSrc: "/mens-fits-collection.webp",
    slug: "mens-fits",
  },
  {
    id: "3",
    name: "Women's Fits",
    description: "Trendy looks for her",
    imageSrc: "/womens-fits-collection.webp",
    slug: "womens-fits",
  },
]

export default function CollectionsSection() {
  return (
    <section className="py-16">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Shop Collections</h2>

        {/* Mobile Layout (Vertical Stack) */}
        <div className="md:hidden space-y-6">
          {collections.map((collection) => (
            <Link key={collection.id} href={`/categories?category=${collection.slug}`} className="block">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={collection.imageSrc || "/placeholder.svg"}
                  alt={collection.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">{collection.name}</h3>
                  <p className="text-sm text-white/80 mb-3">{collection.description}</p>
                  <span className="inline-block border-b border-white pb-1 text-sm font-medium">Shop Now</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Layout (Grid) */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {/* First collection (large) */}
          <div className="col-span-12 lg:col-span-6">
            <Link href={`/categories?category=${collections[0].slug}`} className="block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={collections[0].imageSrc || "/placeholder.svg"}
                  alt={collections[0].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-8 text-white">
                  <h3 className="text-3xl font-bold mb-2">{collections[0].name}</h3>
                  <p className="text-base text-white/80 mb-4">{collections[0].description}</p>
                  <span className="inline-block border-b border-white pb-1 text-sm font-medium">Shop Now</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Second and third collections (stacked vertically) */}
          <div className="col-span-12 lg:col-span-6 space-y-6">
            {collections.slice(1).map((collection) => (
              <Link key={collection.id} href={`/categories?category=${collection.slug}`} className="block">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={collection.imageSrc || "/placeholder.svg"}
                    alt={collection.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{collection.name}</h3>
                    <p className="text-sm text-white/80 mb-3">{collection.description}</p>
                    <span className="inline-block border-b border-white pb-1 text-sm font-medium">Shop Now</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

