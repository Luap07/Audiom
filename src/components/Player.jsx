<<<<<<< HEAD
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
=======
import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
    // Added track to destructuring
    const { seekBar, seekBg, play, pause, playStatus, track, time, previous, next, seekSong } = useContext(PlayerContext);

    return (
        <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
            
            {/* Song Info */}
            <div className='hidden lg:flex items-center gap-4'>
                <img className='w-12 rounded' src={track.image} alt="Song cover" />
                <div>
                    <p>{track.name}</p>
                    <p className='text-sm text-gray-400'>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            {/* Player Controls */}
            <div className='flex flex-col items-center gap-1 m-auto'>
                <div className='flex gap-4'>
                    <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle' />
                    <img onClick={previous} className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous' />
                    
                    {/* Simplified: Only one play/pause logic block */}
                    {playStatus ? (
                        <img onClick={pause} className='w-4 cursor-pointer' src={assets.pause_icon} alt='Pause' />
                    ) : (
                        <img onClick={play} className='w-4 cursor-pointer' src={assets.play_icon} alt='Play' />
                    )}
                    
                    <img onClick={next} className='w-4 cursor-pointer' src={assets.next_icon} alt='Next' />
                    <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop' />
                </div>
                
                {/* Progress Bar */}
                <div className='flex items-center gap-5'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
                        <div ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'></div>
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
                </div>
            </div>

            {/* Extra Icons */}
            <div className='hidden lg:flex items-center gap-2 opacity-75'>
                <img className='w-4' src={assets.plays_icon} alt="Plays" />
                <img className='w-4' src={assets.mic_icon} alt="Mic" />
                <img className='w-4' src={assets.volume_icon} alt="Volume" />
                <img className='w-4' src={assets.queue_icon} alt="Queue" />
                <img className='w-4' src={assets.speaker_icon} alt="Speaker" />
                <div className='w-20 bg-slate-50 h-1 rounded'></div>
                <img className='w-4' src={assets.mini_player_icon} alt="Mini Player" />
                <img className='w-4' src={assets.zoom_icon} alt="Zoom" />
            </div>
        </div>
    );
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
};

export default Player;