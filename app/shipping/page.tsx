import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function ShippingPolicyPage() {
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
            <span className="font-medium">Shipping Policy</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Shipping Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Order Processing</h2>
              <p>
                All orders are processed within 1-2 business days (excluding weekends and holidays) after receiving your
                order confirmation email. You will receive another notification when your order has shipped.
              </p>
              <p>
                During high-volume periods such as holidays or special promotions, processing times may be slightly
                longer. We&apos;ll always communicate any expected delays via email.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Shipping Methods & Delivery Times</h2>
              <p>We offer several shipping options to meet your needs:</p>

              <h3 className="text-xl font-semibold mt-6 mb-3">Domestic Shipping (United States)</h3>
              <table className="min-w-full border-collapse mb-6">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Shipping Method</th>
                    <th className="text-left py-3 px-4">Estimated Delivery Time</th>
                    <th className="text-left py-3 px-4">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Standard Shipping</td>
                    <td className="py-3 px-4">5-7 business days</td>
                    <td className="py-3 px-4">
                      Free on orders over $100
                      <br />
                      $7.95 on orders under $100
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Express Shipping</td>
                    <td className="py-3 px-4">2-3 business days</td>
                    <td className="py-3 px-4">$15.95</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Next Day Shipping</td>
                    <td className="py-3 px-4">1 business day (if ordered before 12pm EST)</td>
                    <td className="py-3 px-4">$29.95</td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-semibold mt-6 mb-3">International Shipping</h3>
              <table className="min-w-full border-collapse mb-6">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Region</th>
                    <th className="text-left py-3 px-4">Estimated Delivery Time</th>
                    <th className="text-left py-3 px-4">Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-3 px-4">Canada</td>
                    <td className="py-3 px-4">7-10 business days</td>
                    <td className="py-3 px-4">$19.95</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Europe</td>
                    <td className="py-3 px-4">10-15 business days</td>
                    <td className="py-3 px-4">$24.95</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Australia/New Zealand</td>
                    <td className="py-3 px-4">14-21 business days</td>
                    <td className="py-3 px-4">$29.95</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 px-4">Rest of World</td>
                    <td className="py-3 px-4">14-30 business days</td>
                    <td className="py-3 px-4">$34.95</td>
                  </tr>
                </tbody>
              </table>

              <p className="text-sm italic">
                Note: International customers may be subject to customs fees, import duties, and taxes which are the
                responsibility of the recipient and are not included in the shipping cost.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Tracking Your Order</h2>
              <p>
                Once your order ships, you will receive a shipping confirmation email with a tracking number. You can
                track your package by:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Clicking the tracking link in your shipping confirmation email</li>
                <li>Logging into your account on our website and viewing your order history</li>
                <li>Contacting our customer service team with your order number</li>
              </ul>
              <p>
                Please allow 24-48 hours after receiving your shipping confirmation for tracking information to update
                in the carrier&apos;s system.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Shipping Restrictions</h2>
              <p>
                We currently do not ship to P.O. boxes or APO/FPO addresses. For certain international destinations,
                shipping may be unavailable due to import/export restrictions or other limitations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Lost or Damaged Packages</h2>
              <p>
                If your package appears to be lost or damaged during transit, please contact our customer service team
                within 7 days of the expected delivery date. We will work with the shipping carrier to resolve the issue
                and ensure you receive your order or are appropriately compensated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p>If you have any questions about our shipping policy, please contact our customer service team:</p>
              <p>
                Email: shipping@ra-apparel.com
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

