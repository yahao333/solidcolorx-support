export default function Features() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            功能特性
          </h1>

          {/* Color Picker Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">颜色选择器</h2>
            </div>
            <p className="text-gray-600 mb-4">
              专业级颜色选择工具，满足精确的色彩需求：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>支持 RGB 格式调色，精确控制红绿蓝三原色</li>
              <li>支持 HSL 格式调色，通过色相、饱和度、亮度选择颜色</li>
              <li>支持 HEX 颜色代码输入，快速定位特定颜色</li>
              <li>实时颜色预览，所见即所得</li>
              <li>支持手动输入颜色值，精确控制</li>
            </ul>
          </section>

          {/* Preset Colors Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">预设颜色</h2>
            </div>
            <p className="text-gray-600 mb-4">
              精心挑选的常用颜色集合，一键快速应用：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>基础色：纯白、纯黑、灰色系</li>
              <li>主色调：红色、蓝色、绿色、黄色等</li>
              <li>商务色：深蓝、深灰、藏青等专业色彩</li>
              <li>点击即可快速选择，无需手动调色</li>
              <li>支持自定义预设颜色收藏</li>
            </ul>
          </section>

          {/* Real-time Preview Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">实时预览</h2>
            </div>
            <p className="text-gray-600 mb-4">
              大尺寸实时预览区域，直观查看颜色效果：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>全屏预览模式，完整查看颜色效果</li>
              <li>支持调整预览区域尺寸</li>
              <li>显示颜色信息：HEX、RGB、HSL 值</li>
              <li>支持全屏模式，更好的视觉体验</li>
              <li>实时响应颜色变化，无延迟</li>
            </ul>
          </section>

          {/* Export Controls Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">导出功能</h2>
            </div>
            <p className="text-gray-600 mb-4">
              多种格式和尺寸选择，满足不同使用需求：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>支持导出格式：PNG（透明背景）、JPEG、SVG</li>
              <li>预设尺寸：1920×1080（全高清）、1080×1080（正方形）、自定义尺寸</li>
              <li>高质量图片输出，无损压缩</li>
              <li>批量导出支持</li>
              <li>自动命名，包含时间戳</li>
            </ul>
          </section>

          {/* Configuration Management Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">配置管理</h2>
            </div>
            <p className="text-gray-600 mb-4">
              智能配置保存和恢复，提升工作效率：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>自动保存最后使用的颜色</li>
              <li>保存自定义颜色配置，支持命名管理</li>
              <li>应用偏好设置：默认导出格式、默认尺寸等</li>
              <li>启动时自动加载上次配置</li>
              <li>支持导入导出配置文件</li>
            </ul>
          </section>

          {/* Theme Support Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-700 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">主题支持</h2>
            </div>
            <p className="text-gray-600 mb-4">
              适配系统主题，提供舒适的使用体验：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>支持 macOS 深色模式</li>
              <li>自动跟随系统主题切换</li>
              <li>手动切换浅色/深色主题</li>
              <li>符合 macOS 设计规范</li>
              <li>优雅的动画过渡效果</li>
            </ul>
          </section>

          {/* System Integration Section */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-teal-500 rounded-lg mr-4"></div>
              <h2 className="text-2xl font-semibold text-gray-900">系统集成</h2>
            </div>
            <p className="text-gray-600 mb-4">
              深度集成 macOS 系统，提供原生体验：
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>原生 macOS 应用性能</li>
              <li>支持 Retina 显示器</li>
              <li>快捷键支持</li>
              <li>系统集成通知</li>
              <li>支持 Touch Bar（适用设备）</li>
            </ul>
          </section>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="/download"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors mr-4"
            >
              立即下载
            </a>
            <a
              href="/guide"
              className="inline-block px-8 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              使用指南
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
