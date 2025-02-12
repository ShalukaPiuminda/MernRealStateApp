// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-645f9.firebaseapp.com",
  projectId: "mern-estate-645f9",
  storageBucket: "mern-estate-645f9.firebasestorage.app",
  messagingSenderId: "1055297446318",
  appId: "1:1055297446318:web:11cdf347b7f70c6ba2683f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);