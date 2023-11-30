import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Components/Header'
import Footer from './Components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'الزين تراڤل للرحلات و النقل السياحى',
  description: 'يمكنك حجز رحلتك الآن إلى جامعة الجلالة بكل سهولة من خلال موقع الزين تراڤل للرحلات والنقل السياحى',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir='rtl'>
      <body className={inter.className }>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
