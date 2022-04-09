// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1z0RwXyWyUlv8e7S-Vu2zqxyoXGKAdxA",
  authDomain: "m58-router-firebase-intgr.firebaseapp.com",
  projectId: "m58-router-firebase-intgr",
  storageBucket: "m58-router-firebase-intgr.appspot.com",
  messagingSenderId: "728539816381",
  appId: "1:728539816381:web:6b70338c5083ba8df4f2d4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;