import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function AccountLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Skeleton className="h-10 w-48 mx-auto mb-8" />

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Skeleton */}
          <div className="w-full md:w-64 bg-gray-50 p-6 rounded-lg">
            <div className="flex flex-col items-center mb-6">
              <Skeleton className="w-24 h-24 rounded-full mb-3" />
              <Skeleton className="h-6 w-32" />
            </div>

            <div className="space-y-1">
              {[...Array(5)].map((_, i) => (
                <Skeleton key={i} className="h-12 w-full rounded-md" />
              ))}
            </div>
          </div>

          {/* Main Content Skeleton */}
          <div className="flex-1">
            <div className="bg-white p-6 rounded-lg border">
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[...Array(2)].map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-12 w-full" />
                    </div>
                  ))}
                </div>

                <div>
                  <Skeleton className="h-4 w-32 mb-1" />
                  <Skeleton className="h-12 w-full" />
                  <Skeleton className="h-3 w-full mt-1" />
                </div>

                <div>
                  <Skeleton className="h-4 w-16 mb-1" />
                  <Skeleton className="h-12 w-full" />
                </div>

                <Skeleton className="h-px w-full" />

                <div>
                  <Skeleton className="h-6 w-24 mb-4" />
                  <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                      <div key={i}>
                        <Skeleton className="h-4 w-32 mb-1" />
                        <Skeleton className="h-12 w-full" />
                      </div>
                    ))}
                  </div>
                </div>

                <Skeleton className="h-12 w-32" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

