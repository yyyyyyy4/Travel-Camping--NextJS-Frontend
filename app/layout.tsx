import type { Metadata } from 'next';

import './globals.css'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Travel UI/UX for Camping | Next.js Web Application',
  description: 'A modern, responsive, and feature-rich travel and camping web application built with Next.js, React, and Tailwind CSS. Explore camping destinations, features, and guides with a beautiful UI/UX.',
  authors: [
    { name: 'Arnob Mahmud', url: 'https://arnob-mahmud.vercel.app/' }
  ],
  keywords: [
    'Next.js', 'React', 'Tailwind CSS', 'UI/UX', 'Camping', 'Travel App', 'TypeScript', 'Responsive Design', 'Component Reuse', 'Modern Web', 'App Router', 'Static Assets', 'Open Source', 'Learning Project', 'Arnob Mahmud'
  ],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Travel UI/UX for Camping | Next.js Web Application',
    description: 'A modern, responsive, and feature-rich travel and camping web application built with Next.js, React, and Tailwind CSS. Explore camping destinations, features, and guides with a beautiful UI/UX.',
    url: 'https://arnob-mahmud.vercel.app/',
    siteName: 'Travel UI/UX for Camping',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Travel UI/UX for Camping Hero Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
