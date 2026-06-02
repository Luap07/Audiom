import React from 'react';
import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets';

const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (isLogin) => {
    navigate('/auth', { state: { isLogin } });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-2xl max-w-sm w-full border border-gray-800">
        
        {/* LOGO INSTEAD OF BIG IMAGE */}
        <div className="flex justify-center mb-6">
          <img src={assets.audiom_logo} alt="Audiom Logo" className="w-16 h-16" />
        </div>

        <h2 className="text-2xl font-bold mb-6 text-white leading-tight">
          Millions of songs.<br />Free on Audiom.
        </h2>
        
        <button 
          onClick={() => handleNavigate(true)} 
          className="w-full bg-blue-600 text-white font-bold py-3 rounded-full mb-4 hover:scale-105 transition duration-200"
        >
          Log in
        </button>
        
        <p className="text-gray-400 text-sm mb-8">
          New to Audiom?{" "} 
          <span 
            onClick={() => handleNavigate(false)} 
            className="text-white underline cursor-pointer hover:text-blue-400"
          >
            Sign up free
          </span>
        </p>
        
        <button 
          onClick={onClose} 
          className="text-gray-500 hover:text-white transition text-sm"
        >
          Settings
        </button>
      </div>
    </div>
  );
};

export default LogoutModal;