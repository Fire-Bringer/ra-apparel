import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function CategoriesLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow">
        {/* Banner Skeleton */}
        <div className="relative w-full h-[50vh] bg-gray-200"></div>

        <div className="container px-4 mx-auto py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Skeleton (Desktop) */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <Skeleton className="h-8 w-32 mb-6" />
              <div className="space-y-6">
                <div>
                  <Skeleton className="h-6 w-24 mb-4" />
                  <div className="space-y-2 pl-2">
                    {[...Array(7)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2 rounded" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <Skeleton className="h-6 w-16 mb-4" />
                  <div className="space-y-2 pl-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="flex items-center">
                        <Skeleton className="h-4 w-4 mr-2 rounded" />
                        <Skeleton className="h-4 w-20" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid Skeleton */}
            <div className="flex-1">
              <div className="hidden md:flex justify-between items-center mb-6">
                <Skeleton className="h-8 w-32" />
                <div className="flex items-center gap-4">
                  <Skeleton className="h-5 w-48" />
                  <Skeleton className="h-8 w-36" />
                </div>
              </div>

              {/* Mobile Filter Button */}
              <div className="flex justify-between items-center mb-4 md:hidden">
                <Skeleton className="h-6 w-24" />
                <Skeleton className="h-8 w-20" />
              </div>

              {/* Mobile Grid */}
              <div className="grid grid-cols-2 gap-3 md:hidden">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                    <Skeleton className="aspect-square" />
                    <div className="p-2">
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-16" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="border border-gray-200 rounded-md overflow-hidden">
                    <Skeleton className="aspect-square" />
                    <div className="p-4">
                      <Skeleton className="h-5 w-full mb-2" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

