import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { Suspense } from "react"
import { SearchParamsProvider } from "@/components/client-search-params"
import { NavigationEvents } from "@/components/navigation-events"
import { ProgressBar } from "@/components/progress-bar"
import { ToastProvider } from "@/components/ui/toast"
import { NavigationLoader } from "@/components/navigation-loader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "R.A. Apparel - Premium Streetwear",
  description: "Shop the latest streetwear trends at R.A. Apparel. Premium quality hoodies, t-shirts, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <CartProvider>
              <ToastProvider>
                {/* Progress bar for navigation feedback */}
                <ProgressBar />
                {/* Navigation loader will show loading UI during navigation */}
                <NavigationLoader />
                <Suspense fallback={null}>
                  <SearchParamsProvider>{children}</SearchParamsProvider>
                  {/* Navigation events to track route changes */}
                  <NavigationEvents />
                </Suspense>
              </ToastProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

