import axios from "axios";

export const searchYouTube = async (query) => {
  const res = await axios.get(
    `https://www.googleapis.com/youtube/v3/search`,
    {
      params: {
        part: "snippet",
        q: query,
        type: "video",
        maxResults: 1,
        key: import.meta.env.VITE_YT_API_KEY,
      },
    }
  );

  return res.data.items[0];
};