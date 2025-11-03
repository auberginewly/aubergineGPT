import logo from "./logo.svg";
import logo_full from "./logo_full.svg";
import logo_full_dark from "./logo_full_dark.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import theme_icon from "./theme_icon.svg";
import send_icon from "./send_icon.svg";
import stop_icon from "./stop_icon.svg";
import mountain_img from "./mountain_img.jpg";
import menu_icon from "./menu_icon.svg";
import close_icon from "./close_icon.svg";
import bin_icon from "./bin_icon.svg";
import logout_icon from "./logout_icon.svg";
import diamond_icon from "./diamond_icon.svg";
import gallery_icon from "./gallery_icon.svg";

import ai_image1 from "./ai_image1.jpg";
import ai_image2 from "./ai_image2.jpg";
import ai_image3 from "./ai_image3.jpg";
import ai_image4 from "./ai_image4.jpg";
import ai_image5 from "./ai_image5.jpg";
import ai_image6 from "./ai_image6.jpg";
import ai_image7 from "./ai_image7.jpg";
import ai_image8 from "./ai_image8.jpg";
import ai_image9 from "./ai_image9.jpg";
import ai_image10 from "./ai_image10.jpg";
import ai_image11 from "./ai_image11.jpg";
import ai_image12 from "./ai_image12.jpg";

// ============ 类型定义 ============

export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  credits: number;
}

export interface Plan {
  _id: string;
  name: string;
  price: number;
  credits: number;
  features: string[];
}

