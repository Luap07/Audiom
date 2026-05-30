import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden">
      {/* Persistent Audio Tag */}
      <audio ref={audioRef} src={track?.file} preload="auto" />
      
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/home"
          element={
            <div className="h-full w-full flex flex-col">
              <div className="h-[90%] flex">
                <Sidebar />
                <Display />
              </div>
              <Player />
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;