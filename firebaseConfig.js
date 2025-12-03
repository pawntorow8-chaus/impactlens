// firebaseConfig.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCvS2ZjFZ5lIaXh7-m-1OklEdGb1JpwVr4",
  authDomain: "impactlensarticles.firebaseapp.com",
  projectId: "impactlensarticles",
  storageBucket: "impactlensarticles.firebasestorage.app",
  messagingSenderId: "767071021488",
  appId: "1:767071021488:web:ebbfa4ac0b03e9d6b7ce75"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore database
export const db = getFirestore(app);