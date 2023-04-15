import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  browserSessionPersistence,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLTG2xEzh34HiOqew2uRY6_REBJw77Ltw",
  authDomain: "utb-stock-3850e.firebaseapp.com",
  projectId: "utb-stock-3850e",
  storageBucket: "utb-stock-3850e.appspot.com",
  messagingSenderId: "481647239273",
  appId: "1:481647239273:web:0d4e557c30cce3e827c2f8",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };
