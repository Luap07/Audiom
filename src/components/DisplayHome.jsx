import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";

const genres = [
  "afrobeats",
  "dance",
  "gospel",
  "pop",
  "hip hop",
  "rnb",
  "gospel",
  "rock",
  "latin",
  "kpop",
];

const upgradeImage = (url) => {
  if (!url) return "";

  return url
    .replace("100x100bb", "1000x1000bb")
    .replace("100x100", "1000x1000");
};

const DisplayHome = () => {
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMusic();
  }, []);

  const loadMusic = async () => {
    try {
      setLoading(true);

      let fetchedSongs = [];
      let fetchedAlbums = [];

      const requests = genres.map((genre) =>
        fetch(
          `https://itunes.apple.com/search?term=${encodeURIComponent(
            genre
          )}&entity=song&limit=15`
        ).then((res) => res.json())
      );

      const results = await Promise.all(requests);

      results.forEach((data) => {
        data.results?.forEach((item) => {
          if (item.trackId) {
            fetchedSongs.push({
              ...item,
              artworkUrl100: upgradeImage(item.artworkUrl100),
            });
          }

          if (item.collectionId) {
            fetchedAlbums.push({
              ...item,
              artworkUrl100: upgradeImage(item.artworkUrl100),
            });
          }
        });
      });

      const uniqueSongs = Array.from(
        new Map(
          fetchedSongs.map((song) => [song.trackId, song])
        ).values()
      );

      const uniqueAlbums = Array.from(
        new Map(
          fetchedAlbums.map((album) => [
            album.collectionId,
            album,
          ])
        ).values()
      );

      setSongs(uniqueSongs);
      setAlbums(uniqueAlbums);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center h-[70vh] text-white">
          Loading music...
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}
      <div className="relative h-[300px] rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-blue-900 via-blue-900 to-blue">
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 flex flex-col justify-center h-full px-10">
          <p className="uppercase tracking-widest text-blue-200 text-sm">
            Audiom Premium
          </p>

          <h1 className="text-6xl font-bold mt-3">
            Music For Everyone
          </h1>

          <p className="text-gray-200 mt-4 max-w-xl">
            Discover trending songs, albums and artists
            from around the world.
          </p>
        </div>
      </div>

      {/* TRENDING SONGS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5">
          Trending Worldwide
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {songs.slice(0, 20).map((song) => (
            <SongItem
              key={song.trackId}
              song={song}
              image={song.artworkUrl100}
              name={song.trackName}
              desc={song.artistName}
            />
          ))}
        </div>
      </section>

      {/* POPULAR ALBUMS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5">
          Popular Albums
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {albums.slice(0, 20).map((album) => (
            <AlbumItem
              key={album.collectionId}
              id={album.collectionId}
              image={album.artworkUrl100}
              name={album.collectionName}
              desc={album.artistName}
            />
          ))}
        </div>
      </section>

      {/* AFROBEATS */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5">
          Afrobeats Picks
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {songs
            .filter((song) =>
              song.primaryGenreName
                ?.toLowerCase()
                .includes("afro")
            )
            .slice(0, 20)
            .map((song) => (
              <SongItem
                key={song.trackId}
                song={song}
                image={song.artworkUrl100}
                name={song.trackName}
                desc={song.artistName}
              />
            ))}
        </div>
      </section>

      {/* NEW RELEASES */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-5">
          New Releases
        </h2>

        <div className="flex gap-5 overflow-x-auto pb-4">
          {albums.slice(20, 40).map((album) => (
            <AlbumItem
              key={album.collectionId}
              id={album.collectionId}
              image={album.artworkUrl100}
              name={album.collectionName}
              desc={album.artistName}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default DisplayHome;