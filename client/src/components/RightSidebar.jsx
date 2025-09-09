import React from 'react'
import assets from '../assets/assets'

const RightSideBar = ({selectedUser}) => {
  return selectedUser &&  (
    <div>
      <div>
        <img src={selectedUser?.profilePic || assets.avatar_icon} className='w-20 aspect-[1/1] rounded-full' alt="" />
        <h1 className='px-10 text-xl font-medium mx-auto flex items-center gap-2'>{selectedUser.fullName}</h1>
      </div>
    </div>
  )
}

export default RightSideBar
