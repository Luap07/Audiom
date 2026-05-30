import { useRef, createContext, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekBar = useRef(null);

  const [track, setTrack] = useState(songsData[0] || null);
  const [playStatus, setPlayStatus] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const play = () => {
    if (!audioRef.current) return;
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    if (!audioRef.current) return;
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = (id) => {
    const song = songsData[id];
    if (!song) return;

    setTrack(song);
  };

  const previous = () => {
    if (!track || track.id <= 0) return;

    setTrack(songsData[track.id - 1]);
  };

  const next = () => {
    if (!track || track.id >= songsData.length - 1) return;

    setTrack(songsData[track.id + 1]);
  };

  const seekSong = (e) => {
    if (
      !audioRef.current ||
      !audioRef.current.duration ||
      !seekBg.current
    )
      return;

    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    if (!audioRef.current || !track) return;

    audioRef.current.load();

    if (playStatus) {
      audioRef.current.play().catch(() => {});
    }
  }, [track]);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    const handleTimeUpdate = () => {
      if (!audio.duration) return;

      if (seekBar.current) {
        seekBar.current.style.width =
          (audio.currentTime / audio.duration) * 100 + "%";
      }

      setTime({
        currentTime: {
          minute: Math.floor(audio.currentTime / 60),
          second: Math.floor(audio.currentTime % 60),
        },
        totalTime: {
          minute: Math.floor(audio.duration / 60),
          second: Math.floor(audio.duration % 60),
        },
      });
    };

    audio.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    time,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;