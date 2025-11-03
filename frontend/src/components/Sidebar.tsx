import { useAppContext } from '../context/AppContext'
import { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'


import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

interface SidebarProps {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}


const Sidebar = ({isMenuOpen, setIsMenuOpen}: SidebarProps) => {
  const {chats, user, theme, setTheme, setSelectedChat} = useAppContext()
  const navigate = useNavigate()
  const [search, setSearch] = useState('')

  const filteredChats = chats.filter((chat) => 
  chat.messages[0] ? chat.messages[0].content.toLowerCase().includes(search.toLowerCase()) : 
  chat.title.toLowerCase().includes(search.toLowerCase())
  ) 

  dayjs.extend(relativeTime)
  dayjs.locale('zh-cn')

  // 格式化时间显示
  const formatDate = (date: Date) => {
    return dayjs(date).fromNow()
  }
  
  return (  
    <div className={`flex flex-col h-screen min-w-72 p-5 dark:bg-linear-to-b from-[#242124]/30 to-[#000000]/30 border-r border-[#80609F]/30 backdrop-blur-3xl transition-all duration-500 max-md:absolute left-0 z-1
      ${!isMenuOpen && 'max-md:-translate-x-full'}`}>
      {/* Logo */}
      <img 
        src={theme === 'dark' ? assets.logo_full : assets.logo_full_dark} 
        alt="" 
        className='w-full max-w-48'
      />

      {/* 新对话按钮 */}
      <button 
        className='flex justify-center items-center w-full py-2 mt-10 text-white bg-gradient-to-r from-[#A456F7] to-[#3D81F6] text-sm rounded-md cursor-pointer'
        // onClick={createNewChat}
      >
        <span className='mr-2 text-xl'>+</span> 新对话
      </button>      

      {/* 搜索对话框 */}
      <div className='flex items-center gap-2 p-3 mt-4 border border-gray-400 dark:border-white/20 rounded-md'>
        <img src={assets.search_icon} className='w-4 not-dark:invert' alt="" />
        <input 
          onChange={(e) => setSearch(e.target.value)} 
          value={search} 
          type="text" 
          placeholder='搜索对话' 
          className='text-xs placeholder:text-gray-400 outline-none flex-1 bg-transparent'
        />
      </div>

      {/* 最近对话列表 */}
      {chats.length > 0 && <p className='mt-4 text-sm'>最近对话</p>}
      <div className='space-y-3 flex-1 overflow-y-scroll mt-3 text-sm'>
        {filteredChats.map((chat) => (
          <div 
            key={chat.id} 
            className='p-2 px-4 dark:bg-[#57317C]/10 border border-gray-300 dark:border-[#80609F]/15 rounded-md cursor-pointer flex justify-between group'
            // 选中点击的聊天 回到首页并设置选中的聊天 移动端关闭菜单
            onClick={() => {navigate('/'); setSelectedChat(chat); setIsMenuOpen(false)}}
          >
            <div>
              <p className='truncate w-full'>
                {chat.messages.length > 0 ? chat.messages[0].content.slice(0, 32) : chat.title}
              </p>
              <p className='text-xs text-gray-500 dark:text-[#B1A6C0]'>
                {formatDate(chat.updatedAt) }
              </p>
            </div>
            <img 
              src={assets.bin_icon} 
              alt="删除" 
              className='hidden group-hover:block w-4 cursor-pointer not-dark:invert'
            />
          </div>
        ))}
      </div>

      {/* 社区图片 */}
      <div 
        onClick={() => {navigate('/community'); setIsMenuOpen(false)}} 
        className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all'
      >
        <img src={assets.gallery_icon} className='w-4.5 not-dark:invert' alt="" />
        <div className='flex flex-col text-sm'>
          <p>社区图片</p>
        </div>
      </div>

      {/* 积分购买选项 */}
      <div 
        onClick={() => {navigate('/credits'); setIsMenuOpen(false)}}
        className='flex items-center gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer hover:scale-103 transition-all'
      >
        <img src={assets.diamond_icon} className='w-4.5 dark:invert' alt="" />
        <div className='flex flex-col text-sm'>
          <p>积分：{user?.credits}</p>
          <p className='text-xs text-gray-400'>购买积分来使用茄子GPT</p>
        </div>
      </div>

      {/* 暗色模式切换 */}
      <div className='flex items-center justify-between gap-2 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md'>
        <div className='flex items-center gap-2 text-sm'>
          <img src={assets.theme_icon} className='w-4 not-dark:invert' alt="" />
          <p>切换明暗主题</p>
        </div>
        <label className='relative inline-flex cursor-pointer'>
          <input 
            type="checkbox" 
            className="sr-only peer" 
            checked={theme === 'dark'}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          />
          <div className='w-9 h-5 bg-gray-400 rounded-full peer-checked:bg-purple-600 transition-all relative'></div>
          <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform peer-checked:translate-x-4'></span>          
        </label>
      </div>

      {/* 用户账号信息 */}
      <div className='flex items-center gap-3 p-3 mt-4 border border-gray-300 dark:border-white/15 rounded-md cursor-pointer group'>
        <img src={assets.user_icon} className='w-7 rounded-full' alt="" />
        <p className='flex-1 text-sm dark:text-primary truncate'>
          {user ? user.name : 'Login your account'}
        </p>
        {user && (
          <img 
            src={assets.logout_icon} 
            className='h-5 cursor-pointer hidden not-dark:invert group-hover:block'
            alt=""
            onClick={(e) => {
              e.stopPropagation()
              // logout()
            }}
          />
        )}


      </div>

      {/* 移动端隐藏sidebar */}
      <img 
        src={assets.close_icon} 
        className='absolute top-3 right-3 size-5 cursor-pointer not-dark:invert md:hidden'
        alt=""
        onClick={() => setIsMenuOpen(false)}
      />

        
    </div>

  )
}

export default Sidebar
