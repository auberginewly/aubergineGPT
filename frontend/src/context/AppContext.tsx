import { createContext, useContext } from "react"
import type { ReactNode } from "react"

// 定义 Context 的类型
interface AppContextType {
  // 在这里添加你需要的状态和方法
  // 例如：
  // theme: 'light' | 'dark'
  // setTheme: (theme: 'light' | 'dark') => void
}

// 定义 Provider 的 props 类型
interface AppContextProviderProps {
  children: ReactNode
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const value: AppContextType = {
    // 在这里实现你的状态和方法
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
