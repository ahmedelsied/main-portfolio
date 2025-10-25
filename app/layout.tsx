import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/contexts/ThemeContext'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmed-elsayed-portfolio.vercel.app'),
  title: {
    default: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
    template: '%s | Ahmed Elsayed'
  },
  description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies. Building scalable e-commerce and mobile applications with clean code and domain-driven design.',
  keywords: [
    'backend engineer',
    'Laravel developer',
    'PHP developer',
    'software development',
    'e-commerce development',
    'API design',
    'microservices',
    'domain-driven design',
    'MySQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Redis',
    'GraphQL',
    'REST APIs'
  ],
  authors: [{ name: 'Ahmed Elsayed', url: 'https://ahmed-elsayed-portfolio.vercel.app' }],
  creator: 'Ahmed Elsayed',
  publisher: 'Ahmed Elsayed',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ahmed-elsayed-portfolio.vercel.app',
    siteName: 'Ahmed Elsayed Portfolio',
    title: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
    description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmed Elsayed - Backend Engineer Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ahmedelsayed',
    creator: '@ahmedelsayed',
    title: 'Ahmed Elsayed - Backend Engineer & Tech Blogger',
    description: 'Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://ahmed-elsayed-portfolio.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}