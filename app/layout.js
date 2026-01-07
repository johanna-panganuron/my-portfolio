import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'Johanna Panganuron - Portfolio',
  description: 'Full-stack developer portfolio showcasing web development projects and technical skills.',
  keywords: 'React, Next.js, Node.js, PHP, Laravel, MySQL, Web Development',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}