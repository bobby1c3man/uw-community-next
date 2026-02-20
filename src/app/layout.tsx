import type { Metadata } from 'next'
import './globals.css'
import { nyghtSerif } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'U·woman — Cultural Cooperation Community',
  description: 'The Cultural Cooperation Community brings together artists, cultural professionals and institutions. Platform for woman artists.',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={nyghtSerif.variable} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
