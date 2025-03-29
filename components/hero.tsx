import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full h-[100vh] md:h-[80vh] overflow-hidden">
      {/* Hero Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero1%201-xlTFltk4R6mwWETU3JZwLFysYyl5Lb.png')",
          backgroundPosition: "center top 10%",
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-end md:justify-center pb-16 md:pb-0">
        <div className="max-w-xl">
          {/* Shopping Now Button */}
          <Link
            href="/shop"
            className="inline-block mb-4 px-4 py-2 bg-black text-white text-sm font-medium hover:bg-black/90 transition-colors"
          >
            Shopping Now
          </Link>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
            More than
            <br />a hustle.
            <br />
            It's a lifestyle.
          </h1>

          {/* Subheading */}
          <p className="text-white text-lg md:text-xl max-w-md mb-8">
            Whether you're just starting out, or an OG, you get yours before they get theirs.
          </p>

          {/* Optional CTA Button - Mobile Only */}
          <div className="md:hidden">
            <Link
              href="/shop"
              className="inline-block px-6 py-3 bg-white text-black font-medium hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

