import React from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import logo from '../assets/audiom_logo.png';
import bgVideo from '../assets/bg_video.mp4';

const LandingPage = () => {
  const navigate = useNavigate(); // 2. Initialize navigate

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 h-full w-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 h-full w-full bg-black/50"></div>

      {/* Centered Logo */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <img 
          src={logo} 
          alt="Audiom Logo" 
          className="w-64 md:w-80" 
        />
        {/* 3. Add onClick to the button */}
        <button 
          onClick={() => navigate('/auth')} 
          className="mt-10 rounded-full bg-blue-600 px-8 py-3 font-bold text-white transition hover:bg-blue-500"
        >
          Enter Audiom
        </button>
      </div>
    </div>
  );
};

export default LandingPage;