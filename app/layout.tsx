import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import CookieConsent from '@/components/CookieConsent'
import Providers from './providers'
import { ClerkProvider } from '@clerk/nextjs'
import LayoutWrapper from '@/components/LayoutWrapper'



const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Universal Greening Organisation',
  description: 'Empowering a society that strives to lead an environmentally conscious life',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.className}>
          <Providers>
            <LayoutWrapper>
              {children}
            </LayoutWrapper>
            <Analytics />
            <CookieConsent />
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
