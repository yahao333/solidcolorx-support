import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SolidColorX - Professional Solid Color Background Generator for macOS',
  description: 'SolidColorX is a professional solid color background generator for macOS. Designed for designers, developers, and content creators to quickly generate high-quality solid color background images.',
  keywords: ['solid color background', 'color generator', 'macOS app', 'designer tool', 'background image', '纯色背景', '颜色生成器', 'macOS应用', '设计师工具'],
  openGraph: {
    title: 'SolidColorX - Professional Solid Color Background Generator',
    description: 'Generate high-quality solid color backgrounds for macOS. Perfect for designers and content creators.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SolidColorX - Professional Solid Color Background Generator',
    description: 'Generate high-quality solid color backgrounds for macOS. Perfect for designers and content creators.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
