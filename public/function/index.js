const functions = require('firebase-functions');
const admin = require('firebase-admin');
const axios = require('axios');

admin.initializeApp();

// Explicitly setting the region to 'us-central1'
exports.getSpotifyToken = functions.region('us-central1').https.onCall(async (data, context) => {
    const code = data.code;
    const clientId = functions.config().spotify.client_id;
    const clientSecret = functions.config().spotify.client_secret;
    const redirectUri = 'http://localhost:5173/callback';

    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'authorization_code',
                code: code,
                redirect_uri: redirectUri,
                client_id: clientId,
                client_secret: clientSecret
            },
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        return response.data;
    } catch (error) {
        throw new functions.https.HttpsError('internal', 'Unable to get token from Spotify');
    }
});