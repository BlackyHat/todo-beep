// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYQ3eFYck0aA4Nsw3JHm2Uo7c9oVb1x0w",
  authDomain: "todo-app-beep.firebaseapp.com",
  projectId: "todo-app-beep",
  storageBucket: "todo-app-beep.appspot.com",
  messagingSenderId: "513773284795",
  appId: "1:513773284795:web:fb285a5ed07048fb13289e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
