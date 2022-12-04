import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdaPj8OTnr3DNt6j9h8bQFlBIF7A5mZEk",
  authDomain: "whats-fb4fa.firebaseapp.com",
  projectId: "whats-fb4fa",
  storageBucket: "whats-fb4fa.appspot.com",
  messagingSenderId: "50465670068",
  appId: "1:50465670068:web:de066f256339e483ed28e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
