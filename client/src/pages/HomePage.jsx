import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {

  const [selectedUser, setSelectedUser] = useState(false);

  return (
    <div className='border w-full h-screen sm:px-[10%] sm:py-[5%]'>
      <div className='backdrop-blur-xl border-2 border-gray-600 rounded-2xl overflow-hidden h-[100%] grid grid-cols-1 relative'>
        <Sidebar/>
        <ChatContainer/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default HomePage
