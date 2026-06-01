import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">

      {/* TOP NAV - Reduced gap for a tighter feel */}
      <div className="bg-[#121212] rounded p-4 flex flex-col gap-4">

        {/* LOGO AREA - Aligned to match the Audiomack style */}
        <div className="px-2 py-2 flex items-center justify-center ">
          <img
            src={assets.audiom_bg} // Ensure this is your horizontal logo
            alt="Audiomack"
            className="w-36 cursor-pointer" 
            onClick={() => navigate("/home")}
          />
        </div>

        {/* NAV ITEMS */}
        <div className="flex flex-col gap-1"> {/* Tightened gap here */}

          {/* HOME */}
          <div
            onClick={() => navigate("/home")}
            className="flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer hover:bg-[#1f1f1f] transition"
          >
            <img className="w-6 h-6" src={assets.home_icon} alt="Home" />
            <p className="font-semibold text-sm">Home</p>
          </div>

          {/* SEARCH */}
          <div
            onClick={() => navigate("/search")}
            className="flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer hover:bg-[#1f1f1f] transition"
          >
            <img className="w-6 h-6" src={assets.search_icon} alt="Search" />
            <p className="font-semibold text-sm">Search</p>
          </div>
        </div>
      </div>

      {/* LIBRARY */}
      <div className="bg-[#121212] flex-1 rounded p-4"> {/* Reduced top margin */}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img className="w-6 h-6" src={assets.stack_icon} alt="Library" />
            <p className="font-semibold text-sm">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-4 cursor-pointer" src={assets.arrow_icon} alt="Arrow" />
            <img className="w-4 cursor-pointer" src={assets.plus_icon} alt="Plus" />
          </div>
        </div>

        {/* CARDS */}
        <div className="flex flex-col gap-4">
          <div className="p-4 bg-[#1f1f1f] rounded">
            <h1 className="font-bold text-sm mb-1">Create your first playlist</h1>
            <p className="text-gray-300 text-xs mb-4">It's easy — click + and start adding songs.</p>
            <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition">
              Create Playlist
            </button>
          </div>

          <div className="p-4 bg-[#1f1f1f] rounded">
            <h1 className="font-bold text-sm mb-1">Let's find podcasts</h1>
            <p className="text-gray-300 text-xs mb-4">Stay updated with new episodes.</p>
            <button className="bg-white text-black text-xs font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;