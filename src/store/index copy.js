import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useToast } from "vue-toastification";

const toast = useToast();

export default createStore({
  state: {
    user: JSON.parse(localStorage.getItem("user")) || null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    CLEAR_USER(state) {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
  actions: {
    async login({ commit }, { email, password }) {
      try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        commit("SET_USER", user);
        router.push("/");
      } catch (error) {
        // Error handling
      }
    },
    async logout({ commit }) {
      try {
        await signOut(auth);
        commit("CLEAR_USER");
        router.push("/connexion");
      } catch (error) {
        // Error handling
      }
    },
    async checkUser({ commit }) {
      auth.onAuthStateChanged((user) => {
        if (user) {
          commit("SET_USER", user);
        } else {
          commit("CLEAR_USER");
        }
      });
    },
  },
});
