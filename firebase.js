// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "martinsalvadorportafolio.firebaseapp.com",
  projectId: "martinsalvadorportafolio",
  storageBucket: "martinsalvadorportafolio.firebasestorage.app",
  messagingSenderId: "1075068396114",
  appId: "1:1075068396114:web:589efeecd728f13aa1b58b",
  measurementId: "G-RWSZLHM26Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);