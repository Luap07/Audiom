// src/services/apiProxy.js
import { normalizeAlbum } from './dataMapper';

export const fetchAlbum = async (id, provider) => {
  try {
    // 1. Call your secure backend (Firebase Cloud Function)
    const url = `https://your-firebase-project.cloudfunctions.net/getAlbum?id=${id}&provider=${provider}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API call failed with status: ${response.status}`);
    }

    // 2. Parse the raw JSON
    const rawData = await response.json();

    // 3. Normalize the data before it ever touches your UI component
    return normalizeAlbum(provider, rawData);

  } catch (error) {
    console.error("API Proxy Fetch Error:", error);
    // Return null so the UI knows to show a fallback/loading state
    return null;
  }
};