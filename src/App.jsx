import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import Auth from "./components/Auth";
import { PlayerContext } from "./context/PlayerContext";

const App = () => {
  const { audioRef, onPlaying } = useContext(PlayerContext);

  return (
    <div className="h-screen w-screen bg-black text-white overflow-hidden flex flex-col">

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

        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </div>
  );
};

export default App;