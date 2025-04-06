import Image from "next/image"
import { Button } from "@/components/ui/button"
import CountdownTimer from "./countdown-timer"
import Link from "next/link"

export default function LimitedEdition() {
  // Set sale end date to 4 days from now
  const saleEndDate = new Date()
  saleEndDate.setDate(saleEndDate.getDate() + 4)

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Add background image */}
      <div className="absolute inset-0 z-0">
        <Image src="/limited-background.webp" alt="Dark textured background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Update the container div to have a relative z-index to appear above the background */}
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-center md:gap-0 lg:gap-2">
          {/* Text Content */}
          <div className="w-full md:w-5/12 text-center md:text-left mb-8 md:mb-0">
            <h3 className="text-white text-sm font-medium uppercase tracking-wider mb-2">LIMITED EDITION</h3>
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Hurry up! 30% OFF</h2>
            <p className="text-white/80 mb-6">Sale ends in 4 days</p>

            {/* Countdown Timer */}
            <div className="mb-8 flex justify-center md:justify-start">
              <CountdownTimer targetDate={saleEndDate} />
            </div>

            <Button className="bg-white text-black hover:bg-white/90 px-8 py-6 text-base font-medium" asChild>
              <Link href="/categories">Shop Now</Link>
            </Button>
          </div>

          {/* Images - Desktop Version (hidden on mobile) */}
          <div className="hidden md:flex w-full md:w-5/12 justify-center">
            <div className="grid grid-cols-2 gap-3 w-full">
              {/* First Image (Top Left) */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/limited-section-model1.webp"
                  alt="Model wearing pink hoodie"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Second Image (Top Right) */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/limited-section-model2.webp"
                  alt="Model with blue shirt draped over shoulders"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Third Image (Bottom, Spanning Full Width) */}
              <div className="relative aspect-[16/9] col-span-2 mt-3 overflow-hidden">
                <Image
                  src="/limited-section-model3.webp"
                  alt="Model wearing denim jacket in urban setting"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 30%" }}
                />
              </div>
            </div>
          </div>

          {/* Image - Mobile Version (hidden on desktop) - Keep single image for mobile */}
          <div className="flex md:hidden w-full justify-center">
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden">
              <Image
                src="/limited-section-model1.webp"
                alt="Model wearing pink hoodie"
                fill
                className="object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

