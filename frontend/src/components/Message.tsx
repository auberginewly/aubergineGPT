import { assets } from '../assets/assets'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useAppContext } from '../context/AppContext'

import toast from 'react-hot-toast'  

// 启用相对时间插件和中文本地化
dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

interface MessageProps {
  message: {
    id: string
    role: 'user' | 'assistant'
    content: string | { 
      text?: string
      image?: string
      type?: 'text' | 'image' | 'mixed' 
    }
    timestamp: Date
    isImage?: boolean
  }
}

const Message = ({ message }: MessageProps) => {
  const { theme } = useAppContext()
  
  // 使用 dayjs 格式化时间
  const formatTimestamp = (timestamp: Date) => {
    const messageTime = dayjs(timestamp)
    const now = dayjs()
    const diffInMinutes = now.diff(messageTime, 'minute')
    const diffInHours = now.diff(messageTime, 'hour')
    
    if (diffInMinutes < 1) {
      return '刚刚'
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}分钟前`
    } else if (diffInHours < 24) {
      return `${diffInHours}小时前`
    } else {
      // 超过24小时显示具体时间
      return messageTime.format('HH:mm')
    }
  }

  // 复制代码功能
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast.success('代码已复制到剪贴板！', {
        icon: '📋',
        style: {
          borderRadius: '8px',
          fontWeight: '500',
        },
      })
    } catch (err) {
      console.error('复制失败:', err)
      toast.error('复制失败，请重试', {
        icon: '❌',
      })
    }
  }

  // 自定义代码块渲染器
  const CodeBlock = ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '')
    const language = match ? match[1] : ''
    const isDark = theme === 'dark'
    const codeContent = String(children).replace(/\n$/, '')
    
    if (language) {
      return (
        <div className="code-block-wrapper">
          {/* 代码块头部 */}
          <div className="code-block-header">
            <span className="code-language">{language}</span>
            <button 
              className="copy-button"
              onClick={() => copyToClipboard(codeContent)}
              title="复制代码"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
              <span className="ml-1">复制</span>
            </button>
          </div>
          {/* 代码内容 */}
          <SyntaxHighlighter
            style={isDark ? oneDark : oneLight}
            language={language}
            PreTag="div"
            customStyle={{
              margin: 0,
              borderRadius: 0,
              background: 'transparent',
              padding: '1rem',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
            showLineNumbers={false}
            wrapLines={true}
            {...props}
          >
            {codeContent}
          </SyntaxHighlighter>
        </div>
      )
    }
    
    // 行内代码
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  }

  // 渲染消息内容
  const renderContent = () => {
    // 如果content是字符串
    if (typeof message.content === 'string') {
      // 检查是否为图片URL
      const isImageUrl = /\.(jpg|jpeg|png|gif|webp|svg)$/i.test(message.content)
      
      if (message.isImage || isImageUrl) {
        return (
          <img 
            src={message.content} 
            alt="" 
            className='w-full max-w-md mt-2 rounded-md'
            onError={(e) => {
              console.error('图片加载失败:', message.content)
              e.currentTarget.style.display = 'none'
            }}
          />
        )
      } else {
        return (
          <div className='text-sm dark:text-primary markdown-content'>
            <ReactMarkdown
              components={{
                code: CodeBlock,
                pre: ({ children }) => <div>{children}</div>
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>
        )
      }
    }
    
    // 如果content是对象
    if (typeof message.content === 'object' && message.content !== null) {
      const { text, image } = message.content
      
      return (
        <div className='flex flex-col gap-2'>
          {image && (
            <img 
              src={image} 
              alt="" 
              className='w-full max-w-md rounded-md'
              onError={(e) => {
                console.error('图片加载失败:', image)
                e.currentTarget.style.display = 'none'
              }}
            />
          )}
          {text && (
            <div className='text-sm dark:text-primary markdown-content'>
              <ReactMarkdown
                components={{
                  code: CodeBlock,
                  pre: ({ children }) => <div>{children}</div>
                }}
              >
                {text}
              </ReactMarkdown>
            </div>
          )}
        </div>
      )
    }

    // 默认情况
    return (
      <div className='text-sm dark:text-primary markdown-content'>
        内容格式错误
      </div>
    )
  }

  // 渲染用户消息内容（简化版，只处理字符串）
  const renderUserContent = () => {
    if (typeof message.content === 'string') {
      return message.content
    } else if (typeof message.content === 'object' && message.content.text) {
      return message.content.text
    }
    return '消息内容'
  }

  return (
    <div>
      {message.role === "user" ? (
        <div className='flex items-start justify-end my-4 gap-2'>
          <div className='flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl'>
            {/* 用户消息使用简化渲染 */}
            <p className='text-sm dark:text-primary'>{renderUserContent()}</p>
            <span className='text-xs text-gray-400 dark:text-[#B1A6C0]'>
              {formatTimestamp(message.timestamp)}
            </span>
          </div>
          <img src={assets.user_icon} alt="" className='w-8 rounded-full' />
        </div>
      ) : (
        <div className='inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md my-4'>
          {/* AI消息使用完整渲染 */}
          {renderContent()}
          <span className='text-xs text-gray-400 dark:text-[#B1A6C0]'>
            {formatTimestamp(message.timestamp)}
          </span>
        </div>
      )}
    </div>
  )
}

export default Message