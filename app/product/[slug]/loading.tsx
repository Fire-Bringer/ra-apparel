import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function ProductDetailLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow">
        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Product Images Skeleton - Mobile */}
            <div className="md:hidden w-full">
              <Skeleton className="aspect-square mb-4" />
              <div className="flex gap-2 overflow-x-auto pb-2">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="w-16 h-16 flex-shrink-0" />
                ))}
              </div>
            </div>

            {/* Product Images Skeleton - Desktop */}
            <div className="hidden md:block md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Skeleton className="aspect-square col-span-2 row-span-2" />
                <Skeleton className="aspect-square" />
                <Skeleton className="aspect-square" />
              </div>
            </div>

            {/* Product Info Skeleton */}
            <div className="md:w-1/2">
              <Skeleton className="h-8 w-3/4 mb-2" />
              <Skeleton className="h-6 w-32 mb-6" />

              <div className="mt-6">
                <Skeleton className="h-5 w-16 mb-2" />
                <div className="flex gap-2 mb-1">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="w-8 h-8 rounded-full" />
                  ))}
                </div>
                <Skeleton className="h-4 w-32 mt-1" />
              </div>

              <div className="mt-6">
                <Skeleton className="h-5 w-16 mb-2" />
                <div className="flex flex-wrap gap-2">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="w-10 h-10" />
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <Skeleton className="h-5 w-24 mb-2" />
                <Skeleton className="h-10 w-32" />
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Skeleton className="h-12 flex-1" />
                <Skeleton className="h-12 w-12" />
                <Skeleton className="h-12 w-12" />
              </div>

              <div className="mt-8">
                <div className="border-b border-gray-200 mb-4">
                  <div className="flex gap-4 mb-2">
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-8 w-24" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Skeleton */}
        <section className="py-12 bg-gray-100">
          <div className="container px-4 mx-auto">
            <Skeleton className="h-8 w-48 mb-8" />
            <div className="hidden md:grid grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-md overflow-hidden">
                  <Skeleton className="aspect-square" />
                  <div className="p-4">
                    <Skeleton className="h-5 w-full mb-2" />
                    <Skeleton className="h-5 w-24" />
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4 md:hidden">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-md overflow-hidden">
                  <Skeleton className="aspect-square" />
                  <div className="p-3">
                    <Skeleton className="h-4 w-full mb-1" />
                    <Skeleton className="h-4 w-16" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

