import React, { useState } from 'react'
import assets from './../assets/assets';

const LoginPage = () => {

  const [currState, setCurrState] = useState('sign up')

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      {/* left */}
      <img src={assets.logo_big} alt="" className='w-[min(30vw,250px)]'/>

      {/* right */}
      <form className='border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg'>
         <h2 className='font-medium text-2xl flex justify-between items-center'>
          {currState}
          <img src={assets.arrow_icon} className='w-5 cursor-pointer' alt="" />
         </h2>
      </form>
    </div>
  )
}

export default LoginPage
