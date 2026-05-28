import React from 'react';
import { assets } from '../assets/assets';

const Sidebar = () => {
  return (
    // 'h-full' ensures the sidebar takes the available height
    // 'hidden lg:flex' hides it on small screens and shows on large screens
    <div className='w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex'>
      
      {/* 1. Navigation Section (Fixed height) */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around p-4'>
        <div className='flex items-center gap-3 pl-4 cursor-pointer hover:text-white transition'>
          <img className='w-6' src={assets.home_icon} alt="Home" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-4 cursor-pointer hover:text-white transition'>
          <img className='w-6' src={assets.search_icon} alt="Search" />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* 2. Library Section (flex-1 forces this to fill all remaining space) */}
      <div className='bg-[#121212] flex-1 rounded p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Library" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5 cursor-pointer' src={assets.arrow_icon} alt="Arrow" />
            <img className='w-5 cursor-pointer' src={assets.plus_icon} alt="Plus" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-black flex flex-col justify-start items-start gap-1 pl-4' >
            <h1>Create your first playlist</h1>
            <p className='font-light'> It's easy, just click the "+" button and start adding songs!</p>
            <button className='bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 cursor-pointer transition'>
              Create Playlist
            </button>
        </div>

        <div className='p-4 bg-[#242424] m-2 rounded font-black flex flex-col justify-start items-start gap-1 pl-4 mt-4' >
            <h1>Let's find some podcasts to follow</h1>
            <p className='font-light'>We'll keep you updated with the latest episodes!</p>
            <button className='bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 cursor-pointer transition'>
              Browse Podcasts
            </button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;