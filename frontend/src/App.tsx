import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'
import Loading from './pages/Loading'

const App = () => {
  const {pathname} = useLocation()
  if (pathname === '/loading') {
    return <Loading />
  }

  return (
    <>
      <div className='dark:bg-linear-to-b from-[#242124] to-[#000000]
      dark:text-white'>
        <div className='flex h-screen w-screen'>
          <Sidebar />
          <Routes>
            <Route path="/" element={<ChatBox />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
