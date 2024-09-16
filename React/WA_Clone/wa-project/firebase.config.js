// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// auth import -> step-1
import { getAuth } from "firebase/auth";
// firestore -> step 1
import { getFirestore } from "firebase/firestore";
// storage -> step-1
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd4lBDnyEsGZEcAHxR1wPkgcV3bcJCipE",
  authDomain: "wa-clone-6f429.firebaseapp.com",
  projectId: "wa-clone-6f429",
  storageBucket: "wa-clone-6f429.appspot.com",
  messagingSenderId: "691640061422",
  appId: "1:691640061422:web:41d953937cdf459bee52ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth -> step-2
const auth = getAuth(app);
// firestore -> step-2
const db = getFirestore();
// storage -> step-2
const storage = getStorage();

export { auth, db, storage }