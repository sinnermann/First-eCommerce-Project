import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCPeKdSZ2nkfnY11p81UmLh0LDZoHwTxDo",
  authDomain: "eshop-78d2e.firebaseapp.com",
  projectId: "eshop-78d2e",
  storageBucket: "eshop-78d2e.appspot.com",
  messagingSenderId: "954186460939",
  appId: "1:954186460939:web:a151839a3f133f438bbc0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
