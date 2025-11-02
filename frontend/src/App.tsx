import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Sidebar from './components/Sidebar'
import ChatBox from './components/ChatBox'
import Credits from './pages/Credits'
import Community from './pages/Community'

const App = () => {
  return (
    <>
      <div className='dark:bg-gradient-to-b from-[#242124] to-[#000000]
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
