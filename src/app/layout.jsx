import { Inter } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: {
    template: '%s - Cloud Drip',
    default: 'Cloud Drip - Vape Vending Solutions for Bars & Nightlife Venues',
  },
  description:
    "Boost Your Bar's Revenue with Cloud Drip vape vending machines. No hassle, no upfront costs. We install, stock, and maintain - you earn money from every sale.",
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx('scroll-smooth bg-gray-50 antialiased', inter.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
