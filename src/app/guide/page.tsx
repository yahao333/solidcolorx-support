export default function Guide() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            使用指南
          </h1>

          {/* Getting Started */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">快速开始</h2>
            <p className="text-gray-600 mb-4">
              按照以下步骤，快速上手 SolidColorX：
            </p>
            <ol className="list-decimal list-inside text-gray-600 space-y-3">
              <li>
                <strong>下载安装</strong>：从官方网站下载 SolidColorX 安装包
              </li>
              <li>
                <strong>安装应用</strong>：双击 .pkg 文件，按照向导完成安装
              </li>
              <li>
                <strong>启动应用</strong>：在 Launchpad 或 Applications 文件夹中找到 SolidColorX
              </li>
              <li>
                <strong>开始使用</strong>：选择颜色，预览效果，导出图片
              </li>
            </ol>
          </section>

          {/* Basic Usage */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">基本使用流程</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">1. 选择颜色</h3>
                <p className="text-gray-600 mb-2">有多种方式选择您需要的颜色：</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>使用颜色选择器拖动滑块</li>
                  <li>直接输入 HEX 颜色代码</li>
                  <li>点击预设颜色快速选择</li>
                  <li>从最近使用的颜色中选择</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2. 预览效果</h3>
                <p className="text-gray-600 mb-2">实时查看颜色效果：</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>中间区域显示当前颜色的预览</li>
                  <li>可调整预览区域的大小</li>
                  <li>支持全屏预览模式</li>
                  <li>显示颜色的 HEX、RGB 值</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3. 导出图片</h3>
                <p className="text-gray-600 mb-2">设置导出参数并保存：</p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                  <li>选择导出格式：PNG、JPEG 或 SVG</li>
                  <li>设置图片尺寸或使用预设尺寸</li>
                  <li>点击导出按钮保存到本地</li>
                  <li>文件自动命名，包含时间戳</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Advanced Features */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">高级功能</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">颜色格式说明</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>
                    <strong>HEX</strong>：#RRGGBB 格式，如 #FF0000 表示红色
                  </li>
                  <li>
                    <strong>RGB</strong>：红绿蓝三原色，范围 0-255
                  </li>
                  <li>
                    <strong>HSL</strong>：色相(0-360°)、饱和度(0-100%)、亮度(0-100%)
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">导出格式对比</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-200 px-4 py-2 text-left">格式</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">特点</th>
                        <th className="border border-gray-200 px-4 py-2 text-left">适用场景</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">PNG</td>
                        <td className="border border-gray-200 px-4 py-2">无损压缩，支持透明</td>
                        <td className="border border-gray-200 px-4 py-2">需要透明背景的场景</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">JPEG</td>
                        <td className="border border-gray-200 px-4 py-2">有损压缩，文件较小</td>
                        <td className="border border-gray-200 px-4 py-2">网页使用，文件大小敏感</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 px-4 py-2">SVG</td>
                        <td className="border border-gray-200 px-4 py-2">矢量格式，无限缩放</td>
                        <td className="border border-gray-200 px-4 py-2">需要各种尺寸的场景</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Tips and Tricks */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">使用技巧</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">💡 快速选择常用颜色</h3>
                <p className="text-gray-600">
                  预设颜色面板包含了常用的颜色，点击即可快速选择，无需手动调色。
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">💡 使用全屏预览</h3>
                <p className="text-gray-600">
                  点击预览区域的全屏按钮，可以更好地查看颜色的实际效果。
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">💡 保存自定义颜色</h3>
                <p className="text-gray-600">
                  经常使用的颜色可以通过配置保存功能收藏，方便下次快速使用。
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">💡 批量导出</h3>
                <p className="text-gray-600">
                  需要多种尺寸时，可以一次性设置并导出，提高工作效率。
                </p>
              </div>
            </div>
          </section>

          {/* Keyboard Shortcuts */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">快捷键</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="border border-gray-200 px-4 py-2 text-left">快捷键</th>
                    <th className="border border-gray-200 px-4 py-2 text-left">功能</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">⌘ + E</td>
                    <td className="border border-gray-200 px-4 py-2">导出当前颜色</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">⌘ + S</td>
                    <td className="border border-gray-200 px-4 py-2">保存颜色配置</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">⌘ + F</td>
                    <td className="border border-gray-200 px-4 py-2">切换全屏预览</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 px-4 py-2 font-mono">ESC</td>
                    <td className="border border-gray-200 px-4 py-2">退出全屏</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">常见问题</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Q: 应用无法启动怎么办？</h3>
                <p className="text-gray-600">
                  A: 请检查系统版本是否为 macOS 15.0 或更高版本，并确保已允许来自未知开发者的应用。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Q: 导出的图片在哪里？</h3>
                <p className="text-gray-600">
                  A: 默认保存到 Downloads 文件夹，文件名格式为 solid-color-时间戳.格式。
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Q: 如何自定义预设颜色？</h3>
                <p className="text-gray-600">
                  A: 在设置页面中可以添加和管理自定义预设颜色。
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
