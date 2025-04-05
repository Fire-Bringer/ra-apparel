import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function ContactLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>

      <main className="flex-grow">
        {/* Header Skeleton */}
        <div className="bg-gray-900 py-16">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto" />
          </div>
        </div>

        {/* Contact Information Skeleton */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details Skeleton */}
              <div>
                <Skeleton className="h-8 w-48 mb-8" />

                <div className="space-y-6">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex items-start">
                      <Skeleton className="h-6 w-6 mr-4 flex-shrink-0" />
                      <div className="flex-1">
                        <Skeleton className="h-5 w-32 mb-2" />
                        <Skeleton className="h-4 w-full mb-1" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media Skeleton */}
                <div className="mt-10">
                  <Skeleton className="h-5 w-24 mb-4" />
                  <div className="flex space-x-4">
                    {[...Array(3)].map((_, i) => (
                      <Skeleton key={i} className="h-10 w-10 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form Skeleton */}
              <div>
                <Skeleton className="h-8 w-48 mb-8" />
                <div className="bg-white rounded-lg border p-6">
                  <div className="space-y-4">
                    {[...Array(4)].map((_, i) => (
                      <div key={i}>
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-12 w-full" />
                      </div>
                    ))}
                    <Skeleton className="h-12 w-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section Skeleton */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <Skeleton className="h-8 w-48 mx-auto mb-8" />
            <Skeleton className="h-96 w-full rounded-lg" />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

