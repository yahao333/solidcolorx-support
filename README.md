# SolidColorX Support

这是 SolidColorX 的支持网站，使用 Next.js 和 Tauri 构建。

## 技术栈

- **前端框架**: Next.js 15+
- **UI 库**: React 18+
- **样式**: Tailwind CSS
- **桌面应用**: Tauri 2.9.4
- **语言**: TypeScript

## 环境要求

- Node.js 11.5+
- npm 24.7+
- Tauri CLI 2.9.4

## 开始使用

### 安装依赖

```bash
npm install
```

### 开发模式

#### Web 开发
```bash
npm run dev
```

#### Tauri 开发
```bash
npm run tauri:dev
```

### 构建

#### Web 构建
```bash
npm run build
npm start
```

#### Tauri 构建
```bash
npm run tauri:build
```

## 项目结构

```
solidcolorx-support/
├── src/                    # Next.js 源代码
│   ├── app/               # App Router 页面
│   ├── components/        # React 组件
│   ├── utils/            # 工具函数
│   └── types/            # TypeScript 类型定义
├── src-tauri/             # Tauri Rust 源代码
│   ├── src/              # Rust 源代码
│   ├── capabilities/     # Tauri 权限配置
│   └── tauri.conf.json   # Tauri 配置文件
├── public/               # 静态资源
└── package.json          # 项目依赖配置
```

## 脚本命令

- `npm run dev` - 启动 Next.js 开发服务器
- `npm run build` - 构建 Next.js 应用
- `npm run start` - 启动生产服务器
- `npm run lint` - 运行 ESLint 检查
- `npm run tauri:dev` - 启动 Tauri 开发模式
- `npm run tauri:build` - 构建 Tauri 应用

## 许可证

MIT License
