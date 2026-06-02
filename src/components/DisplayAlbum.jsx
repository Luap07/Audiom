import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { setTrack } = useContext(PlayerContext);

  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        const res = await fetch(
          `https://itunes.apple.com/lookup?id=${id}&entity=song`
        );

        const data = await res.json();

        if (!data.results || data.results.length === 0) return;

        setAlbum(data.results[0]);
        setTracks(data.results.slice(1));
      } catch (err) {
        console.log("Album fetch error:", err);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return (
      <div className="text-white p-6">
        Loading album...
      </div>
    );
  }

  return (
    <div className="text-white p-6 overflow-y-auto">

      {/* Album Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-end">
        <img
          src={album.artworkUrl100?.replace("100x100", "500x500")}
          alt={album.collectionName}
          className="w-52 h-52 rounded-lg shadow-lg"
        />

        <div>
          <p className="text-sm text-gray-400 uppercase">
            Album
          </p>

          <h1 className="text-4xl font-bold mt-2">
            {album.collectionName}
          </h1>

          <p className="text-gray-400 mt-3">
            {album.artistName}
          </p>

          <p className="text-sm text-gray-500 mt-1">
            {album.primaryGenreName}
          </p>
        </div>
      </div>

      {/* Track List */}
      <div className="mt-10">
        {tracks.map((track, index) => (
          <div
            key={track.trackId}
            className="flex justify-between items-center py-3 border-b border-gray-800 hover:bg-gray-900 px-2 rounded"
          >
            <div>
              <p>
                {index + 1}. {track.trackName}
              </p>

              <p className="text-sm text-gray-400">
                {track.artistName}
              </p>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-gray-400">
                {Math.floor(track.trackTimeMillis / 60000)}:
                {String(
                  Math.floor(
                    (track.trackTimeMillis % 60000) / 1000
                  )
                ).padStart(2, "0")}
              </p>

              {track.previewUrl && (
                <button
                  onClick={() => setTrack(track)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                >
                  Play
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;