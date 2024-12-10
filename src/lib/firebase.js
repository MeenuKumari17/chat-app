import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-d6e3f.firebaseapp.com",
  projectId: "chatapp-d6e3f",
  storageBucket: "chatapp-d6e3f.firebasestorage.app",
  messagingSenderId: "195364692683",
  appId: "1:195364692683:web:c698cea61f00447ea6f14e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();