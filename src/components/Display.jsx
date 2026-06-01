import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';

const Display = () => {
  return (
    <div className="m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] w-full h-full">
      
      <Routes>
        {/* Home page inside /home */}
        <Route path="/" element={<DisplayHome />} />

        {/* Album page inside /home/album/:id */}
        <Route path="album/:id" element={<DisplayAlbum />} />

        {/* fallback inside /home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </div>
  );
};

export default Display;