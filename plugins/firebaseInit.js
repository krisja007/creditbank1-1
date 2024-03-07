// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaBLrDFgMwxj4RWdEuzI9P1-cJyXcgeu8",
  authDomain: "credit-bank-d988b.firebaseapp.com",
  projectId: "credit-bank-d988b",
  storageBucket: "credit-bank-d988b.appspot.com",
  messagingSenderId: "501435549677",
  appId: "1:501435549677:web:c9b199585823b2983389e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
