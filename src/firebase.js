import { initializeApp } from "firebase/app";
import { getFirestore, initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-02Qg_f9pT6y4IPYt3jTvlm7qWBkFrXI",
  authDomain: "vetcare-d0c18.firebaseapp.com",
  projectId: "vetcare-d0c18",
  storageBucket: "vetcare-d0c18.firebasestorage.app",
  messagingSenderId: "1024970448021",
  appId: "1:1024970448021:web:367aa2d577fd57c290cf9c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// })
export const auth = getAuth(app);
