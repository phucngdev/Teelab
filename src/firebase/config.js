import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.evn?.VITE_REACT_APP_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_REACT_APP_PJ_ID,
  databaseURL: "https://teelab-7b03c-default-rtdb.firebaseio.com",
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE,
  messagingSenderId: import.meta.env.VITE_REACT_APP_SENDER_ID,
  appId: import.meta.env.VITE_REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage(app);
