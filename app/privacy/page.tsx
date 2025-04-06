import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function PrivacyPolicyPage() {
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
            <span className="font-medium">Privacy Policy</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                R.A. Apparel (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal
                data. This privacy policy will inform you about how we look after your personal data when you visit our
                website and tell you about your privacy rights and how the law protects you.
              </p>
              <p>
                This privacy policy applies to personal data we collect when you visit our website, purchase products,
                create an account, sign up for our newsletter, or otherwise interact with us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p>
                We may collect, use, store, and transfer different kinds of personal data about you, which we have
                grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Identity Data</strong> includes first name, last name, username or similar identifier.
                </li>
                <li>
                  <strong>Contact Data</strong> includes billing address, delivery address, email address, and telephone
                  numbers.
                </li>
                <li>
                  <strong>Financial Data</strong> includes payment card details.
                </li>
                <li>
                  <strong>Transaction Data</strong> includes details about payments to and from you and other details of
                  products you have purchased from us.
                </li>
                <li>
                  <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type
                  and version, time zone setting and location, browser plug-in types and versions, operating system and
                  platform, and other technology on the devices you use to access this website.
                </li>
                <li>
                  <strong>Profile Data</strong> includes your username and password, purchases or orders made by you,
                  your preferences, feedback, and survey responses.
                </li>
                <li>
                  <strong>Usage Data</strong> includes information about how you use our website and products.
                </li>
                <li>
                  <strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing
                  from us and our third parties and your communication preferences.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal
                data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>
                  Where it is necessary for our legitimate interests (or those of a third party) and your interests and
                  fundamental rights do not override those interests.
                </li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
              <p>
                Generally, we do not rely on consent as a legal basis for processing your personal data although we will
                get your consent before sending third party direct marketing communications to you via email or text
                message. You have the right to withdraw consent to marketing at any time by contacting us.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally
                lost, used, or accessed in an unauthorized way, altered, or disclosed. In addition, we limit access to
                your personal data to those employees, agents, contractors, and other third parties who have a business
                need to know. They will only process your personal data on our instructions, and they are subject to a
                duty of confidentiality.
              </p>
              <p>
                We have put in place procedures to deal with any suspected personal data breach and will notify you and
                any applicable regulator of a breach where we are legally required to do so.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal
                data, including the right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data.</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Right to withdraw consent.</li>
              </ul>
              <p>If you wish to exercise any of the rights set out above, please contact us.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
              <p>
                Email: privacy@ra-apparel.com
                <br />
                Postal address: 1234 Capitol Avenue, Downtown District, Sacramento, CA 95814
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

