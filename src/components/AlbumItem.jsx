import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!id) return; // safety check
    navigate(`/home/album/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover rounded"
      />

      <p className="font-bold mt-2 mb-1 truncate">
        {name || "Unknown Album"}
      </p>

      <p className="text-slate-200 text-sm truncate">
        {desc || "Unknown Artist"}
      </p>
    </div>
  );
};

export default AlbumItem;