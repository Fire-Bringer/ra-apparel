import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"

export default function SignUpLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow flex flex-col md:flex-row min-h-[calc(100vh-8rem)]">
        {/* Left Image Skeleton - Hidden on mobile */}
        <div className="hidden md:block w-1/2 bg-gray-200"></div>

        {/* Mobile Image Skeleton - Only visible on mobile */}
        <div className="md:hidden w-full">
          <div className="h-[50vh] w-full bg-gray-200"></div>
        </div>

        {/* Form Section Skeleton */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <Skeleton className="h-10 w-32 mb-2" />
            <Skeleton className="h-5 w-64 mb-8" />

            <div className="space-y-4">
              <div>
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-12 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-12 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-32 mb-1" />
                <Skeleton className="h-12 w-full" />
              </div>

              <div>
                <Skeleton className="h-5 w-24 mb-1" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-4 w-full mt-1" />
              </div>

              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

