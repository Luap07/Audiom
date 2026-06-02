<<<<<<< HEAD
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
=======
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DisplayHome from './DisplayHome';
import DisplayAlbum from './DisplayAlbum';
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13

const Display = () => {
  return (
    <div className="m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] w-full h-full">
<<<<<<< HEAD
      <Routes>
        <Route index element={<DisplayHome />} />

        <Route
          path="album/:id"
          element={<DisplayAlbum />}
        />

        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
=======
      
      <Routes>
        {/* Home page inside /home */}
        <Route path="/" element={<DisplayHome />} />

        {/* Album page inside /home/album/:id */}
        <Route path="album/:id" element={<DisplayAlbum />} />

        {/* fallback inside /home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
    </div>
  );
};

export default Display;