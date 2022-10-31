import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9JvajxnS5x4CLZNaR5aW01063fjoVTto",
  authDomain: "react-book--app.firebaseapp.com",
  projectId: "react-book--app",
  storageBucket: "react-book--app.appspot.com",
  messagingSenderId: "539077086819",
  appId: "1:539077086819:web:792f54a1c44c748e8df256",
  measurementId: "G-HQWTRSJ1ZG"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
