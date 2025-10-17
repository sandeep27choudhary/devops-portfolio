import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import YoutubePopup from "@/components/youtube-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DuhOps World",
  description: "Cloud Infrastructure & DevOps Engineer specializing in AWS, Kubernetes, and CI/CD automation",
  generator: 'v0.dev',
  icons: {
    icon: '/duhops-logo.jpg',
    shortcut: '/duhops-logo.jpg',
    apple: '/duhops-logo.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <YoutubePopup />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'
