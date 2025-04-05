import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"

export default function OrderCompleteLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow container max-w-3xl mx-auto px-4 py-8">
        <Skeleton className="h-5 w-32 mb-6" />
        <Skeleton className="h-12 w-48 mx-auto mb-8" />

        {/* Progress Steps Skeleton */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="ml-2 h-5 w-24" />
          </div>
          <Skeleton className="border-t border-gray-300 w-12 mx-4" />
          <div className="flex items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="ml-2 h-5 w-32" />
          </div>
          <Skeleton className="border-t border-gray-300 w-12 mx-4" />
          <div className="flex items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="ml-2 h-5 w-32" />
          </div>
        </div>

        {/* Order Confirmation Card Skeleton */}
        <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
          <div className="text-center mb-10">
            <Skeleton className="h-6 w-32 mx-auto mb-2" />
            <Skeleton className="h-8 w-64 mx-auto" />
          </div>

          {/* Order Items Skeleton */}
          <div className="flex justify-center gap-6 mb-8">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="relative">
                <Skeleton className="h-24 w-24" />
                <Skeleton className="absolute -top-2 -right-2 h-5 w-5 rounded-full" />
              </div>
            ))}
          </div>

          {/* Order Details Skeleton */}
          <div className="space-y-3 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex justify-between">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-5 w-48" />
              </div>
            ))}
          </div>

          {/* Purchase History Button Skeleton */}
          <div className="text-center">
            <Skeleton className="h-10 w-48 mx-auto" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

