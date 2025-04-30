// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKmPkCCSDyV84lNbnNlQYkeCdmB777ekM",
  authDomain: "netflixgpt-c1e85.firebaseapp.com",
  projectId: "netflixgpt-c1e85",
  storageBucket: "netflixgpt-c1e85.firebasestorage.app",
  messagingSenderId: "1032501216415",
  appId: "1:1032501216415:web:58ab03989d06a12d7c4eaa",
  measurementId: "G-TJH8E4PR4Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
