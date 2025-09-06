import React from 'react'
import Sidebar from '../components/Sidebar'
import ChatContainer from '../components/ChatContainer'
import RightSideBar from '../components/RightSideBar'

const HomePage = () => {
  return (
    <div className='border w-full h-screen sm:px-[10%] sm:py-[5%]'>
      <div>
        <Sidebar/>
        <ChatContainer/>
        <RightSideBar/>
      </div>
    </div>
  )
}

export default HomePage
