import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function SupportLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-10 w-64 mb-8" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-64 rounded-lg" />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <div className="space-y-4">
                {[...Array(6)].map((_, i) => (
                  <Skeleton key={i} className="h-14 w-full rounded-lg" />
                ))}
              </div>
              <Skeleton className="h-6 w-32 mt-8" />
            </div>

            <div>
              <Skeleton className="h-8 w-48 mb-6" />
              <Skeleton className="h-96 w-full rounded-lg" />
            </div>
          </div>

          <Skeleton className="h-64 w-full rounded-lg" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

