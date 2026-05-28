import React from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      
      {/* Song Info */}
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12 rounded' src={songsData[0].image} alt="Song cover" />
        <div>
          <p>{songsData[0].name}</p>
          <p className='text-sm text-gray-400'>{songsData[0].desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Player Controls */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt='Shuffle' />
          <img className='w-4 cursor-pointer' src={assets.prev_icon} alt='Previous' />
          <img className='w-4 cursor-pointer' src={assets.play_icon} alt='Play' />
          <img className='w-4 cursor-pointer' src={assets.next_icon} alt='Next' />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt='Loop' />
        </div>
        
        {/* Single Progress Bar */}
        <div className='flex items-center gap-5'>
          <p>1:00</p>
          <div className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <div className='h-1 border-none w-0 bg-green-800 rounded-full'></div>
          </div>
          <p>3:02</p>
        </div>
      </div>

      {/* Extra Icons */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        <img className='w-4' src={assets.plays_icon} alt="Plays" />
        <img className='w-4' src={assets.mic_icon} alt="Mic" />
        <img className='w-4' src={assets.volume_icon} alt="Plays" />
        <img className='w-4' src={assets.queue_icon} alt="Queue" />
        <img className='w-4' src={assets.speaker_icon} alt="Speaker" />
          <div className='w-20 bg-slate-50 h-1 rounded'>

          </div>
          <img className='w-4' src={assets.mini_player_icon} alt="Plays" />
        <img className='w-4' src={assets.zoom_icon} alt="Plays" />

      </div>
      
    </div>
  );
};

export default Player;