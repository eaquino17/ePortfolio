import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import ParticleBackground from "@/components/particle-background"
import { ParallaxProvider } from "@/components/parallax-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Eric Bernard Aquino - Portfolio",
  description: "Computer Science Student | Data Science & Analytics",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ParallaxProvider>
            <ParticleBackground />
            {children}
          </ParallaxProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
