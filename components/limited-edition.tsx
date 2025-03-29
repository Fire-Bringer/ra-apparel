import Image from "next/image"
import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"

export default function LimitedEdition() {
  // Set sale end date to 4 days from now
  const saleEndDate = new Date()
  saleEndDate.setDate(saleEndDate.getDate() + 4)

  return (
    <section className="bg-black py-12 md:py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-2">LIMITED EDITION</h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Hurry up! 30% OFF</h2>
            <p className="text-white/80 mb-6">Sale ends in 4 days</p>

            {/* Countdown Timer */}
            <div className="mb-8">
              <CountdownTimer targetDate={saleEndDate} />
            </div>

            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium">Shop Now</Button>
          </div>

          {/* Image - Desktop Version (hidden on mobile) */}
          <div className="hidden md:flex w-full md:w-1/2 justify-center md:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
              <Image
                src="/limited-edition-new.webp"
                alt="Limited Edition Pink Hoodie"
                fill
                className="object-cover"
                style={{ objectPosition: "60% center" }}
              />
            </div>
          </div>

          {/* Image - Mobile Version (hidden on desktop) */}
          <div className="flex md:hidden w-full justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4]">
              <Image
                src="/limited-edition-new.webp"
                alt="Limited Edition Pink Hoodie"
                fill
                className="object-cover"
                style={{ objectPosition: "60% center" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

