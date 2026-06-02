<<<<<<< HEAD
import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ image, name, desc, song }) => {
  const { setTrack } = useContext(PlayerContext);

  const handlePlay = () => {
    if (song?.previewUrl) {
      setTrack(song);
    } else {
      console.log("No preview URL found");
    }
  };

  return (
    <div
      onClick={handlePlay}
      className="group min-w-[220px] bg-[#181818] p-4 rounded-xl hover:bg-[#282828] transition-all duration-300 cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-lg">
        
        <img
          src={image}
          alt={name}
          className="w-full h-[220px] object-cover rounded-lg shadow-lg"
          onError={(e) => {
            e.target.src =
              "https://dummyimage.com/600x600/111/fff&text=No+Image";
          }}
        />

        <button className="absolute bottom-3 right-3 w-12 h-12 rounded-full bg-blue-700 text-white font-bold flex items-center justify-center opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
          ▶
        </button>
      </div>

      <h3 className="font-semibold text-white mt-4 truncate">
        {name || "Unknown Song"}
      </h3>

      <p className="text-gray-400 text-sm mt-1 truncate">
        {desc || "Unknown Artist"}
      </p>
    </div>
  );
};

export default SongItem;
=======
import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image, name, desc, id}) => {

  const {playWithId} = useContext(PlayerContext)

  return (
    <div onClick={() =>playWithId(id)} className='min-w-[180px] px-3 p-2 rounded cursor-pointer hover:bg-[#ffffff26]'>
      <img className='rounded' src={image} alt=''  />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
