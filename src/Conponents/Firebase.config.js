// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALPtgztU_XAvso_v-pbVmg8xncI7JXRBk",
  authDomain: "car-doctor-genius-77eb5.firebaseapp.com",
  projectId: "car-doctor-genius-77eb5",
  storageBucket: "car-doctor-genius-77eb5.appspot.com",
  messagingSenderId: "260198424120",
  appId: "1:260198424120:web:3625065b68c481dfa950cd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
