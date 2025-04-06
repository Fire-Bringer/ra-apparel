import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ReturnsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm mb-8">
            <Link href="/" className="text-gray-500 hover:text-black">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            <span className="font-medium">Return & Refund Policy</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Return & Refund Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Return Policy Overview</h2>
              <p>
                We want you to be completely satisfied with your purchase. If you&apos;re not entirely happy with your order,
                we&apos;re here to help.
              </p>
              <div className="bg-gray-100 p-6 rounded-lg my-6">
                <h3 className="text-xl font-semibold mb-3">Quick Summary</h3>
                <ul className="list-disc pl-6 mb-0">
                  <li>Returns accepted within 30 days of delivery</li>
                  <li>Items must be unworn, unwashed, and with original tags attached</li>
                  <li>Free returns for orders over $100 (US customers only)</li>
                  <li>Exchanges available for size/color changes</li>
                  <li>Sale items and custom orders have limited return eligibility</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Return Eligibility</h2>
              <p>To be eligible for a return, your item must meet the following conditions:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>The return is initiated within 30 days of delivery</li>
                <li>The item is in its original condition: unworn, unwashed, and undamaged</li>
                <li>All original tags and packaging are intact</li>
                <li>You have proof of purchase (order number, receipt, or order confirmation email)</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Items Not Eligible for Return</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Items marked as &quot;Final Sale&quot; or &quot;Non-Returnable&quot;</li>
                <li>Custom or personalized items</li>
                <li>Intimates, swimwear, and face masks (for hygiene reasons)</li>
                <li>Items that show signs of wear, washing, or alteration</li>
                <li>Gift cards</li>
              </ul>

              <h3 className="text-xl font-semibold mt-6 mb-3">Sale Items</h3>
              <p>Items purchased on sale may be returned for store credit only, unless otherwise required by law.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">How to Initiate a Return</h2>
              <ol className="list-decimal pl-6 mb-4">
                <li className="mb-2">
                  <strong>Start your return online:</strong> Log into your account and navigate to your order history,
                  or use our{" "}
                  <Link href="/support" className="text-black underline">
                    return portal
                  </Link>{" "}
                  if you checked out as a guest.
                </li>
                <li className="mb-2">
                  <strong>Select the items you wish to return:</strong> Indicate the reason for your return and whether
                  you prefer a refund or exchange.
                </li>
                <li className="mb-2">
                  <strong>Print your return label:</strong> For US customers, a prepaid return label will be provided (a
                  $7.95 fee will be deducted from your refund for orders under $100).
                </li>
                <li className="mb-2">
                  <strong>Package your return:</strong> Place the items in their original packaging if possible, or use
                  a secure box or mailer. Include the return form inside the package.
                </li>
                <li className="mb-2">
                  <strong>Ship your return:</strong> Drop off your package at the designated carrier location.
                </li>
              </ol>

              <div className="flex justify-center my-8">
                <Button className="bg-black hover:bg-black/90 text-white">
                  <Link href="/support">Start Your Return</Link>
                </Button>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Refund Process</h2>
              <p>
                Once we receive your return, our team will inspect the item(s) to ensure they meet our return policy
                requirements. The inspection process typically takes 1-3 business days.
              </p>
              <p>
                After approval, your refund will be processed to the original payment method used for the purchase.
                Please allow:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Credit/Debit Cards: 5-10 business days for the refund to appear on your statement</li>
                <li>PayPal: 2-3 business days</li>
                <li>Store Credit: Immediately available in your account</li>
              </ul>
              <p>You will receive an email notification when your refund has been processed.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Exchanges</h2>
              <p>
                If you&apos;d like to exchange an item for a different size or color, please select &quot;Exchange&quot; when
                initiating your return. If the item you want is in stock, we&apos;ll ship it to you once we receive your
                return. If the exchange item costs more than your original purchase, you&apos;ll be prompted to pay the
                difference.
              </p>
              <p>
                For faster service, we recommend placing a new order for the desired item and returning the original
                purchase for a refund.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Damaged or Incorrect Items</h2>
              <p>
                If you receive a damaged or incorrect item, please contact our customer service team within 7 days of
                delivery. Please provide:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Your order number</li>
                <li>Description of the issue</li>
                <li>Photos of the damaged item or packaging (if applicable)</li>
              </ul>
              <p>We&apos;ll work quickly to resolve the issue by offering a replacement, exchange, or refund.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">International Returns</h2>
              <p>
                International customers are responsible for return shipping costs and any customs fees associated with
                returning items. Please contact our customer service team for specific instructions before sending your
                return.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>
                If you have any questions about our return and refund policy, please contact our customer service team:
              </p>
              <p>
                Email: returns@ra-apparel.com
                <br />
                Phone: 916-555-7890
                <br />
                Hours: Monday-Friday, 9am-5pm PST
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
