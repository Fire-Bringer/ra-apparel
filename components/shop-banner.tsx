import Image from "next/image"

export default function ShopBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Desktop Banner (hidden on mobile) */}
      <div className="hidden md:block relative h-[50vh] lg:h-[60vh]">
        <Image
          src="/index-banner.webp"
          alt="Group of people wearing different colored hoodies"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }} // Adjusted to crop higher (from 40% to 30%)
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 px-16 py-12 text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Shop Page</h1>
            <p className="text-xl text-white">Lets fit you like a boss.</p>
          </div>
        </div>
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden relative h-[70vh]">
        <Image
          src="/index-banner.webp"
          alt="Group of people wearing different colored hoodies"
          fill
          priority
          className="object-cover"
          style={{ objectPosition: "center 30%" }} // Adjusted to crop higher (from 40% to 30%)
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black/50 px-8 py-8 mx-4 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">Shop Page</h1>
            <p className="text-base text-white">Lets fit you like a boss.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
