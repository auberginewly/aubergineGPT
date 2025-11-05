import { Routes, Route, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { assets } from './assets/assets' 
import { Toaster } from 'react-hot-toast'

import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import Loading from './pages/Loading'
import Login from './pages/Login'
import Signup from './pages/Signup'


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const {pathname} = useLocation()
  
  if (pathname === '/loading') {
    return <Loading />
  }

  // 判断是否为登录页面
  const isLoginPage = pathname === '/login'
  const isSignupPage = pathname === '/signup'

  return (
    <>
      {!isMenuOpen && !isLoginPage && !isSignupPage && 
      <img 
        src={assets.menu_icon} 
        className='absolute top-3 left-3 w-8 h-8 cursor-pointer md:hidden not-dark:invert' 
        onClick={() => setIsMenuOpen(true)} 
      />}
      <div className='dark:bg-linear-to-b from-[#242124] to-[#000000]
      dark:text-white'>
        <div className='flex h-screen w-screen'>
          {!isLoginPage && !isSignupPage && <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
      
      {/* Toast 通知组件 */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 2000,
          style: {
            background: 'var(--toast-bg)',
            color: 'var(--toast-color)',
            border: '1px solid var(--toast-border)',
          },
          success: {
            iconTheme: {
              primary: '#22c55e',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }}
      />
    </>
  )
}

export default App
