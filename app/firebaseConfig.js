// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzcdQVq8GC4zPAIhMD06Ru7cAHz0Gm2oY",
  authDomain: "multiply-master-37b51.firebaseapp.com",
  projectId: "multiply-master-37b51",
  storageBucket: "multiply-master-37b51.firebasestorage.app",
  messagingSenderId: "509795828711",
  appId: "1:509795828711:web:86af9088a2fd860b947342",
  measurementId: "G-BW1Z4D1XKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
