import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyB9ZVFwZOjcxMLzdwOTGJiANYPtqheH1BY",
    authDomain: "vite-project-d50e1.firebaseapp.com",
    projectId: "vite-project-d50e1",
    storageBucket: "vite-project-d50e1.appspot.com",
    messagingSenderId: "106918009041",
    appId: "1:106918009041:web:e3b5584083ad4a990e0df0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app)