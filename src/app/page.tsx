export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            SolidColorX
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            专业纯色背景生成器
          </p>
          <p className="text-lg text-blue-600 font-semibold mb-8">
            macOS 桌面应用
          </p>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            专为设计师、开发者和内容创作者打造，快速生成高质量纯色背景图片。
            支持自定义颜色选择、预设颜色和多种导出格式，满足您的各种设计需求。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/download"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              免费下载
            </a>
            <a
              href="/features"
              className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              了解功能
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            核心功能
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">颜色选择器</h3>
              <p className="text-gray-600 text-sm">支持 RGB、HSL、HEX 格式的颜色选择和手动输入</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">预设颜色</h3>
              <p className="text-gray-600 text-sm">常用颜色快速选择，一键应用</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-purple-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">实时预览</h3>
              <p className="text-gray-600 text-sm">实时显示颜色效果，支持调整预览尺寸</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded"></div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">多格式导出</h3>
              <p className="text-gray-600 text-sm">支持 PNG、JPEG、SVG 格式，可选多种尺寸</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            适用场景
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">PPT 制作</h3>
              <p className="text-gray-600">为演示文稿快速生成专业的纯色背景</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">网页设计</h3>
              <p className="text-gray-600">创建网页背景和设计元素所需的纯色图片</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-3">社交媒体</h3>
              <p className="text-gray-600">为社交媒体内容创作生成背景图片</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            开始使用 SolidColorX
          </h2>
          <p className="text-xl mb-8 opacity-90">
            免费下载，无需注册，即装即用
          </p>
          <a
            href="/download"
            className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            立即下载
          </a>
        </div>
      </section>
    </main>
  )
}
