import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-elsayed-portfolio.vercel.app'),
  title: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
  description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies. Building scalable e-commerce and mobile applications.',
  keywords: 'backend engineer, Laravel, PHP, software development, e-commerce, API design, microservices',
  authors: [{ name: 'Ahmed Elsayed' }],
  openGraph: {
    title: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
    description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
    description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}