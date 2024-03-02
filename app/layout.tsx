import type { Metadata } from 'next'
import './globals.css'
// Fonts
import { Poppins } from 'next/font/google'

// Loading font
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Sercan Gündoğan - Frontend Developer & Tech Enthusiast',
  description:
    'Dive into the world of Sercan, a passionate Frontend Developer with a knack for continuous learning and innovation. Explore my journey from university projects to professional achievements with Sociality.io, and discover my expertise in HTML, CSS, JavaScript, React, and more. Join me in my quest for personal and professional growth, fueled by my love for software development, teamwork, and a diverse set of hobbies including swimming, basketball, and stock market analysis. Connect with me today to embark on new technological adventures.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>{children}</body>
    </html>
  )
}
