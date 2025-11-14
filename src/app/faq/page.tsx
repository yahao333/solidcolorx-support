import { useState } from 'react'

const faqs = [
  {
    category: "安装与系统要求",
    questions: [
      {
        q: "SolidColorX 支持哪些 macOS 版本？",
        a: "SolidColorX 支持 macOS 15.0 及以上版本。建议使用最新版本的 macOS 以获得最佳体验。"
      },
      {
        q: "如何安装 SolidColorX？",
        a: "下载 .pkg 安装包后，双击运行，按照安装向导提示完成安装即可。安装完成后可在 Applications 文件夹或 Launchpad 中找到应用。"
      },
      {
        q: "安装时提示"无法验证开发者"怎么办？",
        a: "这是 macOS 的安全机制。请在 系统偏好设置 > 安全性与隐私 > 通用 中点击"仍要打开"，或使用命令行工具 xattr 移除隔离属性。"
      },
      {
        q: "应用无法启动是什么原因？",
        a: "可能的原因：1) 系统版本不兼容；2) 权限问题；3) 应用文件损坏。请检查系统版本，尝试重新安装应用。"
      },
      {
        q: "SolidColorX 是免费的吗？",
        a: "是的，SolidColorX 完全免费使用，包含所有核心功能，无需注册或付费。"
      }
    ]
  },
  {
    category: "功能使用",
    questions: [
      {
        q: "如何选择精确的颜色？",
        a: "可以通过多种方式：1) 使用颜色选择器拖动滑块；2) 直接输入 HEX 颜色代码；3) 输入 RGB 或 HSL 值；4) 使用吸管工具从屏幕取色。"
      },
      {
        q: "支持哪些图片导出格式？",
        a: "支持 PNG、JPEG 和 SVG 三种格式。PNG 支持透明背景，JPEG 文件较小，SVG 为矢量格式可无限缩放。"
      },
      {
        q: "如何设置自定义图片尺寸？",
        a: "在导出设置中可以选择预设尺寸（如 1920×1080、1080×1080），也可以输入自定义的宽度和高度数值。"
      },
      {
        q: "导出的图片保存在哪里？",
        a: "默认保存在系统的 Downloads 文件夹中，文件名格式为 solid-color-时间戳.格式。您也可以在设置中更改保存位置。"
      },
      {
        q: "如何保存常用的颜色？",
        a: "选择颜色后点击"保存配置"按钮，为颜色命名即可保存。保存的颜色会在预设面板中显示，方便下次快速使用。"
      },
      {
        q: "支持批量导出吗？",
        a: "当前版本支持单次导出，您可以保存颜色配置后批量导出不同尺寸或格式的图片。批量功能将在后续版本中加入。"
      }
    ]
  },
  {
    category: "性能与兼容性",
    questions: [
      {
        q: "应用占用多少系统资源？",
        a: "SolidColorX 经过优化，内存占用通常小于 50MB，CPU 使用率极低，对系统性能影响很小。"
      },
      {
        q: "是否支持 Retina 显示器？",
        a: "完全支持 Retina 显示器，界面和导出的图片都会在高分辨率屏幕上显示清晰。"
      },
      {
        q: "是否支持深色模式？",
        a: "支持！应用会自动跟随系统主题设置，也可以在设置中手动切换浅色/深色主题。"
      },
      {
        q: "支持 Touch Bar 吗？",
        a: "支持带 Touch Bar 的 MacBook 机型，Touch Bar 会显示常用功能快捷按钮。"
      },
      {
        q: "应用支持多语言吗？",
        a: "目前支持中文、英文和日文，后续会添加更多语言支持。"
      }
    ]
  },
  {
    category: "故障排除",
    questions: [
      {
        q: "导出的图片颜色不正确怎么办？",
        a: "请检查颜色配置文件设置，确保显示器配置正确。也可以尝试重启应用或重新校准显示器。"
      },
      {
        q: "应用闪退或卡死如何处理？",
        a: "尝试重启应用，如问题持续，请重置应用配置：~/Library/Application Support/SolidColorGenerator/ 目录。"
      },
      {
        q: "导出功能不工作是什么原因？",
        a: "检查保存位置的写入权限，确保磁盘空间充足。可以尝试更改保存位置或清理磁盘空间。"
      },
      {
        q: "如何重置应用设置？",
        a: "删除 ~/Library/Application Support/SolidColorGenerator/ 目录下的配置文件，重启应用即可恢复默认设置。"
      },
      {
        q: "网络连接有问题会影响使用吗？",
        a: "SolidColorX 是离线应用，除了软件更新外不需要网络连接，断网状态下可正常使用所有功能。"
      }
    ]
  },
  {
    category: "数据与隐私",
    questions: [
      {
        q: "SolidColorX 会收集用户数据吗？",
        a: "不会。SolidColorX 是完全离线的桌面应用，不会收集、上传或分享任何用户数据。"
      },
      {
        q: "颜色配置存储在本地哪里？",
        a: "存储在 ~/Library/Application Support/SolidColorGenerator/config.json 文件中。您可以手动备份这个文件。"
      },
      {
        q: "如何备份我的颜色配置？",
        a: "直接复制上述配置文件即可备份。重装系统后，将备份的配置文件放回原位置即可恢复所有设置。"
      },
      {
        q: "应用会访问系统文件吗？",
        a: "只会访问必要的配置文件和用户指定的导出位置，不会访问其他系统文件。"
      }
    ]
  }
]

export default function FAQ() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const toggleCategory = (category: string) => {
    setOpenCategory(openCategory === category ? null : category)
  }

  const toggleQuestion = (question: string) => {
    setOpenQuestion(openQuestion === question ? null : question)
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            常见问题
          </h1>

          <div className="text-center mb-12">
            <p className="text-lg text-gray-600">
              关于 SolidColorX 的常见问题解答，找不到答案？请查看使用指南或联系支持。
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((category) => (
              <div key={category.category} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleCategory(category.category)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                >
                  <h2 className="text-xl font-semibold text-gray-900">{category.category}</h2>
                  <svg
                    className={`w-5 h-5 text-gray-500 transition-transform ${openCategory === category.category ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openCategory === category.category && (
                  <div className="p-6 space-y-4">
                    {category.questions.map((item, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                        <button
                          onClick={() => toggleQuestion(`${category.category}-${index}`)}
                          className="w-full text-left flex justify-between items-start hover:bg-gray-50 -mx-2 px-2 py-2 rounded transition-colors"
                        >
                          <h3 className="font-medium text-gray-900 pr-4">{item.q}</h3>
                          <svg
                            className={`w-4 h-4 text-gray-500 flex-shrink-0 transition-transform mt-1 ${openQuestion === `${category.category}-${index}` ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        {openQuestion === `${category.category}-${index}` && (
                          <div className="mt-3 text-gray-600 leading-relaxed animate-in slide-in-from-top-2 duration-200">
                            {item.a}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Need Help Section */}
          <section className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              还需要帮助？
            </h2>
            <p className="text-gray-600 mb-6">
              如果您的问题没有在 FAQ 中找到答案，我们很乐意为您提供帮助。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/guide"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                查看使用指南
              </a>
              <a
                href="/contact"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                联系支持
              </a>
            </div>
          </section>

          {/* Report Issue */}
          <section className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              发现了问题或有改进建议？
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              提交反馈
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
