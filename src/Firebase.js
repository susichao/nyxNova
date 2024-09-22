// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8UF0My96uvCBaamQSOeDQPna2Lzs8lVk",
  authDomain: "nyxnova.firebaseapp.com",
  projectId: "nyxnova",
  storageBucket: "nyxnova.appspot.com",
  messagingSenderId: "508203905267",
  appId: "1:508203905267:web:0164d815f07abb8a5b0786",
  measurementId: "G-B0Z7HWCYZM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)