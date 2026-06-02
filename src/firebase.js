import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGySwdITPoYHn0pKZnbggakzMxJt5rRcQ",
  authDomain: "audiom-ab053.firebaseapp.com",
  projectId: "audiom-ab053",
  storageBucket: "audiom-ab053.appspot.com",
  messagingSenderId: "562778433972",
  appId: "1:562778433972:web:18f08a9a9894a629e9eae1",
  measurementId: "G-DKB7H1ZRBT"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);