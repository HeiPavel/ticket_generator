import type { Metadata } from 'next'
import { Inconsolata } from 'next/font/google'
import { Background } from './components/Background'
import { Header } from './components/Header'
import { FormData } from './components/FormData'
import './globals.css'

const iconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800']
})

export const metadata: Metadata = {
  metadataBase: process.env.VERCEL_ENV === 'production' ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) : process.env.VERCEL_ENV === 'preview' ? new URL(`https://${process.env.VERCEL_BRANCH_URL}`) : new URL('http://localhost:3000'),
  title: 'Ticket generator',
  description: 'Create a personalized event ticket instantly after filling out a simple form.',
  twitter: {
    card: 'summary_large_image'
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${iconsolata.className} antialiased min-h-screen relative flex flex-col`}>
        <Background/>
        <Header/>
        <main className='px-4 pb-36 grow relative z-10 flex flex-col items-center'>
          <FormData>
            {children}
          </FormData>
        </main>
      </body>
    </html>
  )
}