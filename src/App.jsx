<<<<<<< HEAD
import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Auth from "./components/Auth";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, onPlaying } = useContext(PlayerContext);
=======
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import Auth from './components/Auth';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden flex flex-col">

<<<<<<< HEAD
      {/* GLOBAL AUDIO ONLY */}
      <audio
        ref={audioRef}
        onTimeUpdate={onPlaying}
        onLoadedMetadata={onPlaying}
        preload="metadata"
      />

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/auth" element={<Auth />} />

=======
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
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
        <Route
          path="/home/*"
          element={
            <div className="h-full w-full flex flex-col overflow-hidden">

              <div className="flex flex-1 overflow-hidden">
<<<<<<< HEAD
                <Sidebar />
                <Display />
              </div>

              <Player />
=======

                <Sidebar />

                <Display />

              </div>

              <Player />

>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
            </div>
          }
        />

<<<<<<< HEAD
        <Route path="*" element={<Navigate to="/home" replace />} />
=======
        {/* fallback */}
        <Route path="*" element={<Navigate to="/home" replace />} />

>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
      </Routes>
    </div>
  );
};

export default App;