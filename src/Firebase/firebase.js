import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { ref, onUnmounted, computed } from "vue";

const firebaseConfig = {
  apiKey: "AIzaSyCyRyUyuuVCs6eEs-U1l3h09R11LQtU-VM",
  authDomain: "utb-stock.firebaseapp.com",
  projectId: "utb-stock",
  storageBucket: "utb-stock.appspot.com",
  messagingSenderId: "1017476624667",
  appId: "1:1017476624667:web:3ff490257dcb33505c23be",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);

// export function useAuth() {
//   const user = ref(null);
//   const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
//   onUnmounted(unsubscribe);
//   const isLogin = computed(() => user.value !== null);

//   const signIn = async () => {
//     const googleProvider = new auth.GoogleAuthProvider();
//     await auth.signInWithPopup(googleProvider);
//   };
//   const signOut = () => auth.signOut();

//   return { user, isLogin, signIn, signOut };
// }

const db = getFirestore(app);

export { db };
