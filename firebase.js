
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail    } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyDcRapoCZdKl9i7L_13LjMNR9mNBfBrUvA",
    authDomain: "login-signup-authenticat-7c572.firebaseapp.com",
    projectId: "login-signup-authenticat-7c572",
    storageBucket: "login-signup-authenticat-7c572.appspot.com",
    messagingSenderId: "840737917052",
    appId: "1:840737917052:web:adbabb2a1b583361a0a1f9",
    measurementId: "G-DWCCPEZ3PM"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app)

  export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail  } 