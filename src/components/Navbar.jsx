import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';
import LogoutModal from './LogoutModal';

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setShowMenu(false);
    setShowLogoutModal(true);
  };

  return (
    <>
      {showLogoutModal && <LogoutModal onClose={() => setShowLogoutModal(false)} />}
      
      <div className='w-full flex justify-between items-center font-semibold relative p-4'> 
        <div className='flex items-center gap-3'>
            <img onClick={() => navigate(-1)} className='w-8 h-10 cursor-pointer rounded-2xl bg-black p-2' src={assets.arrow_left} alt="Back" />
            <img onClick={() => navigate(1)} className='w-8 h-10 cursor-pointer rounded-2xl bg-black p-2' src={assets.arrow_right} alt="Forward" />      
        </div>

        <div className='flex items-center gap-4'>
          {isLoggedIn ? (
            <div className='relative'>
              <div 
                onClick={() => setShowMenu(!showMenu)} 
                className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer font-bold'
              >
                D
              </div>
              {showMenu && (
                <div className='absolute right-0 mt-2 w-48 bg-[#282828] rounded py-2 z-50 text-sm shadow-xl'>
                  <p className='px-4 py-2 hover:bg-[#3e3e3e] cursor-pointer'>Account</p>
                  <p className='px-4 py-2 hover:bg-[#3e3e3e] cursor-pointer'>Profile</p>
                  <p onClick={handleLogoutClick} className='px-4 py-2 hover:bg-[#3e3e3e] cursor-pointer text-red-400'>Log out</p>
                </div>
              )}
            </div>
          ) : (
            <p 
              onClick={() => navigate('/auth')} 
              className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer hover:bg-gray-200 transition'
            >
              Sign Up
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;