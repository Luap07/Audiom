import React from "react";
import { useNavigate } from "react-router-dom";

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/home/album/${id}`)}
      className="min-w-[200px] bg-[#181818] p-3 rounded-lg hover:bg-[#282828] cursor-pointer"
    >
      <img
        src={image}
        alt={name}
        className="w-full h-[180px] object-cover rounded-md"
      />

      <h3 className="font-bold mt-3">{name}</h3>

      <p className="text-gray-400 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;