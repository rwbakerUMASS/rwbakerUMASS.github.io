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
        <div style={{
          backgroundImage: `url(${bg_img.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          overflowX: "hidden",
          height: "100vh",
          zIndex:"0"
        }}>
          <Navbar /> 
        </div>
          {children}
      </body>
    </html>
  )
}
