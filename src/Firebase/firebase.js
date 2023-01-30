import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, setPersistence, signInWithEmailAndPassword, browserSessionPersistence } from "firebase/auth";


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

const auth = getAuth(app);

setPersistence(firebase.auth.Auth.Persistence.LOCAL)
.then(function() {
return signInWithEmailAndPassword(auth, email, password);
})
.catch(function(error) {
console.error(error);
});

export { db, auth };
