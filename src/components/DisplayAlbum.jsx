import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayAlbum = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
        // 1. Get token from your backend
        const tokenRes = await fetch("http://localhost:5000/api/token");
        const tokenData = await tokenRes.json();

        // 2. Get album info
        const albumRes = await fetch(
          `https://api.spotify.com/v1/albums/${id}`,
          {
            headers: {
              Authorization: `Bearer ${tokenData.access_token}`,
            },
          }
        );

        const albumData = await albumRes.json();

        setAlbum(albumData);
        setTracks(albumData.tracks.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
    return <p className="text-white p-4">Loading album...</p>;
  }

  return (
    <div className="text-white p-6">
      {/* Album Info */}
      <div className="flex gap-5 items-end">
        <img
          src={album.images[0]?.url}
          alt={album.name}
          className="w-48 h-48 object-cover rounded"
        />

        <div>
          <p className="text-sm text-gray-300">ALBUM</p>
          <h1 className="text-3xl font-bold">{album.name}</h1>
          <p className="text-gray-400 mt-2">
            {album.artists.map((a) => a.name).join(", ")}
          </p>
        </div>
      </div>

      {/* Tracks */}
      <div className="mt-8">
        {tracks.map((track, index) => (
          <div
            key={track.id}
            className="flex justify-between py-2 border-b border-gray-700"
          >
            <p>
              {index + 1}. {track.name}
            </p>

            <p className="text-gray-400">
              {Math.floor(track.duration_ms / 60000)}:
              {String(Math.floor((track.duration_ms % 60000) / 1000)).padStart(
                2,
                "0"
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;