// import { initializeApp } from "firebase/analytics";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfIOyjU69j6A2YhRyFWWXi5aQrruXQ3VM",
  authDomain: "react-firebase-auth-1acd3.firebaseapp.com",
  projectId: "react-firebase-auth-1acd3",
  storageBucket: "react-firebase-auth-1acd3.firebasestorage.app",
  messagingSenderId: "963131088702",
  appId: "1:963131088702:web:8ee1f7ff983016ffa2166f",
  measurementId: "G-Z83K7D34Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
