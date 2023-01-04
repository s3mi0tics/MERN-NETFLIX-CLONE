// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "apiKey",
  authDomain: "react-netflix-clone2.firebaseapp.com",
  projectId: "react-netflix-clone2",
  storageBucket: "react-netflix-clone2.appspot.com",
  messagingSenderId: "406311961430",
  appId: "1:406311961430:web:bc9649b1a38f1461624cf7",
  measurementId: "G-WYY6KH5NJJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const firebaseAuth = getAuth(app);
