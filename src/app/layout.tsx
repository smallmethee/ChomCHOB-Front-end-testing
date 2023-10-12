import Navbar from '@/components/app-bar/navbar'
import FooterLayout from '@/components/footer/footer-layout'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '../../src/components/providers/Providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pokemon',
  description: 'pokemon list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr">
      <Providers>
        <body className={inter.className}>
          <Navbar />
          {children}
          <FooterLayout />
        </body>
      </Providers>
    </html>
  )
}
