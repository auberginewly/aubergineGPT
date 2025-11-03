import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import type { ReactNode } from "react"
import { dummyChats, dummyUserData, type User } from "../assets/assets"

// 本地聊天类型（适用于应用状态管理）
interface Chat {
  id: string
  title: string
  messages: Message[]
  createdAt: Date
  updatedAt: Date
}

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

// 定义 Context 的类型
interface AppContextType {
  // 用户状态
  user: User | null
  setUser: (user: User | null) => void
  
  // 聊天状态
  chats: Chat[]
  setChats: (chats: Chat[]) => void
  selectedChat: Chat | null
  setSelectedChat: (chat: Chat | null) => void
  
  // 主题状态
  theme: 'light' | 'dark'
  setTheme: (theme: 'light' | 'dark') => void
  
  // 导航功能
  navigate: ReturnType<typeof useNavigate>
}

// 定义 Provider 的 props 类型
interface AppContextProviderProps {
  children: ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const navigate = useNavigate()
  
  // 用户状态
  const [user, setUser] = useState<User | null>(null)
  
  // 聊天状态
  const [chats, setChats] = useState<Chat[]>([])
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null)
  
  // 主题状态 - 从 localStorage 读取或默认为 light
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return (savedTheme as 'light' | 'dark') || 'light'
  })

  // 初始化用户数据（开发阶段使用模拟数据）
  const initializeUser = () => {
    setUser(dummyUserData)
  }

  // 初始化用户聊天数据（开发阶段使用模拟数据）image.png
  const initializeUsersChats = () => {
    // 将 assets 中的聊天数据转换为本地格式
    const convertedChats: Chat[] = dummyChats.map(chat => ({
      id: chat._id,
      title: chat.name,
      messages: chat.messages.map(msg => ({
        id: `${msg.timestamp}`,
        content: msg.content,
        role: msg.role,
        timestamp: new Date(msg.timestamp)
      })),
      createdAt: new Date(chat.createdAt),
      updatedAt: new Date(chat.updatedAt)
    }))
    
    setChats(convertedChats)
    if (convertedChats.length > 0) {
      setSelectedChat(convertedChats[0])
    }
  }

  useEffect(() => {
    if (user) {
      initializeUsersChats()
    } else {
      setChats([])
      setSelectedChat(null)
    }
  },[user])

  // 应用启动时初始化用户（开发模式）
  useEffect(() => {
    // 在开发环境中自动加载模拟用户数据
    const savedUser = localStorage.getItem('user')
    if (!savedUser) {
      initializeUser()
    }
  }, [])

  // 保存主题到 localStorage
  useEffect(() => {
    localStorage.setItem('theme', theme)
    // 应用主题到 document
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const value: AppContextType = {
    // 用户状态
    user,
    setUser,
    
    // 聊天状态
    chats,
    setChats,
    selectedChat,
    setSelectedChat,
    
    // 主题状态
    theme,
    setTheme,
    
    // 导航功能
    navigate,
    
  }
  
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppContextProvider')
  }
  return context
}
