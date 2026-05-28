import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <>
      <div className='w-full flex justify-between items-center font-semibold'> 
        <div className='flex items-center gap-3'>
            <img className='w-8 h-10 cursor-pointer rounded-2xl bg-black p-2' src={assets.arrow_left} alt="" />

            
            
            </div>
      </div>
    </>
  )
}

export default Navbar
