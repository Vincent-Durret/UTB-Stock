import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";

import { initializeApp } from "firebase/app";

import store from "./store";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";


const firebaseConfig = {
  apiKey: "AIzaSyCyRyUyuuVCs6eEs-U1l3h09R11LQtU-VM",
  authDomain: "utb-stock.firebaseapp.com",
  projectId: "utb-stock",
  storageBucket: "utb-stock.appspot.com",
  messagingSenderId: "1017476624667",
  appId: "1:1017476624667:web:3ff490257dcb33505c23be",
  measurementId: "G-MZCJEL5WNJ",
};

const options = {
  transition: "Vue-Toastification__fade",
  timeout: 2000,
  maxToasts: 20,
  newestOnTop: true,
  position: "top-center",
  pauseOnHover: false,
};

initializeApp(firebaseConfig);

createApp(App).use(router).use(store).use(Toast, options).mount("#app");
