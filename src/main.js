import { createApp } from "vue";
import App from "./App.vue";

import router from "./router";


import store from "./store";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";



const options = {
  transition: "Vue-Toastification__fade",
  timeout: 2000,
  maxToasts: 20,
  newestOnTop: true,
  position: "top-center",
  pauseOnHover: false,
};



createApp(App).use(router).use(store).use(Toast, options).mount("#app");
