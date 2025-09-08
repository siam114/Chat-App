import React from 'react'
import assets from '../assets/assets'

const ChatContainer = ({ selectedUser, setSelectedUser }) => {
  return (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt="" className='w-8 rounded-full' />
        <p className='flex-1 text-white text-lg flex items-center gap-2'>
          Martin Johnson
          <span className='h-2 w-2 rounded-full bg-green-500'></span>
        </p>
        <img onClick={()=>setSelectedUser(null)} src={assets.arrow_icon} alt="" className='md:hidden max-w-7'/>
        <img src={assets.help_icon} alt="" className='max-w-5 max-md:hidden' />
      </div>
    </div>
  )
}

export default ChatContainer
