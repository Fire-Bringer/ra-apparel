import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function CheckoutLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow container max-w-6xl mx-auto px-4 py-6">
        {/* Back Button Skeleton */}
        <Skeleton className="h-5 w-16 mb-6" />

        {/* Checkout Title Skeleton */}
        <Skeleton className="h-10 w-48 mx-auto mb-6" />

        {/* Progress Steps Skeleton */}
        <div className="flex items-center justify-center mb-8">
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

        <div className="grid md:grid-cols-12 gap-8">
          {/* Left Column - Forms Skeleton */}
          <div className="md:col-span-7 space-y-8">
            {/* Contact Information Skeleton */}
            <div className="border rounded-lg p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="grid grid-cols-2 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-24 mb-1" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address Skeleton */}
            <div className="border rounded-lg p-6">
              <Skeleton className="h-6 w-48 mb-4" />
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i}>
                    <Skeleton className="h-4 w-32 mb-1" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-4">
                  {[...Array(2)].map((_, i) => (
                    <div key={i}>
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-10 w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Payment Method Skeleton */}
            <div className="border rounded-lg p-6">
              <Skeleton className="h-6 w-36 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <div className="space-y-4 mt-4">
                  <Skeleton className="h-10 w-full" />
                  <div className="grid grid-cols-2 gap-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Order Summary Skeleton */}
          <div className="md:col-span-5">
            <div className="border rounded-lg p-6 sticky top-24">
              <Skeleton className="h-6 w-36 mb-4" />

              {/* Cart Items Skeleton */}
              <div className="space-y-4 mb-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center">
                    <Skeleton className="h-16 w-16 mr-3" />
                    <div className="flex-grow">
                      <Skeleton className="h-4 w-24 mb-1" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                    <div className="text-right ml-2">
                      <Skeleton className="h-4 w-16 mb-1" />
                      <Skeleton className="h-3 w-12" />
                    </div>
                    <Skeleton className="ml-2 h-4 w-4" />
                  </div>
                ))}
              </div>

              {/* Shipping Options Skeleton */}
              <div className="border-t border-gray-200 pt-4 mb-4">
                <Skeleton className="h-5 w-20 mb-2" />
                <div className="space-y-2">
                  {[...Array(3)].map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full" />
                  ))}
                </div>
              </div>

              {/* Totals Skeleton */}
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <Skeleton className="h-4 w-16" />
                  <Skeleton className="h-4 w-16" />
                </div>
                <div className="flex justify-between">
                  <Skeleton className="h-6 w-12" />
                  <Skeleton className="h-6 w-16" />
                </div>
              </div>

              {/* Place Order Button Skeleton */}
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

