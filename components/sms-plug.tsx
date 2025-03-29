import Image from "next/image"
import Link from "next/link"

// Social media feed images
const feedImages = [
  {
    id: "1",
    alt: "Person in black hoodie",
    imageSrc: "/ig1.webp",
  },
  {
    id: "2",
    alt: "Person in white outfit",
    imageSrc: "/ig2.webp",
  },
  {
    id: "3",
    alt: "Two people looking at phone",
    imageSrc: "/ig3.webp",
  },
  {
    id: "4",
    alt: "Person with dreadlocks",
    imageSrc: "/ig4.webp",
  },
  {
    id: "5",
    alt: "Two people in casual wear",
    imageSrc: "/ig5.webp",
  },
  {
    id: "6",
    alt: "Group of people in streetwear",
    imageSrc: "/ig6.webp",
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
            href="https://instagram.com/get_money_network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium block mt-2 hover:underline"
          >
            @get_money_network
          </Link>
        </div>

        {/* Desktop Header (Centered) */}
        <div className="hidden md:block text-center mb-8">
          <div className="text-xs font-medium uppercase tracking-wider text-gray-500">NEWSFEED</div>
          <h2 className="text-2xl font-bold mt-1 mb-2">SMS PLUG</h2>
          <p className="text-sm">Follow us on social media for more discount & promotions</p>
          <Link
            href="https://instagram.com/get_money_network"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium block mt-2 hover:underline"
          >
            @get_money_network
          </Link>
        </div>

        {/* Mobile Grid (2 columns) */}
        <div className="grid grid-cols-2 gap-2 md:hidden">
          {feedImages.map((image) => (
            <Link
              key={image.id}
              href="https://instagram.com/get_money_network"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden"
            >
              <Image
                src={image.imageSrc || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>

        {/* Desktop Row */}
        <div className="hidden md:grid grid-cols-6 gap-2">
          {feedImages.map((image) => (
            <Link
              key={image.id}
              href="https://instagram.com/get_money_network"
              target="_blank"
              rel="noopener noreferrer"
              className="block aspect-square overflow-hidden"
            >
              <Image
                src={image.imageSrc || "/placeholder.svg"}
                alt={image.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
