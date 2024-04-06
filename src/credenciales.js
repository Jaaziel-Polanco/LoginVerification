// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYx0H-8AWHLlvbWhKRnB9__FEap3aB5tw",
  authDomain: "loginreact-a5ce7.firebaseapp.com",
  projectId: "loginreact-a5ce7",
  storageBucket: "loginreact-a5ce7.appspot.com",
  messagingSenderId: "865779744289",
  appId: "1:865779744289:web:175254a6a6a5e8641e2d60"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;