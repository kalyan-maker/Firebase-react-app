// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBftbROQmntCxqcjQuj_suqNhHQAf3UoGI",
  authDomain: "react-admin-d6da6.firebaseapp.com",
  databaseURL: "https://react-admin-d6da6-default-rtdb.firebaseio.com",
  projectId: "react-admin-d6da6",
  storageBucket: "react-admin-d6da6.appspot.com",
  messagingSenderId: "334647040152",
  appId: "1:334647040152:web:4842d02dbf8208174a98ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
