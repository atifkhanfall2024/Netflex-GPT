// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2ekH4qAoNIT__4-PKiRuI4coOtrf11F8",
  authDomain: "netflixgpt-33f47.firebaseapp.com",
  projectId: "netflixgpt-33f47",
  storageBucket: "netflixgpt-33f47.firebasestorage.app",
  messagingSenderId: "1016470912669",
  appId: "1:1016470912669:web:eb697f333948a5245f5e74",
  measurementId: "G-BSM27F591J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { app, auth }; // Export the initialized app and auth instance
