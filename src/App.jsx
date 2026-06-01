import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import Auth from './components/Auth';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden flex flex-col">

      {/* Global audio player (safe fallback) */}
      <audio
        ref={audioRef}
        src={track?.file || ""}
        preload="auto"
      />

      <Routes>

        {/* Home redirect */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Auth page */}
        <Route path="/auth" element={<Auth />} />

        {/* Main app */}
        <Route
          path="/home/*"
          element={
            <div className="h-full w-full flex flex-col overflow-hidden">

              <div className="flex flex-1 overflow-hidden">

                <Sidebar />

                <Display />

              </div>

              <Player />

            </div>
          }
        />

        {/* fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />

      </Routes>
    </div>
  );
};

export default App;