import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight, Mail, Phone, MessageSquare, Clock, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"

export default function SupportPage() {
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
            <span className="font-medium">Support</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Customer Support</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Call Us</h2>
              </div>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <p className="font-medium">916-555-7890</p>
              <p className="text-sm text-gray-500 mb-4">Monday-Friday: 9am-5pm PST</p>
              <Button className="w-full bg-black hover:bg-black/90">
                <a href="tel:9165557890">Call Now</a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Email Us</h2>
              </div>
              <p className="text-gray-600 mb-4">Send us a message anytime</p>
              <p className="font-medium">support@ra-apparel.com</p>
              <p className="text-sm text-gray-500 mb-4">Response within 24 hours</p>
              <Button className="w-full bg-black hover:bg-black/90">
                <a href="mailto:support@ra-apparel.com">Email Now</a>
              </Button>
            </div>

            <div className="bg-white p-6 rounded-lg border shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-black rounded-full p-3 mr-4">
                  <MessageSquare className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-xl font-bold">Live Chat</h2>
              </div>
              <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
              <p className="font-medium">Available on website</p>
              <p className="text-sm text-gray-500 mb-4">Monday-Friday: 9am-7pm PST</p>
              <Button className="w-full bg-black hover:bg-black/90">Start Chat</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Common Support Topics</h2>

              <div className="space-y-4">
                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/faqs#orders" className="flex justify-between items-center">
                    <span className="font-medium">Order Status & Tracking</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/returns" className="flex justify-between items-center">
                    <span className="font-medium">Returns & Exchanges</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/shipping" className="flex justify-between items-center">
                    <span className="font-medium">Shipping Information</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/faqs#products" className="flex justify-between items-center">
                    <span className="font-medium">Product Information</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/faqs#account" className="flex justify-between items-center">
                    <span className="font-medium">Account Management</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>

                <div className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Link href="/faqs#payment" className="flex justify-between items-center">
                    <span className="font-medium">Payment Issues</span>
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <Link href="/faqs" className="text-black font-medium hover:underline">
                  View all FAQs →
                </Link>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Form</h2>
              <ContactForm />
            </div>
          </div>

          <div className="bg-gray-100 p-8 rounded-lg">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 mr-3 text-black" />
              <h2 className="text-2xl font-bold">Support Hours</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Phone & Live Chat Support</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 7:00 PM PST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM PST</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Email Support</h3>
                <p className="mb-2">Available 24/7</p>
                <p className="text-sm text-gray-600">
                  Emails received outside of business hours will be responded to on the next business day.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-300">
              <div className="flex items-center mb-3">
                <FileText className="h-5 w-5 mr-2 text-black" />
                <h3 className="font-semibold">Holiday Schedule</h3>
              </div>
              <p className="text-sm text-gray-600">
                Our support team observes major US holidays. During these times, support availability may be limited.
                Please check our website or social media channels for specific holiday hours.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

