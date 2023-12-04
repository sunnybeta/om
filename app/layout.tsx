import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Om',
  description: 'Find Your Aartis Quickly',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
