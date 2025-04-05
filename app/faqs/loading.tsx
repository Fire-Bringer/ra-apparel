import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function FAQsLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-10 w-64 mb-8" />

          <Skeleton className="h-12 w-full max-w-md mx-auto mb-10 rounded-md" />

          <div className="flex flex-col md:flex-row gap-8">
            {/* Category Navigation Skeleton */}
            <div className="md:w-1/4">
              <div className="bg-gray-100 p-4 rounded-lg">
                <Skeleton className="h-6 w-32 mb-4" />
                <div className="space-y-2">
                  {[...Array(6)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-md" />
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Content Skeleton */}
            <div className="md:w-3/4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="mb-8">
                  <Skeleton className="h-8 w-48 mb-4" />
                  <div className="space-y-4">
                    {[...Array(3)].map((_, j) => (
                      <Skeleton key={j} className="h-16 w-full rounded-lg" />
                    ))}
                  </div>
                </div>
              ))}

              <Skeleton className="h-40 w-full rounded-lg mt-12" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

