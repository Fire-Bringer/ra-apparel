import Navbar from "@/components/navbar"
import NavbarSpacer from "@/components/navbar-spacer"
import Footer from "@/components/footer"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function TermsOfUsePage() {
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
            <span className="font-medium">Terms of Use</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>

          <div className="prose max-w-none">
            <p className="text-gray-600 mb-8">Last Updated: April 5, 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p>
                Welcome to R.A. Apparel. These Terms of Use (&quot;Terms&quot;) govern your use of our website located at
                www.ra-apparel.com (the &quot;Site&quot;) and all related services, features, content, and applications offered by
                R.A. Apparel (collectively, the &quot;Services&quot;).
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms. If you do not agree to these
                Terms, you may not access or use the Services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Changes to Terms</h2>
              <p>
                We may revise these Terms at any time by updating this page. All changes are effective immediately when
                we post them and apply to all access to and use of the Site thereafter. Your continued use of the Site
                following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Account Registration</h2>
              <p>
                To access certain features of the Site, you may be required to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your password and for all activities that occur under your account.
                You agree to notify us immediately of any unauthorized use of your account.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Products and Purchases</h2>
              <p>
                All products displayed on our Site are subject to availability. We reserve the right to discontinue any
                product at any time.
              </p>
              <p>
                Prices for our products are subject to change without notice. We reserve the right to modify or
                discontinue the Services (or any part or content thereof) without notice at any time.
              </p>
              <p>
                We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or
                cancel quantities purchased per person, per household, or per order.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
              <p>
                We will make every effort to ship products within the timeframe specified on our Site. However, shipping
                times are estimates and not guaranteed. We are not responsible for delays that are beyond our control.
              </p>
              <p>
                Risk of loss and title for items purchased from our Site pass to you upon delivery of the items to the
                carrier.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
              <p>
                Our return and refund policy is outlined separately on our Site. By making a purchase, you agree to be
                bound by our return and refund policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Intellectual Property Rights</h2>
              <p>
                The Site and its entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof), are owned by R.A. Apparel, its licensors, or other providers of such material and
                are protected by United States and international copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </p>
              <p>
                These Terms permit you to use the Site for your personal, non-commercial use only. You must not
                reproduce, distribute, modify, create derivative works of, publicly display, publicly perform,
                republish, download, store, or transmit any of the material on our Site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Prohibited Uses</h2>
              <p>
                You may use the Site only for lawful purposes and in accordance with these Terms. You agree not to use
                the Site:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  In any way that violates any applicable federal, state, local, or international law or regulation.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk
                  mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.
                </li>
                <li>
                  To impersonate or attempt to impersonate R.A. Apparel, a R.A. Apparel employee, another user, or any
                  other person or entity.
                </li>
                <li>
                  To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Site, or
                  which, as determined by us, may harm R.A. Apparel or users of the Site or expose them to liability.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">9. Limitation of Liability</h2>
              <p>
                In no event will R.A. Apparel, its affiliates, or their licensors, service providers, employees, agents,
                officers, or directors be liable for damages of any kind, under any legal theory, arising out of or in
                connection with your use, or inability to use, the Site, any websites linked to it, any content on the
                Site or such other websites, including any direct, indirect, special, incidental, consequential, or
                punitive damages, including but not limited to, personal injury, pain and suffering, emotional distress,
                loss of revenue, loss of profits, loss of business or anticipated savings, loss of use, loss of
                goodwill, loss of data, and whether caused by tort (including negligence), breach of contract, or
                otherwise, even if foreseeable.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
              <p>
                These Terms and any dispute or claim arising out of or in connection with them or their subject matter
                or formation (including non-contractual disputes or claims) shall be governed by and construed in
                accordance with the laws of the State of California, without giving effect to any choice or conflict of
                law provision or rule.
              </p>
              <p>
                Any legal suit, action, or proceeding arising out of, or related to, these Terms or the Site shall be
                instituted exclusively in the federal courts of the United States or the courts of the State of
                California, in each case located in Sacramento County, although we retain the right to bring any suit,
                action, or proceeding against you for breach of these Terms in your country of residence or any other
                relevant country.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">11. Contact Information</h2>
              <p>Questions or comments about the Site or these Terms may be directed to us at:</p>
              <p>
                Email: legal@ra-apparel.com
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

