import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
 
const firebaseConfig = {
  apiKey: "AIzaSyAnmgnvPaEX45dMkgo5NfxuAroFy53mdQs",
  authDomain: "travel-tales-14ffa.firebaseapp.com",
  projectId: "travel-tales-14ffa",
  storageBucket: "travel-tales-14ffa.appspot.com",
  messagingSenderId: "754435486770",
  appId: "1:754435486770:web:104daa3aff9f98a09ab82b"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);