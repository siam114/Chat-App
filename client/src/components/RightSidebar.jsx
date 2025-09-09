import React from 'react'
import assets from '../assets/assets'

const RightSideBar = ({selectedUser}) => {
  return selectedUser &&  (
    <div className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${selectedUser ? 'max-md:hidden' : ''}`}>

      <div className='pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto'>
        <img src={selectedUser?.profilePic || assets.avatar_icon} className='w-20 aspect-[1/1] rounded-full' alt="" />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>
          <p className='w-2 h-2 rounded-full bg-gray-500'></p>
          {selectedUser.fullName}
          </h1>
          <p className='px-10 mx-auto'>{selectedUser.bio}</p>
      </div>

      <hr className='my-4 border-[#ffffff50]' />

      <div className='px-5 text-xs'>
        <p>Media</p>
        <div className='mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-4 opacity-80'>
          
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
