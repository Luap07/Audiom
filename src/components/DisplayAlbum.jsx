<<<<<<< HEAD
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const { setTrack } = useContext(PlayerContext);

=======
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DisplayAlbum = () => {
  const { id } = useParams();
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
  const [album, setAlbum] = useState(null);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchAlbum = async () => {
      try {
<<<<<<< HEAD
        const res = await fetch(
          `https://itunes.apple.com/lookup?id=${id}&entity=song`
        );

        const data = await res.json();

        if (!data.results || data.results.length === 0) return;

        setAlbum(data.results[0]);
        setTracks(data.results.slice(1));
      } catch (err) {
        console.log("Album fetch error:", err);
=======
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
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
      }
    };

    fetchAlbum();
  }, [id]);

  if (!album) {
<<<<<<< HEAD
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
=======
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
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
          </p>
        </div>
      </div>

<<<<<<< HEAD
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
=======
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
>>>>>>> 67ca65ae64ccc728643b4a9a184928bd2f506d13
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAlbum;