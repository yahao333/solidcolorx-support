'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Translations {
  [key: string]: {
    [key: string]: string
  }
}

const translations: Translations = {
  en: {
    // Hero Section
    title: 'SolidColorX',
    subtitle: 'Professional Solid Color Background Generator',
    platform: 'macOS Desktop Application',
    description: 'Designed for designers, developers, and content creators to quickly generate high-quality solid color background images. Supports custom color selection, preset colors, and multiple export formats to meet your various design needs.',
    freeDownload: 'Free Download',
    learnFeatures: 'Learn Features',
    downloadNow: 'Download Now',
    
    // Features Section
    coreFeatures: 'Core Features',
    colorPicker: 'Color Picker',
    colorPickerDesc: 'Support for RGB, HSL, HEX format color selection and manual input',
    presetColors: 'Preset Colors',
    presetColorsDesc: 'Quick selection of commonly used colors, one-click application',
    realTimePreview: 'Real-time Preview',
    realTimePreviewDesc: 'Real-time display of color effects, supports preview size adjustment',
    multiFormatExport: 'Multi-format Export',
    multiFormatExportDesc: 'Support for PNG, JPEG, SVG formats, with multiple size options',
    
    // Use Cases Section
    useCases: 'Use Cases',
    pptMaking: 'PPT Creation',
    pptMakingDesc: 'Quickly generate professional solid color backgrounds for presentations',
    webDesign: 'Web Design',
    webDesignDesc: 'Create solid color images needed for web backgrounds and design elements',
    socialMedia: 'Social Media',
    socialMediaDesc: 'Generate background images for social media content creation',
    
    // CTA Section
    getStarted: 'Get Started with SolidColorX',
    noRegistration: 'Free download, no registration required, ready to use',
    
    // FAQ Section
    faq: 'Frequently Asked Questions',
    faq1Question: 'What formats does SolidColorX support?',
    faq1Answer: 'SolidColorX supports PNG, JPEG, and SVG format exports, with preset sizes including 1920x1080, 1080x1080, and custom dimensions.',
    faq2Question: 'Is SolidColorX free to use?',
    faq2Answer: 'Yes, SolidColorX is completely free to use with no feature limitations or watermarks.',
    faq3Question: 'What macOS versions are supported?',
    faq3Answer: 'SolidColorX supports macOS 10.15 (Catalina) and later versions.',
    faq4Question: 'How to save frequently used colors?',
    faq4Answer: 'You can save your favorite color configurations in the app for quick access later.',
    
    // Contact Section
    contactSupport: 'Contact Support',
    contactEmail: 'Email: apprank@outlook.com',
    contactResponse: 'We usually respond within 24 hours',
    
    // Footer
    product: 'Product',
    company: 'Company',
    legal: 'Legal',
    aboutUs: 'About Us',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    allRightsReserved: 'All rights reserved.',
    
    // Language switcher
    language: 'Language'
  },
  zh: {
    // Hero Section
    title: 'SolidColorX',
    subtitle: '专业纯色背景生成器',
    platform: 'macOS 桌面应用',
    description: '专为设计师、开发者和内容创作者打造，快速生成高质量纯色背景图片。支持自定义颜色选择、预设颜色和多种导出格式，满足您的各种设计需求。',
    freeDownload: '免费下载',
    learnFeatures: '了解功能',
    downloadNow: '立即下载',
    
    // Features Section
    coreFeatures: '核心功能',
    colorPicker: '颜色选择器',
    colorPickerDesc: '支持 RGB、HSL、HEX 格式的颜色选择和手动输入',
    presetColors: '预设颜色',
    presetColorsDesc: '常用颜色快速选择，一键应用',
    realTimePreview: '实时预览',
    realTimePreviewDesc: '实时显示颜色效果，支持调整预览尺寸',
    multiFormatExport: '多格式导出',
    multiFormatExportDesc: '支持 PNG、JPEG、SVG 格式，可选多种尺寸',
    
    // Use Cases Section
    useCases: '适用场景',
    pptMaking: 'PPT 制作',
    pptMakingDesc: '为演示文稿快速生成专业的纯色背景',
    webDesign: '网页设计',
    webDesignDesc: '创建网页背景和设计元素所需的纯色图片',
    socialMedia: '社交媒体',
    socialMediaDesc: '为社交媒体内容创作生成背景图片',
    
    // CTA Section
    getStarted: '开始使用 SolidColorX',
    noRegistration: '免费下载，无需注册，即装即用',
    
    // FAQ Section
    faq: '常见问题',
    faq1Question: 'SolidColorX 支持哪些格式？',
    faq1Answer: 'SolidColorX 支持 PNG、JPEG 和 SVG 格式导出，预设尺寸包括 1920x1080、1080x1080 以及自定义尺寸。',
    faq2Question: 'SolidColorX 是否免费使用？',
    faq2Answer: '是的，SolidColorX 完全免费使用，没有任何功能限制或水印。',
    faq3Question: '支持哪些 macOS 版本？',
    faq3Answer: 'SolidColorX 支持 macOS 10.15 (Catalina) 及更高版本。',
    faq4Question: '如何保存常用颜色？',
    faq4Answer: '您可以在应用中保存您喜欢的颜色配置，方便以后快速使用。',
    
    // Contact Section
    contactSupport: '联系支持',
    contactEmail: '邮箱：apprank@outlook.com',
    contactResponse: '我们通常会在24小时内回复',
    
    // Footer
    product: '产品',
    company: '公司',
    legal: '法律',
    aboutUs: '关于我们',
    privacyPolicy: '隐私政策',
    termsOfService: '使用条款',
    allRightsReserved: '保留所有权利。',
    
    // Language switcher
    language: '语言'
  }
}

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    // Default to English, no browser language detection
    setLanguage('en')
  }, [])

  const t = (key: string) => translations[language][key] || key

  return (
    <div className="min-h-screen bg-white">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <div className="relative">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex items-center space-x-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium">
              {language === 'en' ? 'English' : '中文'}
            </span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[120px]">
              <button
                onClick={() => {
                  setLanguage('en')
                  setIsMenuOpen(false)
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 rounded-t-lg"
              >
                English
              </button>
              <button
                onClick={() => {
                  setLanguage('zh')
                  setIsMenuOpen(false)
                }}
                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 rounded-b-lg"
              >
                中文
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {t('subtitle')}
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8">
            {t('platform')}
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            {t('description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t('freeDownload')}
            </a>
            <a
              href="#features"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              {t('learnFeatures')}
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('coreFeatures')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {/* <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('colorPicker')}</h3>
              <p className="text-gray-600 text-sm">{t('colorPickerDesc')}</p>
            </div> */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('presetColors')}</h3>
              <p className="text-gray-600 text-sm">{t('presetColorsDesc')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('realTimePreview')}</h3>
              <p className="text-gray-600 text-sm">{t('realTimePreviewDesc')}</p>
            </div>
            {/* <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('multiFormatExport')}</h3>
              <p className="text-gray-600 text-sm">{t('multiFormatExportDesc')}</p>
            </div> */}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('useCases')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('pptMaking')}</h3>
              <p className="text-gray-600">{t('pptMakingDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('webDesign')}</h3>
              <p className="text-gray-600">{t('webDesignDesc')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('socialMedia')}</h3>
              <p className="text-gray-600">{t('socialMediaDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {t('faq')}
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('faq1Question')}</h3>
              <p className="text-gray-600">{t('faq1Answer')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('faq2Question')}</h3>
              <p className="text-gray-600">{t('faq2Answer')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('faq3Question')}</h3>
              <p className="text-gray-600">{t('faq3Answer')}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-900 mb-3">{t('faq4Question')}</h3>
              <p className="text-gray-600">{t('faq4Answer')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t('contactSupport')}
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <p className="text-gray-600 mb-4">{t('contactEmail')}</p>
              <p className="text-sm text-gray-500">{t('contactResponse')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('getStarted')}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {t('noRegistration')}
          </p>
          <a
            href="https://github.com/solidcolorx/solidcolorx/releases"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            {t('downloadNow')}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <Link href="/" className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded"></div>
                </div>
                <span className="text-xl font-bold">SolidColorX</span>
              </Link>
              <p className="text-gray-400 text-sm">
                {language === 'en' 
                  ? 'Professional solid color background generator, providing efficient color solutions for designers and content creators.'
                  : '专业纯色背景生成器，为设计师和内容创作者提供高效的色彩解决方案。'
                }
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold mb-4">{t('product')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#features" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('coreFeatures')}
                  </a>
                </li>
                <li>
                  <a href="#download" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('freeDownload')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold mb-4">{t('company')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('aboutUs')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('contactSupport')}
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold mb-4">{t('legal')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('privacyPolicy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                    {t('termsOfService')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 SolidColorX. {t('allRightsReserved')}
            </div>

            {/* Social Links */}
            <div className="flex space-x-6">
              <a
                href="https://github.com/solidcolorx/solidcolorx"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}