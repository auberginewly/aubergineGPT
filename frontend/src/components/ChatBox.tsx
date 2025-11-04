import {useEffect, useRef, useState} from 'react'
import {useAppContext} from '../context/AppContext'

import assets from '../assets/assets'
import Message from './Message'


interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

const ChatBox = () => {
  // 消息容器引用
  const containRef = useRef<HTMLDivElement>(null)

  const {selectedChat, theme} = useAppContext()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(false)  
  const [isPublished, setIsPublished] = useState<boolean>(false)
  const [mode, setMode] = useState<'text' | 'image'>('text')
  const [prompt, setPrompt] = useState<string>('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Handle form submission logic here
  }

  // 更新消息列表当 selectedChat 变化时
  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages)
    }
  }, [selectedChat])

  // 新消息时自动滚动到底部
  useEffect(() => {
    if (containRef.current) {
      containRef.current.scrollTo({
        top: containRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages])

  return (
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'> 
      {/* 聊天消息 */}
      <div ref={containRef} className='flex-1 mb-5 overflow-y-scroll'>
        {/* 提示页面 */}
        {messages.length === 0 && (
          <div className='h-full flex flex-col items-center justify-center gap-2 text-primary'>
            <img src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} />
            <p className='mt-5 text-4xl sm:text-6xl text-center text-gray-400 dark:text-white'>
              有什么想问的吗？
            </p>
          </div>
        )}

        {/* 消息列表 */}
        {messages.map((msg,index) =><Message key={index} message={msg}/>) }
      </div>

      {/* 发布生成的图片到社区 */}
      {mode === 'image' && (
        <label className='inline-flex items-center gap-2 mb-3 text-sm mx-auto'>
          <p className='text-xs'>发布生成的图片到社区</p>
          <input type='checkbox' className='cursor-pointer' checked={isPublished} 
          onChange={(e) => setIsPublished(e.target.checked)} />
        </label>
      )}

      {/* prompt 输入框 */}
      <form 
        onSubmit={handleSubmit} 
        className="bg-primary/20 dark:bg-[#583C79]/30 border border-primary dark:border-[#80609F]/30 rounded-full w-full max-w-2xl p-3 pl-4 mx-auto flex gap-4 items-center"
      >
        {/* Mode Selection */}
        <select 
          onChange={(e) => setMode(e.target.value as 'text' | 'image')} 
          value={mode}
          className="text-sm pl-3 pr-2 outline-none bg-transparent text-gray-700 dark:text-white"
        >
          <option className="dark:bg-purple-900 bg-white" value="text">文本</option>
          <option className="dark:bg-purple-900 bg-white" value="image">图片</option>
        </select>

        {/* Text Input */}
        <input 
          onChange={(e) => setPrompt(e.target.value)} 
          value={prompt} 
          type="text"
          placeholder="在此输入提示词..." 
          className="flex-1 w-full text-sm outline-none bg-transparent text-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
          required 
        />

        {/* Submit Button */}
        <button 
          type="submit"
          disabled={loading || !prompt.trim()}
          className="disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <img 
            src={loading ? assets.stop_icon : assets.send_icon} 
            className="w-8 cursor-pointer invert dark:invert-0" 
            alt={loading ? "Stop" : "Send"} 
          />
        </button>
      </form>
    </div>
  )
}

export default ChatBox
