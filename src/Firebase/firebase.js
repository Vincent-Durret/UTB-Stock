import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyRyUyuuVCs6eEs-U1l3h09R11LQtU-VM",
  authDomain: "utb-stock.firebaseapp.com",
  projectId: "utb-stock",
  storageBucket: "utb-stock.appspot.com",
  messagingSenderId: "1017476624667",
  appId: "1:1017476624667:web:3ff490257dcb33505c23be",
  measurementId: "G-MZCJEL5WNJ",
};

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export { db };
