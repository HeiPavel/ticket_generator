import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import './globals.css'

const iconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

export const metadata: Metadata = {
  title: 'Ticket generator',
  description: 'Generate event tickets'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${iconsolata.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}