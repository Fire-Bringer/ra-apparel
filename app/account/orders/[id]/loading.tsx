import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"

export default function OrderDetailLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Skeleton className="h-5 w-32 mb-6" />

        <div className="bg-white p-6 rounded-lg border mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <Skeleton className="h-8 w-48 mb-2" />
              <Skeleton className="h-5 w-32" />
            </div>
            <Skeleton className="mt-2 md:mt-0 h-6 w-24 rounded-full" />
          </div>

          {/* Order Timeline Skeleton */}
          <div className="mb-8">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="relative">
              <div className="absolute left-3.5 top-0 h-full w-0.5 bg-gray-200"></div>
              <div className="space-y-6 relative">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-start">
                    <Skeleton className="h-7 w-7 rounded-full z-10" />
                    <div className="ml-4">
                      <Skeleton className="h-5 w-32 mb-1" />
                      <Skeleton className="h-4 w-48" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Items Skeleton */}
          <div className="mb-8">
            <Skeleton className="h-6 w-32 mb-4" />
            <div className="space-y-4">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center border-b pb-4">
                  <Skeleton className="h-20 w-20 mr-4" />
                  <div className="flex-grow">
                    <Skeleton className="h-5 w-32 mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                  <div className="text-right">
                    <Skeleton className="h-5 w-16 mb-1" />
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="h-32 w-full rounded" />
            </div>
            <div>
              <Skeleton className="h-6 w-48 mb-4" />
              <Skeleton className="h-32 w-full rounded" />
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <Skeleton className="h-10 w-32" />
          <Skeleton className="h-10 w-48" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

