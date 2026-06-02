<<<<<<< HEAD
import React from "react";
import { useNavigate } from "react-router-dom";
=======
import React from 'react';
import { useNavigate } from 'react-router-dom';
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

<<<<<<< HEAD
  return (
    <div
      onClick={() => navigate(`/home/album/${id}`)}
      className="min-w-[200px] bg-[#181818] p-3 rounded-lg hover:bg-[#282828] cursor-pointer"
=======
  const handleClick = () => {
    if (!id) return; // safety check
    navigate(`/home/album/${id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-all duration-200"
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
    >
      <img
        src={image}
        alt={name}
<<<<<<< HEAD
        className="w-full h-[180px] object-cover rounded-md"
      />

      <h3 className="font-bold mt-3">{name}</h3>

      <p className="text-gray-400 text-sm">{desc}</p>
=======
        className="w-full h-[180px] object-cover rounded"
      />

      <p className="font-bold mt-2 mb-1 truncate">
        {name || "Unknown Album"}
      </p>

      <p className="text-slate-200 text-sm truncate">
        {desc || "Unknown Artist"}
      </p>
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
    </div>
  );
};

export default AlbumItem;