import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // apiKey: "AIzaSyD-5vOFFd2L3fyYDOIVrNKuHOCj42ADOFE",
  // authDomain: "chat-eb74a.firebaseapp.com",
  // projectId: "chat-eb74a",
  // storageBucket: "chat-eb74a.appspot.com",
  // messagingSenderId: "868749012732",
  // appId: "1:868749012732:web:589bea6e4d5d2bb4f5f179"
  apiKey: "AIzaSyCP8p3ASRz6K3OWwTm5VAdwujwbMaM4Fs8",
  authDomain: "lakshay-4e53f.firebaseapp.com",
  projectId: "lakshay-4e53f",
  storageBucket: "lakshay-4e53f.appspot.com",
  messagingSenderId: "829532256758",
  appId: "1:829532256758:web:838bc92a51b14200316fd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
