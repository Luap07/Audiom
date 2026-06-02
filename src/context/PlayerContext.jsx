import { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
  const audioRef = useRef(null);

  const [track, setTrack] = useState(songsData?.[0] || null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [time, setTime] = useState({
    currentTime: { second: 0, minute: 0 },
    totalTime: { second: 0, minute: 0 },
  });

  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [shuffle, setShuffle] = useState(false);

  // ▶ PLAY
  const play = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setIsPlaying(true);
    } catch (err) {
      console.log("Play blocked:", err);
    }
  };

  // ⏸ PAUSE
  const pause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    setIsPlaying(false);
  };

  const togglePlay = () => {
    isPlaying ? pause() : play();
  };

  // 🎵 LOAD TRACK
  const loadTrack = (index, autoPlay = true) => {
    const safeIndex = (index + songsData.length) % songsData.length;
    const newTrack = songsData[safeIndex];

    setTrack(newTrack);

    const audio = audioRef.current;
    if (!audio || !newTrack?.previewUrl) return;

    setTimeout(() => {
      audio.pause();
      audio.src = newTrack.previewUrl;
      audio.load();

      if (autoPlay) {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => {});
      }
    }, 0);
  };

  // ⏭ NEXT
  const next = () => {
    const i = songsData.findIndex((t) => t.id === track?.id);

    if (shuffle) {
      loadTrack(Math.floor(Math.random() * songsData.length));
    } else {
      loadTrack(i + 1);
    }
  };

  // ⏮ PREV
  const prev = () => {
    const i = songsData.findIndex((t) => t.id === track?.id);
    loadTrack(i - 1);
  };

  // 🎯 SEEK
  const seekSong = (e) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    audio.currentTime = (e.target.value / 100) * audio.duration;
  };

  // 🔊 VOLUME
  const changeVolume = (e) => {
    setVolume(e.target.value);
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // ⏱ TIME UPDATE
  const onPlaying = () => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;

    const ct = audio.currentTime;
    const dt = audio.duration;

    setProgress((ct / dt) * 100);

    setTime({
      currentTime: {
        second: Math.floor(ct % 60),
        minute: Math.floor(ct / 60),
      },
      totalTime: {
        second: Math.floor(dt % 60),
        minute: Math.floor(dt / 60),
      },
    });
  };

  return (
    <PlayerContext.Provider
      value={{
        audioRef,
        track,
        setTrack,

        isPlaying,
        play,
        pause,
        togglePlay,

        next,
        prev,

        time,
        progress,

        seekSong,
        volume,
        changeVolume,

        shuffle,
        setShuffle,

        onPlaying,
        loadTrack,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;