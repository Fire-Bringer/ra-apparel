import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function CartLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow container max-w-3xl mx-auto px-4 py-6">
        {/* Back Button Skeleton */}
        <Skeleton className="h-5 w-16 mb-6" />

        {/* Cart Title Skeleton */}
        <Skeleton className="h-10 w-32 mx-auto mb-6" />

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
          <Skeleton className="border-t border-gray-300 w-12 mx-4 hidden md:block" />
          <div className="hidden md:flex items-center">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="ml-2 h-5 w-32" />
          </div>
        </div>

        <Skeleton className="h-px w-full mb-4" />

        {/* Product List Skeleton */}
        <div className="mb-8">
          <Skeleton className="h-6 w-20 mb-4" />

          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center py-4 border-b border-gray-200">
                <Skeleton className="h-20 w-20 mr-4" />
                <div className="flex-grow">
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="text-right ml-4">
                  <Skeleton className="h-5 w-16 mb-2" />
                  <div className="flex items-center mt-2 justify-end">
                    <Skeleton className="h-8 w-8" />
                    <Skeleton className="mx-2 w-6 h-5" />
                    <Skeleton className="h-8 w-8" />
                  </div>
                </div>
                <Skeleton className="ml-4 h-5 w-5" />
              </div>
            ))}
          </div>
        </div>

        {/* Cart Summary Skeleton */}
        <div className="border rounded-lg p-6">
          <Skeleton className="h-6 w-32 mb-4" />

          <div className="space-y-2 mb-6">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>

          <Skeleton className="h-px w-full my-4" />

          <div className="mb-4">
            <div className="flex justify-between mb-2">
              <Skeleton className="h-5 w-16" />
              <Skeleton className="h-5 w-16" />
            </div>
            <div className="flex justify-between">
              <Skeleton className="h-6 w-12" />
              <Skeleton className="h-6 w-16" />
            </div>
          </div>

          <Skeleton className="h-12 w-full" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

