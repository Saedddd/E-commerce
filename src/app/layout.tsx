
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReduxProvider } from '@/shared/lib/redux/provider'
import { Header } from '@/widgets/header'
import { Footer } from '@/widgets/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ecommorce',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ReduxProvider>
            <Header/>
            <main className='flex flex-col min-h-screen'> {children}</main>
            <Footer/>
          </ReduxProvider>
        </body>
    </html>
  )
}
