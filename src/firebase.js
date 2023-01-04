// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqyppEH-r1FfmjNQMSRjOzY2ocS7-9a0U",
  authDomain: "disney-app-d24c8.firebaseapp.com",
  projectId: "disney-app-d24c8",
  storageBucket: "disney-app-d24c8.appspot.com",
  messagingSenderId: "189367855402",
  appId: "1:189367855402:web:ac01f8c3eb923a86161653",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
