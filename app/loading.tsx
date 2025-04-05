import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function HomeLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow">
        {/* Hero Section Skeleton */}
        <div className="relative w-full h-[100vh] md:h-[80vh] overflow-hidden bg-gray-100">
          <div className="relative h-full container mx-auto px-4 md:px-6 flex flex-col justify-end md:justify-center pb-16 md:pb-0">
            <Skeleton className="h-8 w-32 mb-4" />
            <Skeleton className="h-16 w-full max-w-md mb-4" />
            <Skeleton className="h-16 w-full max-w-md mb-4" />
            <Skeleton className="h-16 w-full max-w-md mb-8" />
            <Skeleton className="h-12 w-40" />
          </div>
        </div>

        {/* Featured Carousel Skeleton */}
        <div className="py-12">
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between mb-6">
              <Skeleton className="h-8 w-32" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-8 rounded-full" />
                <Skeleton className="h-8 w-8 rounded-full" />
              </div>
            </div>
            <div className="flex overflow-x-auto gap-4 pb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex-shrink-0 w-[160px] md:w-[200px]">
                  <Skeleton className="aspect-[4/5] mb-2" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-20" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Categories Section Skeleton */}
        <div className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto">
            <Skeleton className="h-10 w-64 mx-auto mb-10" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white p-4 rounded-md">
                  <Skeleton className="aspect-square mb-4" />
                  <Skeleton className="h-5 w-24 mx-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Limited Edition Skeleton */}
        <div className="bg-gray-800 py-12 md:py-16">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-5/12 text-center md:text-left mb-8 md:mb-0">
                <Skeleton className="h-4 w-32 mb-2 mx-auto md:mx-0" />
                <Skeleton className="h-8 w-48 mb-4 mx-auto md:mx-0" />
                <Skeleton className="h-4 w-36 mb-6 mx-auto md:mx-0" />
                <div className="mb-8 flex justify-center md:justify-start">
                  <div className="flex space-x-4">
                    {[...Array(4)].map((_, i) => (
                      <Skeleton key={i} className="h-12 w-12 rounded" />
                    ))}
                  </div>
                </div>
                <Skeleton className="h-12 w-32 mx-auto md:mx-0" />
              </div>
              <div className="w-full md:w-5/12 grid grid-cols-2 gap-3">
                <Skeleton className="aspect-[3/4]" />
                <Skeleton className="aspect-[3/4]" />
                <Skeleton className="aspect-[16/9] col-span-2" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

