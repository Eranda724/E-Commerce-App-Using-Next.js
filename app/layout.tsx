import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import { Poppins as FontSans } from 'next/font/google'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'My App',
  description: 'This is my app description',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <div className="container mx-auto px-4 py-8">{children}</div>
      </body>
    </html>
  )
}
