import { Skeleton } from "@/components/ui/skeleton"
import NavbarSkeleton from "@/components/navbar-skeleton"
import Footer from "@/components/footer"

export default function PrivacyPolicyLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSkeleton />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <Skeleton className="h-4 w-32 mb-8" />
          <Skeleton className="h-10 w-64 mb-8" />
          <Skeleton className="h-4 w-full mb-4" />

          {[...Array(6)].map((_, i) => (
            <div key={i} className="mb-8">
              <Skeleton className="h-8 w-48 mb-4" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />

              <div className="pl-6 mb-4">
                {[...Array(4)].map((_, j) => (
                  <Skeleton key={j} className="h-4 w-full mb-2" />
                ))}
              </div>

              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-5/6 mb-2" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

