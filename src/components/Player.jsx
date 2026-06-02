import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const context = useContext(PlayerContext);

  if (!context) return null;

  const {
    track,
    isPlaying,
    togglePlay,
    next,
    prev,
    progress,
    seekSong,
    time,
    volume,
    changeVolume,
    shuffle,
    setShuffle,
  } = context;

  if (!track) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full h-[90px] bg-[#121212] text-white flex items-center justify-between px-4 border-t border-[#2a2a2a]">

      {/* LEFT */}
      <div className="flex items-center gap-3 w-[25%]">

        <img
          src={
            track?.artworkUrl100 ||
            track?.image ||
            "https://dummyimage.com/60x60/111/fff&text=Music"
          }
          className="w-14 h-14 rounded-md object-cover"
          alt="cover"
          onError={(e) => {
            e.target.src =
              "https://dummyimage.com/60x60/111/fff&text=Music";
          }}
        />

        <div className="flex flex-col">
          <p className="text-sm font-semibold truncate w-[180px]">
            {track?.trackName || track?.name || "Unknown Track"}
          </p>
          <p className="text-xs text-gray-400 truncate w-[180px]">
            {track?.artistName || track?.artist || "Unknown Artist"}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center w-[50%]">

        <div className="flex items-center gap-5 mb-2">

          <button
            onClick={() => setShuffle(!shuffle)}
            className={`text-xs ${shuffle ? "text-blue-500" : "text-gray-400"}`}
          >
            🔀
          </button>

          <button onClick={prev} className="text-xl">⏮</button>

          <button
            onClick={togglePlay}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full w-8 h-8 flex items-center justify-center"
          >
            {isPlaying ? "⏸" : "▶"}
          </button>

          <button onClick={next} className="text-xl">⏭</button>

          <button className="text-xs text-gray-400">🔁</button>
        </div>

        {/* PROGRESS */}
        <div className="flex items-center gap-3 w-full">

          <span className="text-xs text-gray-400 w-10 text-right">
            {time.currentTime.minute}:
            {String(time.currentTime.second).padStart(2, "0")}
          </span>

          <input
            type="range"
            value={progress}
            onChange={seekSong}
            className="w-full accent-blue-500"
          />

          <span className="text-xs text-gray-400 w-10">
            {time.totalTime.minute}:
            {String(time.totalTime.second).padStart(2, "0")}
          </span>

        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-3 w-[25%] justify-end">

        <span className="text-sm">🔊</span>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={changeVolume}
          className="w-24 accent-blue-500"
        />
      </div>
    </div>
  );
};

export default Player;