// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjMCrChdjaWc8HcxKgMeABqU-JOG9kVL8",
  authDomain: "credit-bank-bb092.firebaseapp.com",
  projectId: "credit-bank-bb092",
  storageBucket: "credit-bank-bb092.appspot.com",
  messagingSenderId: "751734438747",
  appId: "1:751734438747:web:99946607cb569380e4f87e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);



export { db, auth };
