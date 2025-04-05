"use client"
import { useRouter } from "next/navigation"
import { CheckCircle } from "lucide-react"
import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "@/components/search-params-provider"

export default function OrderCompleteContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderNumber = searchParams.get("order") || "12345678"

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white p-8 rounded-lg border text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your purchase. Your order has been confirmed and will be shipped soon.
            </p>
            <div className="bg-gray-50 p-4 rounded-md mb-6">
              <p className="text-sm text-gray-700">
                Order Number: <span className="font-medium">{orderNumber}</span>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => router.push(`/account/orders/${orderNumber}`)}
                className="bg-black hover:bg-black/90"
              >
                View Order Details
              </Button>
              <Button variant="outline" onClick={() => router.push("/categories")} className="border-gray-300">
                Continue Shopping
              </Button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">What&apos;s Next?</h2>
            <div className="bg-white p-6 rounded-lg border">
              <ol className="space-y-4">
                <li className="flex">
                  <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    1
                  </div>
                  <div>
                    <p className="font-medium">Order Processing</p>
                    <p className="text-gray-600">Your order is being processed and prepared for shipping.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    2
                  </div>
                  <div>
                    <p className="font-medium">Shipping Confirmation</p>
                    <p className="text-gray-600">
                      You&apos;ll receive an email with tracking information once your order ships.
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-black text-white rounded-full h-6 w-6 flex items-center justify-center flex-shrink-0 mr-3">
                    3
                  </div>
                  <div>
                    <p className="font-medium">Delivery</p>
                    <p className="text-gray-600">Your order will be delivered to your shipping address.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

