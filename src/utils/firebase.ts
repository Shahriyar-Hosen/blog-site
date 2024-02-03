// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "blog-app-7c0f9.firebaseapp.com",
  projectId: "blog-app-7c0f9",
  storageBucket: "blog-app-7c0f9.appspot.com",
  messagingSenderId: "1026448345283",
  appId: "1:1026448345283:web:dc4284e4974904d015ba76",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
