// src/services/dataMapper.js

export const normalizeAlbum = (provider, rawData) => {
  // Define the standard structure your UI expects
  const standardAlbum = {
    id: rawData.id || "unknown",
    name: "Unknown",
    image: "",
    artist: "Various Artists",
    source: provider
  };

  // Map the fields based on the provider
  if (provider === 'spotify') {
    standardAlbum.name = rawData.name;
    standardAlbum.image = rawData.images?.[0]?.url || "";
    standardAlbum.artist = rawData.artists?.[0]?.name || "Unknown Artist";
  } else if (provider === 'youtube') {
    standardAlbum.name = rawData.snippet?.title || "Unknown";
    standardAlbum.image = rawData.snippet?.thumbnails?.high?.url || "";
    standardAlbum.artist = rawData.snippet?.channelTitle || "Unknown";
  }
  
  return standardAlbum;
};