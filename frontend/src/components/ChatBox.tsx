import {useEffect, useState} from 'react'
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
  const {selectedChat, theme} = useAppContext()
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState<boolean>(false)  



  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages)
    }
  }, [selectedChat])

  return (
    <div className='flex-1 flex flex-col justify-between m-5 md:m-10 xl:mx-30 max-md:mt-14 2xl:pr-40'>
      
      {/* 聊天消息 */}
      <div className='flex-1 mb-5 overflow-y-scroll'>

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

      {/* prompt 输入框 */}
      <form action="">

      </form>
    </div>
  )
}

export default ChatBox
