import Link from "next/link"
import Image from "next/image"
import { Instagram } from "lucide-react"

// Instagram post data
const instagramPosts = [
  {
    id: "1",
    imageSrc: "/ig1.webp",
    alt: "Man in black hoodie against white wall",
    link: "https://instagram.com/raa",
  },
  {
    id: "2",
    imageSrc: "/ig2.webp",
    alt: "Group of friends laughing together outdoors",
    link: "https://instagram.com/raa",
  },
  {
    id: "3",
    imageSrc: "/ig3.webp",
    alt: "Woman in green top and white pants at skate park",
    link: "https://instagram.com/raa",
  },
  {
    id: "4",
    imageSrc: "/ig4.webp",
    alt: "Couple looking at phone together",
    link: "https://instagram.com/raa",
  },
  {
    id: "5",
    imageSrc: "/ig5.webp",
    alt: "Man with dreadlocks against neon background",
    link: "https://instagram.com/raa",
  },
  {
    id: "6",
    imageSrc: "/ig6.webp",
    alt: "Group selfie of friends at a gathering",
    link: "https://instagram.com/raa",
  },
]

export default function SmsPlug() {
  return (
    <section className="py-12 bg-gray-200">
      <div className="container px-4 mx-auto">
        {/* Mobile Header (Left-aligned) */}
        <div className="md:hidden mb-6">
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">NEWSFEED</div>
          <h2 className="text-2xl font-bold mt-1 mb-2">SMS PLUG</h2>
          <p className="text-sm">Follow us on social media for more discount & promotions</p>
          <Link
            href="https://instagram.com/raa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium block mt-2 hover:underline"
          >
            @raa
          </Link>
        </div>

        {/* Desktop Header (Centered) */}
        <div className="hidden md:block text-center mb-8">
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">NEWSFEED</div>
          <h2 className="text-2xl font-bold mt-1 mb-2">SMS PLUG</h2>
          <p className="text-sm">Follow us on social media for more discount & promotions</p>
          <Link
            href="https://instagram.com/raa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium block mt-2 hover:underline"
          >
            @raa
          </Link>
        </div>

        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <Image
                src={post.imageSrc || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="h-6 w-6 text-white" />
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Row */}
        <div className="hidden md:grid grid-cols-6 gap-2">
          {instagramPosts.map((post) => (
            <Link
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden relative group"
            >
              <Image
                src={post.imageSrc || "/placeholder.svg"}
                alt={post.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-white" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