export interface Message {
  isImage: boolean;
  isPublished: boolean;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface Chat {
  _id: string;
  userId: string;
  userName?: string;
  name: string;
  messages: Message[];
  createdAt: string;
  updatedAt: string;
}

export interface Assets {
  logo: string;
  logo_full: string;
  logo_full_dark: string;
  search_icon: string;
  user_icon: string;
  theme_icon: string;
  send_icon: string;
  stop_icon: string;
  mountain_img: string;
  menu_icon: string;
  close_icon: string;
  bin_icon: string;
  logout_icon: string;
  diamond_icon: string;
  gallery_icon: string;
}

// ============ 资源导出 ============

export const assets: Assets = {
  logo,
  logo_full,
  logo_full_dark,
  search_icon,
  user_icon,
  theme_icon,
  send_icon,
  stop_icon,
  mountain_img,
  menu_icon,
  close_icon,
  bin_icon,
  logout_icon,
  diamond_icon,
  gallery_icon
};

// AI 生成图片库
export const aiImages = {
  ai_image1,
  ai_image2,
  ai_image3,
  ai_image4,
  ai_image5,
  ai_image6,
  ai_image7,
  ai_image8,
  ai_image9,
  ai_image10,
  ai_image11,
  ai_image12
};

// ============ 模拟数据 ============

export const dummyUserData: User = {
  _id: "689c6deed410acddc0d95a0e",
  name: "aubergineGPT User",
  email: "user@auberginegpt.com",
  password: "$2b$10$VESVdPDjL5LF.KCU6jKyqeXNSLASAAfpR2kkIJExtMO.PJvZJAudy",
  credits: 200,
};

export const dummyPlans: Plan[] = [
  {
    _id: "basic",
    name: "Basic",
    price: 10,
    credits: 100,
    features: [
      '100 text generations',
      '50 image generations', 
      'Standard support',
      'Access to basic models'
    ]
  },
  {
    _id: "pro",
    name: "Pro",
    price: 20,
    credits: 500,
    features: [
      '500 text generations',
      '200 image generations',
      'Priority support',
      'Access to pro models',
      'Faster response time'
    ]
  },
  {
    _id: "premium",
    name: "Premium",
    price: 30,
    credits: 1000,
    features: [
      '1000 text generations',
      '500 image generations',
      '24/7 VIP support',
      'Access to premium models',
      'Dedicated account manager'
    ]
  }
];

// ...existing imports...

// 修复时间戳顺序 - 最新的在上面
export const dummyChats: Chat[] = [
  {
    _id: "689abc1234567890abcdef12",
    userId: "689c6deed410acddc0d95a0e",
    userName: "aubergineGPT User", 
    name: "🎨 创意设计讨论",
    messages: [
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "帮我设计一个现代化的游戏设置",
        timestamp: Date.now() - 30 * 1000, // 30秒前 - 最新
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `好的，我会为你设计一个现代化的游戏设置。以下是一些建议：

## 🎮 核心功能设置

### 画面设置
- **分辨率**: 支持 4K、2K、1080p 自适应
- **帧率**: 60/120/144 FPS 可选
- **画质**: 极高/高/中/低 四档预设
- **光线追踪**: 实时反射、全局光照

### 控制设置
- **键位绑定**: 完全自定义
- **鼠标灵敏度**: 精确调节
- **手柄支持**: Xbox/PS5 手柄适配

### 音频设置
- **3D 音效**: 7.1 环绕声
- **音量分离**: 背景音乐/音效/语音独立调节

### 界面设置
- **主题**: 暗色/亮色/自动切换
- **字体大小**: 小/中/大/特大
- **透明度**: UI 元素透明度调节

是否需要我详细设计某个特定部分？`,
        timestamp: Date.now() - 15 * 1000, // 15秒前
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "无序列表和有序列表",
        timestamp: Date.now() - 10 * 1000, // 10秒前
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `好问题！让我展示一下各种列表格式：

## 📝 无序列表示例

### 基本无序列表
- 第一项内容
- 第二项内容
- 第三项内容

### 嵌套无序列表
- 主要功能
  - 子功能A
  - 子功能B
    - 详细功能1
    - 详细功能2
- 次要功能
  - 子功能C
  - 子功能D

### 混合内容列表
- **重要提醒**: 这是加粗文本
- *斜体说明*: 这是斜体文本
- \`代码示例\`: console.log('Hello World')
- 普通文本内容

## 🔢 有序列表示例

### 基本有序列表
1. 第一步操作
2. 第二步操作
3. 第三步操作

### 嵌套有序列表
1. 准备阶段
   1. 检查环境
   2. 安装依赖
   3. 配置参数
2. 执行阶段
   1. 启动服务
   2. 运行测试
3. 完成阶段

### 混合列表类型
1. **主要步骤**
   - 准备工作
   - 执行任务
2. **次要步骤**
   - 检查结果
   - 清理环境

## ✅ 任务清单样式
- [x] 已完成的任务
- [x] 另一个完成的任务
- [ ] 待完成的任务
- [ ] 另一个待完成的任务

这样的列表格式在聊天中会更加清晰易读！`,
        timestamp: Date.now() - 5 * 1000, // 5秒前
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "代码块支持",
        timestamp: Date.now() - 3 * 1000, // 3秒前
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: `当然！我支持多种编程语言的代码块渲染：

## 💻 代码块示例

### JavaScript/TypeScript
\`\`\`javascript
// React Hook 示例
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    document.title = \`计数: \${count}\`
  }, [count])

  return (
    <div className="app">
      <h1>当前计数: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        增加
      </button>
    </div>
  )
}
\`\`\`

### Python
\`\`\`python
# 数据处理示例
import pandas as pd
import numpy as np

def analyze_data(data):
    """分析数据并返回统计信息"""
    result = {
        'mean': np.mean(data),
        'std': np.std(data),
        'count': len(data)
    }
    return result

# 使用示例
data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
stats = analyze_data(data)
print(f"平均值: {stats['mean']:.2f}")
\`\`\`

### CSS
\`\`\`css
/* 现代化的卡片样式 */
.card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card-title {
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
\`\`\`

### JSON
\`\`\`json
{
  "name": "aubergineGPT",
  "version": "1.0.0",
  "description": "智能对话助手",
  "features": [
    "多语言代码高亮",
    "Markdown 渲染",
    "暗黑模式支持",
    "响应式设计"
  ],
  "config": {
    "theme": "auto",
    "language": "zh-cn",
    "maxTokens": 4096
  }
}
\`\`\`

### 行内代码
除了代码块，我还支持行内代码：\`console.log('Hello World')\`、\`useState()\`、\`npm install\` 等。

所有代码都支持语法高亮和主题切换！🎨`,
        timestamp: Date.now() - 1 * 1000, // 1秒前
      }
    ],
    createdAt: new Date(Date.now() - 30 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 30 * 1000).toISOString(),
  },
  {
    _id: "689ccb9016a922dd57a23fce",
    userId: "689c6deed410acddc0d95a0e",
    userName: "aubergineGPT User",
    name: "💬 欢迎对话",
    messages: [
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "你好，茄子GPT！",
        timestamp: Date.now() - 2 * 60 * 1000, // 2分钟前
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: "你好！🍆 我是茄子GPT，一个智能对话助手。我可以帮你回答问题、生成图片，还能进行各种有趣的对话。有什么我可以帮助你的吗？",
        timestamp: Date.now() - 1 * 60 * 1000, // 1分钟前
      }
    ],
    createdAt: new Date(Date.now() - 2 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 1 * 60 * 1000).toISOString(),
  },
  {
    _id: "689de4bbaa932dc3a8ef6cd7",
    userId: "689c6deed410acddc0d95a0e",
    userName: "aubergineGPT User",
    name: "🍆 茄子AI图片生成",
    messages: [
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "生成一个茄子在花园里的图片",
        timestamp: Date.now() - 33 * 60 * 1000, // 33分钟前 - 最老
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image11,
        timestamp: Date.now() - 32 * 60 * 1000, // 32分钟前
      }
    ],
    createdAt: new Date(Date.now() - 33 * 60 * 1000).toISOString(),
    updatedAt: new Date(Date.now() - 32 * 60 * 1000).toISOString(),
  }
];

// ...rest of the code remains the same...

// ============ 工具函数 ============

/**
 * 根据计划ID获取计划详情
 */
export const getPlanById = (planId: string): Plan | undefined => {
  return dummyPlans.find(plan => plan._id === planId);
};

/**
 * 根据用户ID获取用户的聊天记录
 */
export const getChatsByUserId = (userId: string): Chat[] => {
  return dummyChats.filter(chat => chat.userId === userId);
};

/**
 * 获取最新的聊天记录（按更新时间排序）
 */
export const getLatestChats = (limit: number = 10): Chat[] => {
  return [...dummyChats]
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, limit);
};

/**
 * 统计用户的消息数量
 */
export const getUserMessageCount = (userId: string): number => {
  return dummyChats
    .filter(chat => chat.userId === userId)
    .reduce((total, chat) => total + chat.messages.length, 0);
};

// ============ 常量 ============

export const APP_CONFIG = {
  name: 'aubergineGPT',
  version: '1.0.0',
  description: '一只茄子GPT - 智能对话与图片生成',
  author: 'auberginewly',
  defaultTheme: 'light' as const,
  maxCredits: 10000,
  freeTrialCredits: 50,
} as const;

export const ROUTES = {
  home: '/',
  chat: '/chat',
  plans: '/plans',
  credits: '/credits',
  login: '/login',
  register: '/register',
  profile: '/profile',
} as const;

export default assets