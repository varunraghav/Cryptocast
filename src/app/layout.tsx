import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { CoinSelector } from "@/components/header/coin-selector"
import { ThemeToggle } from "@/components/header/theme-toggle"
import { CoinProvider } from "@/lib/context/coin-context"

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Cryptocast',
  description: 'Real-time crypto sentiment analysis',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <CoinProvider>
              <div className="min-h-screen bg-background">
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                  <div className="flex h-14 items-center px-2 md:px-4 lg:px-6 justify-between">
                    <div className="flex items-center">
                      <a className="mr-6 flex items-center space-x-2" href="/">
                        <span className="font-bold text-lg md:text-xl">Cryptocast</span>
                      </a>
                      <SignedIn>
                        <CoinSelector />
                      </SignedIn>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <ThemeToggle />
                      <SignedOut>
                        <SignInButton mode="modal">
                          <button className="rounded-md border px-3 py-1 text-sm">
                            Sign In
                          </button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                          <button className="ml-2 rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">
                            Sign Up
                          </button>
                        </SignUpButton>
                      </SignedOut>
                      <SignedIn>
                        <UserButton afterSignOutUrl="/" />
                      </SignedIn>
                    </div>
                  </div>
                </header>
                <main className="w-full px-0 md:px-1 lg:px-2">
                  {children}
                </main>
              </div>
              <Toaster />
            </CoinProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
