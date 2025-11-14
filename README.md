# SolidColorX Support

SolidColorX 的官方支持网站，为用户提供产品介绍、使用指南、技术支持和下载服务。

## 🎯 项目概述

这是 SolidColorX macOS 桌面应用的配套支持网站，提供：

- **产品介绍** - 详细的功能特性和使用场景
- **使用指南** - 完整的使用教程和技巧
- **常见问题** - FAQ 和故障排除指南
- **下载服务** - 最新版本的安全下载
- **技术支持** - 用户反馈和问题提交

## 🛠 技术栈

- **前端框架**: Next.js 15+ (App Router)
- **UI 库**: React 18+
- **样式框架**: Tailwind CSS 3.3+
- **开发语言**: TypeScript 5.0+
- **代码质量**: ESLint 8.0+

## 📋 环境要求

- **Node.js**: 11.5.0 或更高版本
- **npm**: 24.7.0 或更高版本
- **操作系统**: macOS, Windows, Linux (开发环境)

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone [repository-url]
cd solidcolorx-support
```

### 2. 安装依赖

```bash
npm install
```

### 3. 启动开发服务器

```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看网站。

### 4. 构建生产版本

```bash
npm run build
npm start
```

## 📁 项目结构

```
solidcolorx-support/
├── src/                        # Next.js 源代码
│   ├── app/                   # App Router 页面
│   │   ├── contact/           # 联系支持页面
│   │   ├── download/          # 下载页面
│   │   ├── faq/              # 常见问题页面
│   │   ├── features/          # 功能介绍页面
│   │   ├── guide/            # 使用指南页面
│   │   ├── layout.tsx         # 全局布局
│   │   ├── page.tsx          # 首页
│   │   └── globals.css       # 全局样式
│   ├── components/           # React 组件
│   │   ├── Header.tsx       # 导航栏组件
│   │   └── Footer.tsx       # 页脚组件
│   ├── utils/               # 工具函数
│   └── types/               # TypeScript 类型定义
├── public/                  # 静态资源
│   └── favicon.ico         # 网站图标
├── 配置文件                # 项目配置
│   ├── next.config.js      # Next.js 配置
│   ├── tailwind.config.js   # Tailwind 配置
│   ├── tsconfig.json       # TypeScript 配置
│   ├── eslint.config.mjs   # ESLint 配置
│   └── postcss.config.js    # PostCSS 配置
└── README.md              # 项目说明文档
```

## 🎨 设计特色

- **响应式设计**: 完美适配桌面端、平板和移动端
- **现代化 UI**: 基于 Tailwind CSS 的现代设计风格
- **流畅动画**: 丰富的过渡效果和微交互
- **无障碍支持**: 遵循 WCAG 2.1 无障碍标准
- **SEO 优化**: 完整的元数据和语义化标记

## 📱 页面说明

### 首页 (/)
- 产品介绍和核心功能展示
- 下载链接和导航入口
- 响应式的功能网格布局

### 功能特性 (/features)
- 详细的功能介绍
- 技术规格说明
- 使用场景展示

### 使用指南 (/guide)
- 完整的使用教程
- 快捷键说明
- 使用技巧分享

### 常见问题 (/faq)
- 分类整理的 FAQ
- 可折叠的问题卡片
- 相关帮助链接

### 下载 (/download)
- 最新版本下载
- 系统要求说明
- 安装指南
- 版本历史

### 联系支持 (/contact)
- 联系表单
- 问题分类提交
- 其他帮助资源

## 🛠 开发脚本

```bash
# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint

# 代码修复（如支持）
npm run lint:fix
```

## 🌐 部署选项

### Vercel 部署（推荐）

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 静态导出部署

如需静态部署到 GitHub Pages、Netlify 等，修改 `next.config.js`：

```javascript
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
```

### Docker 部署

```dockerfile
FROM node:18-alpine AS base

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [SolidColorX 桌面应用](https://github.com/solidcolorx/solidcolorx-app)
- [官方网站](https://solidcolorx.com)
- [问题反馈](https://github.com/solidcolorx/solidcolorx-support/issues)
