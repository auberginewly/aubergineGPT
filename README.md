# 🍆 aubergineGPT

一只茄子GPT - 基于React和Node.js的智能对话应用

## ✨ 特性

- 🎨 现代化UI设计，使用Tailwind CSS
- 💬 实时聊天界面
- 🌙 支持暗色模式
- 📱 响应式设计
- 🔒 用户认证系统
- 🚀 快速响应

## 🛠️ 技术栈

### 前端
- **React 18** - 用户界面库
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **Vite** - 构建工具
- **React Router** - 路由管理

### 后端
- **Node.js** - 运行环境
- **Express** - Web框架
- **MongoDB** - 数据库
- **JWT** - 身份验证
- **bcryptjs** - 密码加密

## 🚀 快速开始

### 前提条件
- Node.js 18+
- pnpm (推荐) 或 npm
- MongoDB

### 安装

1. **克隆项目**
```bash
git clone https://github.com/auberginewly/aubergineGPT.git
cd aubergineGPT
```

2. **安装前端依赖**
```bash
cd frontend
pnpm install
```

3. **安装后端依赖**
```bash
cd ../backend
pnpm install
```

4. **环境配置**
```bash
# 在backend目录下创建 .env 文件
cp .env.example .env
# 编辑 .env 文件，配置数据库连接等
```

### 运行

**开发模式**
```bash
# 启动后端 (在backend目录)
pnpm run server

# 启动前端 (在frontend目录)
pnpm run dev
```

**生产模式**
```bash
# 构建前端
cd frontend && pnpm run build

# 启动后端
cd ../backend && pnpm start
```

## 📁 项目结构

```
aubergineGPT/
├── frontend/          # React前端应用
│   ├── src/
│   │   ├── components/    # 组件
│   │   ├── pages/        # 页面
│   │   ├── context/      # 状态管理
│   │   └── assets/       # 静态资源
│   └── package.json
├── backend/           # Node.js后端API
│   ├── server.js     # 入口文件
│   └── package.json
├── .gitignore
└── README.md
```

## 🔧 开发指南

### 提交规范
```bash
git commit -m "feat: 添加新功能"
git commit -m "fix: 修复bug"
git commit -m "docs: 更新文档"
```

### 代码风格
- 使用 ESLint 和 Prettier
- TypeScript 严格模式
- 组件使用函数式写法

## 📝 API文档

后端API运行在 `http://localhost:3000`

主要端点：
- `POST /api/auth/login` - 用户登录
- `POST /api/auth/register` - 用户注册
- `GET /api/chat/messages` - 获取聊天记录
- `POST /api/chat/send` - 发送消息

## 🤝 贡献

欢迎提交 Issues 和 Pull Requests！

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 打开 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 👤 作者

**auberginewly**
- GitHub: [@auberginewly](https://github.com/auberginewly)

---

⭐ 如果这个项目对你有帮助，请给它一个 star！