'use client'

import { useState } from 'react'

export default function Download() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)
    // 模拟下载过程
    setTimeout(() => {
      setIsDownloading(false)
      // 实际下载链接
      window.location.href = '/downloads/SolidColorX-0.2.0.pkg'
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              下载 SolidColorX
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              专业纯色背景生成器
            </p>
            <p className="text-lg text-blue-600 font-semibold">
              免费下载，无需注册，即装即用
            </p>
          </div>

          {/* Download Card */}
          <section className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <div className="text-center mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                SolidColorX v0.2.0
              </h2>
              <p className="text-gray-600 mb-4">
                适用于 macOS 15.0 及以上版本
              </p>

              {/* Download Button */}
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className={`inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all ${
                  isDownloading
                    ? 'bg-blue-400 cursor-not-allowed'
                    : 'hover:bg-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
                }`}
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    准备下载...
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    下载 for macOS
                  </>
                )}
              </button>

              <div className="mt-4 text-sm text-gray-500">
                文件大小: ~3.6 MB • 版本: 0.2.0 • 更新时间: 2024-11-14
              </div>
            </div>

            {/* Download Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">安全可靠</h3>
                <p className="text-sm text-gray-600">通过 Apple 公证，无病毒无恶意代码</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">快速安装</h3>
                <p className="text-sm text-gray-600">双击安装包，几步完成安装</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">完全免费</h3>
                <p className="text-sm text-gray-600">所有功能免费使用，无广告无限制</p>
              </div>
            </div>
          </section>

          {/* System Requirements */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">系统要求</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">最低要求</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    macOS 15.0 或更高版本
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    4GB RAM 内存
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    100MB 可用磁盘空间
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Intel 或 Apple Silicon 处理器
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">推荐配置</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    最新版本 macOS
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    8GB 或更多 RAM
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    Retina 显示器
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    稳定的网络连接（用于更新检查）
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">安装指南</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold mr-4">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">下载安装包</h3>
                  <p className="text-gray-600">点击上方下载按钮，获取 SolidColorX-0.2.0.pkg 安装包</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold mr-4">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">运行安装程序</h3>
                  <p className="text-gray-600">双击下载的 .pkg 文件，启动安装向导</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold mr-4">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">跟随向导</h3>
                  <p className="text-gray-600">按照安装向导提示，点击"继续"、"同意"等按钮完成安装</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-semibold mr-4">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">启动应用</h3>
                  <p className="text-gray-600">安装完成后，在 Applications 文件夹或 Launchpad 中找到 SolidColorX 并启动</p>
                </div>
              </div>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">安装问题解决</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">"无法验证开发者"提示</h3>
                <p className="text-gray-600 mb-2">
                  这是 macOS 的安全保护机制。解决方法：
                </p>
                <ol className="list-decimal list-inside text-gray-600 space-y-1">
                  <li>打开 系统偏好设置 > 安全性与隐私</li>
                  <li>在"通用"选项卡中找到应用信息</li>
                  <li>点击"仍要打开"按钮</li>
                  <li>或使用命令行：xattr -d com.apple.quarantine SolidColorX.app</li>
                </ol>
              </div>

              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">应用无法打开</h3>
                <p className="text-gray-600 mb-2">
                  检查以下几点：
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>确认系统版本为 macOS 15.0 或更高</li>
                  <li>检查磁盘空间是否充足</li>
                  <li>重新下载安装包并尝试重新安装</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Version History */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">版本历史</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900">v0.2.0</span>
                  <span className="ml-3 px-2 py-1 bg-green-100 text-green-700 text-sm rounded">当前版本</span>
                  <span className="ml-3 text-gray-500">2024-11-14</span>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• 新增 SVG 导出格式支持</li>
                  <li>• 优化颜色选择器界面</li>
                  <li>• 修复导出图片质量 bug</li>
                  <li>• 改深色模式支持</li>
                </ul>
              </div>

              <div className="border-l-4 border-gray-300 pl-4">
                <div className="flex items-center mb-2">
                  <span className="text-lg font-semibold text-gray-900">v0.1.0</span>
                  <span className="ml-3 text-gray-500">2024-10-01</span>
                </div>
                <ul className="text-gray-600 space-y-1">
                  <li>• 初始版本发布</li>
                  <li>• 基础颜色选择和导出功能</li>
                  <li>• 支持 PNG 和 JPEG 格式</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
