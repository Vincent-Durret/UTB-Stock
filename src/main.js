import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";
import { initializeApp } from "firebase/app";
import store from "./store";

const firebaseConfig = {
  apiKey: "AIzaSyCyRyUyuuVCs6eEs-U1l3h09R11LQtU-VM",
  authDomain: "utb-stock.firebaseapp.com",
  projectId: "utb-stock",
  storageBucket: "utb-stock.appspot.com",
  messagingSenderId: "1017476624667",
  appId: "1:1017476624667:web:3ff490257dcb33505c23be",
  measurementId: "G-MZCJEL5WNJ",
};

initializeApp(firebaseConfig);

createApp(App).use(router).use(store).mount("#app");
