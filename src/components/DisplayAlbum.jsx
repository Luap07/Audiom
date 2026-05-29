import React, { useContext } from 'react'; // Fix: Added useContext here
import Navbar from './Navbar';
import { useParams } from 'react-router-dom';
import { albumsData, songsData, assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const DisplayAlbum = () => {
    const { id } = useParams();
    const albumData = albumsData[id];
    
    // Now that useContext is imported, this will access the provider correctly
    const { playWithId } = useContext(PlayerContext);

    return (
        <div>
            <Navbar />
            <div className='mt-10 flex gap-8 flex-col md:flex-row md:items-end'>
                <img className='w-48 rounded' src={albumData.image} alt='' />
                <div className='flex flex-col'>
                    <p>Playlist</p>
                    <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <div className='mt-3 flex items-center gap-2'>
                        <img className='w-8 h-8 rounded-full' src={assets.audiom_logo} alt='Audiom Logo' />
                        <b className='font-bold'>Audiom</b>
                        <span>• 134,405 likes</span>
                        <b>• 10 songs,</b>
                        <span>about 2 hr 35 min</span>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
                <p><b className='mr-4'>#</b>Title</p>
                <p>Album</p>
                <p className='hidden sm:block'>Date Added</p>
                <img className='m-auto w-4' src={assets.clock_icon} alt='Clock' />
            </div>
            <hr />
            {
                songsData.map((item, index) => (
                    <div 
                        onClick={() => playWithId(item.id)} 
                        key={index} 
                        className='grid grid-cols-3 sm:grid-cols-4 gap-4 pl-2 py-2 items-center text-[#7a7a7a] hover:bg-[#ffffff26] cursor-pointer'
                    >
                       <p className='text-white'>
                        <b className='text-[#a7a7a7] mr-4'>{index + 1}</b>
                        <img className='inline w-10 mr-5' src={item.image} alt='' />
                        {item.name}
                        </p>
                        <p className='text-[15px]'>{albumData.name}</p>
                        <p className='text-[15px] hidden sm:block'>5 days ago</p>
                        <p className='text-[15px] text-center'>{item.duration}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default DisplayAlbum;