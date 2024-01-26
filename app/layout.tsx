import Navbar from './components/navigation/navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import bg_img from '../public/img/CS-Building2.jpg'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ryan Baker',
  description: 'My Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}> 
          {children}
      </body>
    </html>
  )
}
