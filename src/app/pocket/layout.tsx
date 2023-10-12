import { cn } from '@/utils'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { PropsWithChildren } from 'react'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pocket',
}

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-gray">
      <div
        className={cn(
          'mx-auto min-h-screen app-container px-4',
          inter.className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export default RootLayout
