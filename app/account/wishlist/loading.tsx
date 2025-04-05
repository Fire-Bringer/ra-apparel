import { Skeleton } from "@/components/ui/skeleton"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"

export default function WishlistLoading() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Skeleton className="h-5 w-32 mb-6" />
        <Skeleton className="h-10 w-48 mb-8" />

        {/* Desktop Table View Skeleton */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b">
                <th className="text-left py-4 px-4">
                  <Skeleton className="h-5 w-5" />
                </th>
                <th className="text-left py-4 px-4"></th>
                <th className="text-left py-4 px-4">
                  <Skeleton className="h-5 w-16" />
                </th>
                <th className="text-left py-4 px-4">
                  <Skeleton className="h-5 w-16" />
                </th>
                <th className="text-right py-4 px-4">
                  <Skeleton className="h-5 w-16 ml-auto" />
                </th>
              </tr>
            </thead>
            <tbody>
              {[...Array(4)].map((_, i) => (
                <tr key={i} className="border-b">
                  <td className="py-4 px-4">
                    <Skeleton className="h-5 w-5" />
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center">
                      <Skeleton className="h-16 w-16 mr-4" />
                      <div>
                        <Skeleton className="h-5 w-32 mb-1" />
                        <Skeleton className="h-4 w-24" />
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <Skeleton className="h-5 w-20" />
                  </td>
                  <td className="py-4 px-4 text-right">
                    <Skeleton className="h-10 w-28 ml-auto" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View Skeleton */}
        <div className="md:hidden space-y-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white p-4 rounded-lg border relative">
              <Skeleton className="absolute top-2 right-2 h-5 w-5" />
              <div className="flex items-center mb-4">
                <Skeleton className="h-20 w-20 mr-4" />
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-24 mb-1" />
                  <Skeleton className="h-5 w-16" />
                </div>
              </div>
              <Skeleton className="h-10 w-full" />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

