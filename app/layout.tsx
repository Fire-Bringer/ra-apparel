import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { CartProvider } from "@/contexts/cart-context"
import { AuthProvider } from "@/contexts/auth-context"
import { ToastProvider } from "@/components/ui/toast"
import { NavigationLoader } from "@/components/navigation-loader"
import { NavigationEvents } from "@/components/navigation-events"
import { ProgressBar } from "@/components/progress-bar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
                {/* Navigation events to track route changes */}
                <NavigationEvents />
                {children}
              </ToastProvider>
            </CartProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

