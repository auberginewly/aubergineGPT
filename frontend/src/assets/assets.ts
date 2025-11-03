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

export const dummyChats: Chat[] = [
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
        timestamp: 1755178179612,
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image11,
        timestamp: 1755178194747,
      }
    ],
    createdAt: "2025-11-03T13:29:31.398Z",
    updatedAt: "2025-11-03T13:29:54.753Z",
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
        timestamp: 1755106415912,
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: "你好！🍆 我是茄子GPT，一个智能对话助手。我可以帮你回答问题、生成图片，还能进行各种有趣的对话。有什么我可以帮助你的吗？",
        timestamp: 1755106420723,
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "生成一个程序员工作的图片",
        timestamp: 1755107475040,
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image1,
        timestamp: 1755107486680,
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "介绍一下 Web3 技术",
        timestamp: 1755158982894,
      },
      {
        isImage: false,
        isPublished: false,
        role: "assistant",
        content: "Web3 是下一代互联网技术，主要特点包括：\n\n🔸 **去中心化** - 基于区块链技术，没有单一控制方\n🔸 **用户拥有数据** - 用户真正拥有自己的数字资产\n🔸 **智能合约** - 自动执行的合约代码\n🔸 **Token 经济** - 通过代币激励用户参与\n🔸 **互操作性** - 不同平台间可以无缝交互\n\nWeb3 正在改变我们使用互联网的方式，从被动消费者变为主动拥有者！",
        timestamp: 1755158995829,
      }
    ],
    createdAt: "2025-11-03T17:29:52.421Z",
    updatedAt: "2025-11-03T18:39:19.046Z",
  },
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
        timestamp: 1755159264109,
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image3,
        timestamp: 1755159273878,
      },
      {
        isImage: false,
        isPublished: false,
        role: "user",
        content: "生成一个自然风景，要有很多树木",
        timestamp: 1755160243315,
      },
      {
        isImage: true,
        isPublished: true,
        role: "assistant",
        content: ai_image4,
        timestamp: 1755160254161,
      }
    ],
    createdAt: "2025-11-03T16:15:30.123Z",
    updatedAt: "2025-11-03T17:20:45.678Z",
  }
];

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