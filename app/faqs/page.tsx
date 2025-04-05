"use client"

import type React from "react"
import Link from "next/link"
import { Suspense } from "react"
import { ClientOnly } from "@/components/with-client-only"
import FAQsContent from "./faqs-content"

// FAQ data structure
interface FAQ {
  id: string
  question: string
  answer: React.ReactNode
  category: string
}

// FAQ categories
const categories = [
  { id: "general", name: "General" },
  { id: "orders", name: "Orders & Shipping" },
  { id: "returns", name: "Returns & Refunds" },
  { id: "products", name: "Products & Sizing" },
  { id: "account", name: "Account & Payment" },
]

// FAQ data
const faqs: FAQ[] = [
  {
    id: "general-1",
    question: "What is R.A. Apparel?",
    answer: (
      <p>
        R.A. Apparel is a premium streetwear brand focused on delivering high-quality, stylish clothing that combines
        urban aesthetics with comfort and durability. Our collections include hoodies, t-shirts, tracksuits, and
        accessories designed for those who appreciate authentic street culture.
      </p>
    ),
    category: "general",
  },
  {
    id: "general-2",
    question: "Where are your products made?",
    answer: (
      <p>
        Our products are designed in Sacramento, California, and manufactured in carefully selected facilities in the
        United States and internationally. We prioritize ethical manufacturing practices and quality control at every
        step of the production process.
      </p>
    ),
    category: "general",
  },
  {
    id: "general-3",
    question: "Do you have a physical store?",
    answer: (
      <p>
        Yes, we have a flagship store located at 1234 Capitol Avenue, Downtown District, Sacramento, CA 95814. Our store
        hours are Monday-Friday: 10:00 AM - 7:00 PM, Saturday: 11:00 AM - 6:00 PM, and we&apos;re closed on Sundays.
      </p>
    ),
    category: "general",
  },
  {
    id: "orders-1",
    question: "How can I track my order?",
    answer: (
      <div>
        <p>You can track your order in two ways:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Log into your account and view your order history</li>
          <li>Click the tracking link in your shipping confirmation email</li>
        </ol>
        <p className="mt-2">
          Please note that tracking information may take 24-48 hours to update after you receive your shipping
          confirmation.
        </p>
      </div>
    ),
    category: "orders",
  },
  {
    id: "orders-2",
    question: "How long will it take to receive my order?",
    answer: (
      <div>
        <p>Delivery times depend on your location and chosen shipping method:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Standard Shipping (US): 5-7 business days</li>
          <li>Express Shipping (US): 2-3 business days</li>
          <li>Next Day Shipping (US): 1 business day (if ordered before 12pm EST)</li>
          <li>International Shipping: 7-30 business days depending on destination</li>
        </ul>
        <p className="mt-2">
          Please note that these are estimates and delivery times may vary, especially during peak seasons or due to
          unforeseen circumstances.
        </p>
      </div>
    ),
    category: "orders",
  },
  {
    id: "orders-3",
    question: "Do you ship internationally?",
    answer: (
      <p>
        Yes, we ship to most countries worldwide. International shipping rates and delivery times vary by destination.
        Please note that international customers may be responsible for customs fees, import duties, and taxes which are
        not included in the shipping cost.
      </p>
    ),
    category: "orders",
  },
  {
    id: "orders-4",
    question: "Can I change or cancel my order after it&apos;s been placed?",
    answer: (
      <p>
        We process orders quickly to ensure fast shipping. If you need to change or cancel your order, please contact
        our customer service team immediately. We can usually accommodate changes or cancellations if the order
        hasn&apos;t been processed yet, typically within 1-2 hours of placing your order. Once an order has been
        processed or shipped, we cannot cancel it, but you can return it according to our return policy.
      </p>
    ),
    category: "orders",
  },
  {
    id: "returns-1",
    question: "What is your return policy?",
    answer: (
      <div>
        <p>
          We accept returns within 30 days of delivery. Items must be unworn, unwashed, and with original tags attached.
          For detailed information, please visit our{" "}
          <Link href="/returns" className="text-black underline">
            Return & Refund Policy
          </Link>{" "}
          page.
        </p>
        <p className="mt-2">Quick summary of our return policy:</p>
        <ul className="list-disc pl-6 mt-1">
          <li>30-day return window from delivery date</li>
          <li>Items must be in original condition with tags</li>
          <li>Free returns for orders over $100 (US customers only)</li>
          <li>Sale items eligible for store credit only</li>
        </ul>
      </div>
    ),
    category: "returns",
  },
  {
    id: "returns-2",
    question: "How do I start a return?",
    answer: (
      <div>
        <p>To initiate a return:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Log into your account and go to your order history</li>
          <li>Select the order and items you wish to return</li>
          <li>Follow the prompts to generate a return label</li>
          <li>Package your items securely with the return form</li>
          <li>Drop off the package at the designated shipping carrier</li>
        </ol>
        <p className="mt-2">
          If you checked out as a guest, you can use our{" "}
          <Link href="/support" className="text-black underline">
            return portal
          </Link>{" "}
          with your order number and email address.
        </p>
      </div>
    ),
    category: "returns",
  },
  {
    id: "returns-3",
    question: "How long does it take to process a refund?",
    answer: (
      <p>
        Once we receive your return, our team will inspect the item(s) within 1-3 business days. After approval, refunds
        are processed to your original payment method. Credit/debit card refunds typically take 5-10 business days to
        appear on your statement, PayPal refunds take 2-3 business days, and store credit is available immediately.
      </p>
    ),
    category: "returns",
  },
  {
    id: "products-1",
    question: "How do your sizes run?",
    answer: (
      <div>
        <p>
          Our sizing is generally true to standard US sizing, but we recommend checking the specific size chart on each
          product page for the most accurate measurements. If you&apos;re between sizes, we typically recommend sizing
          up for a more relaxed fit or sizing down for a more fitted look.
        </p>
        <p className="mt-2">
          For detailed measurements and fit guidance, please refer to the size guide on each product page or contact our
          customer service team for assistance.
        </p>
      </div>
    ),
    category: "products",
  },
  {
    id: "products-2",
    question: "What materials do you use in your clothing?",
    answer: (
      <p>
        We use a variety of high-quality materials in our products, including premium cotton, cotton-polyester blends,
        and performance fabrics. Each product page lists the specific materials used. We prioritize comfort, durability,
        and sustainability in our material selection, and many of our newer collections feature organic or recycled
        materials.
      </p>
    ),
    category: "products",
  },
  {
    id: "products-3",
    question: "How should I care for my R.A. Apparel items?",
    answer: (
      <div>
        <p>
          To ensure the longevity of your R.A. Apparel items, we recommend following the care instructions on the
          garment tag. Generally, we suggest:
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Machine wash cold with similar colors</li>
          <li>Use mild detergent</li>
          <li>Avoid bleach and fabric softeners</li>
          <li>Tumble dry low or lay flat to dry</li>
          <li>Iron on low heat if needed (avoid printing/graphics)</li>
        </ul>
        <p className="mt-2">Proper care will help maintain the quality, fit, and appearance of your items.</p>
      </div>
    ),
    category: "products",
  },
  {
    id: "account-1",
    question: "How do I create an account?",
    answer: (
      <div>
        <p>Creating an account is easy:</p>
        <ol className="list-decimal pl-6 mt-2">
          <li>Click on the account icon in the top right corner of our website</li>
          <li>Select &quot;Sign Up&quot;</li>
          <li>Enter your email address and create a password</li>
          <li>Fill in your personal information</li>
          <li>Click &quot;Create Account&quot;</li>
        </ol>
        <p className="mt-2">You can also create an account during the checkout process.</p>
      </div>
    ),
    category: "account",
  },
  {
    id: "account-2",
    question: "What payment methods do you accept?",
    answer: (
      <div>
        <p>We accept the following payment methods:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Credit/Debit Cards (Visa, Mastercard, American Express, Discover)</li>
          <li>PayPal</li>
          <li>Apple Pay</li>
          <li>Google Pay</li>
          <li>Shop Pay</li>
          <li>Afterpay/Klarna (buy now, pay later)</li>
        </ul>
        <p className="mt-2">All transactions are secure and encrypted for your protection.</p>
      </div>
    ),
    category: "account",
  },
  {
    id: "account-3",
    question: "I forgot my password. How do I reset it?",
    answer: (
      <ol className="list-decimal pl-6">
        <li>Click on the account icon in the top right corner</li>
        <li>Select &quot;Sign In&quot;</li>
        <li>Click on &quot;Forgot Password?&quot;</li>
        <li>Enter your email address</li>
        <li>Check your email for a password reset link</li>
        <li>Follow the link to create a new password</li>
      </ol>
    ),
    category: "account",
  },
]

export default function FAQsPage() {
  return (
    <Suspense fallback={<div>Loading FAQs...</div>}>
      <ClientOnly>
        <FAQsContent />
      </ClientOnly>
    </Suspense>
  )
}

