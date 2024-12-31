// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCSEFBOlnYltPK8QPGymmGFIFqnjf4zeUU",
  authDomain: "raheel-jeweller.firebaseapp.com",
  projectId: "raheel-jeweller",
  storageBucket: "raheel-jeweller.firebasestorage.app",
  messagingSenderId: "650967728510",
  appId: "1:650967728510:web:f6fa311c0e47f8b70c732f",
  measurementId: "G-DG83G7X9DE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); // Firebase Storage

// const analytics = getAnalytics(app);
