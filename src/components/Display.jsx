import React, { useEffect } from 'react'; // Fix 1: Added useEffect
import { Routes, Route, useLocation } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
import { albumsData } from '../assets/assets';

const Display = () => {
  const displayRef = React.useRef();
  const location = useLocation();
  
  const isAlbum = location.pathname.includes("/album");
  const albumId = isAlbum ? location.pathname.split("/").pop() : "";
  const albumData = isAlbum ? albumsData[Number(albumId)] : null;
  const bgColor = albumData ? albumData.bgColor : "#121212";

  useEffect(() => {
    if (isAlbum) {
      // Fix 2: Use backgroundImage for gradients
      displayRef.current.style.backgroundImage = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.backgroundColor = '#121212';
    }
  })

  return (
    <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default Display;