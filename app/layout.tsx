import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { Background } from './components/Background'
import { Header } from './components/Header'
import './globals.css'

const iconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800']
})

export const metadata: Metadata = {
  title: 'Ticket generator',
  description: 'Generate event tickets'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${iconsolata.className} antialiased min-h-screen relative`}>
        <Background/>
        <Header/>
        <main className='relative z-10 px-4 flex flex-col items-center'>
          {children}
        </main>
      </body>
    </html>
  )
}