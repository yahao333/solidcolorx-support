import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'SolidColorX - 专业纯色背景生成器',
  description: 'SolidColorX 是一款专为 macOS 设计的纯色背景生成器，支持多种颜色格式和导出选项，满足设计师和内容创作需求。',
  keywords: ['纯色背景', '颜色生成器', 'macOS应用', '设计师工具', '背景图片'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-white">
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
