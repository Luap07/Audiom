import React from 'react'
import { useNavigate } from 'react-router-dom' // Add this line
import { assets } from '../assets/assets'

const Navbar = () => {

  const navigate = useNavigate() 

  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'> 
        <div className='flex items-center gap-3'>
            <img onClick={() => navigate(-1)} className='w-8 h-10 cursor-pointer rounded-2xl bg-black p-2' src={assets.arrow_left} alt="" />
            <img onClick={() => navigate(1)} className='w-8 h-10 cursor-pointer rounded-2xl bg-black p-2' src={assets.arrow_right} alt="" />      
        </div>
        <div className='flex items-center gap-4'>
            <p className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer hover:bg-gray-300 transition-all duration-300'>Explore Premium</p>
            <p className='bg-gray-900 py-1 px-3 rounded-2xl text-[15px] cursor-pointer '>Install App</p>
            <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
        </div>
      </div>

      <div className='flex items-center gap-2 mt-4'>
        <p className='bg-white rounded-2xl text-black px-4 py-1 cursor-pointer'>All</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
        <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
      </div>
    </>
  )
}

export default Navbar