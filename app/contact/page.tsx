import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, Phone, MapPin, Clock, Instagram, Facebook, Youtube } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div id="navbar-spacer" className="h-0 w-full transition-all duration-300"></div>
      <NavbarSpacer />

      <main className="flex-grow">
        {/* Header */}
        <div className="bg-black text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Have questions about our products or need assistance? We&apos;re here to help.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 mr-4 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Store Location</h3>
                      <p className="text-gray-600">1234 Capitol Avenue,</p>
                      <p className="text-gray-600">Downtown District</p>
                      <p className="text-gray-600">Sacramento, CA 95814</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-6 w-6 mr-4 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-gray-600">916-555-7890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-6 w-6 mr-4 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-600">info@ra-apparel.com</p>
                      <p className="text-gray-600">support@ra-apparel.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="h-6 w-6 mr-4 text-black flex-shrink-0" />
                    <div>
                      <h3 className="font-medium mb-1">Business Hours</h3>
                      <p className="text-gray-600">Monday - Friday: 10:00 AM - 7:00 PM</p>
                      <p className="text-gray-600">Saturday: 11:00 AM - 6:00 PM</p>
                      <p className="text-gray-600">Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="font-medium mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="https://instagram.com/get_money_network"
                      className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link
                      href="https://facebook.com/getmoneynetwork"
                      className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link
                      href="https://youtube.com/getmoneynetwork"
                      className="h-10 w-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      <Youtube className="h-5 w-5" />
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-8">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Location</h2>
            <div className="h-96 rounded-lg overflow-hidden relative">
              <Image src="/map.webp" alt="Map showing our store location" fill className="object-cover" />
              <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-md text-sm">Our Store</div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
