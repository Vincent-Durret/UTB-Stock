import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
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
//   state: {
//     user: {
//       loggedIn: false,
//       data: null
//     }
//   },

//   getters: {
//     user(state){
//       return state.user
//     }
//   },

//   mutations: {
//     SET_LOGGED_IN(state, value) {
//       state.user.loggedIn = value;
//     },
//     SET_USER(state, data) {
//       state.user.data = data;
//     }
//   },
//   actions: {
//     async register(context, { email, password, name}){
//         const response = await createUserWithEmailAndPassword(auth, email, password)
//         if (response) {
//             context.commit('SET_USER', response.user)
//             response.user.updateProfile({displayName: name})
//         } else {
//             throw new Error('Unable to register user')
//         }
//     },

//     async logIn(context, { email, password }){
//       const response = await signInWithEmailAndPassword(auth, email, password)
//       if (response) {
//           context.commit('SET_USER', response.user)
//       } else {
//           throw new Error('login failed')
//       }
//   },

//   async logOut(context){
//       await signOut(auth)
//       context.commit('SET_USER', null)
//   },

//   async fetchUser(context ,user) {
//     context.commit("SET_LOGGED_IN", user !== null);
//     if (user) {
//       context.commit("SET_USER", {
//         displayName: user.displayName,
//         email: user.email
//       });
//     } else {
//       context.commit("SET_USER", null);
//     }
//   }
// }
//   mutations: {
//     SET_USER(state, user) {
//       state.user = user;
//     },

//     CLEAR_USER(state) {
//       state.user = null;
//     },
//      updateAuthStatus(state, payload) {
//       state.isAuthenticated = payload.isAuthenticated
//       localStorage.setItem('authStatus', JSON.stringify(payload))
//     },
//   },
//   actions: {
//     async login({ commit }, details) {
//       const { email, password } = details;

//       try {
//         await signInWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         switch (error.code) {
//           case "auth/user-not-found":
//             toast.error("Utilisateur inconnue !")
//             break;
//           case "auth/wrong-password":
//             toast.error("Mot de passe inconnue !")
//             break;
//           default:
//             toast.error("Veuillez remplire tous les champs")
//         }

//         return;
//       }

//       commit("SET_USER", auth.currentUser);
//       toast.success("Bienvenue sur UTB Stock")

//       commit('updateAuthStatus', { isAuthenticated: true, user: payload.user })

//       router.push("/");
//     },

//     async register({ commit }, details) {
//       const { email, password } = details;

//       try {
//         await createUserWithEmailAndPassword(auth, email, password);
//       } catch (error) {
//         switch (error.code) {
//           case "auth/email-already-in-use":
//             alert("Email already in use");
//             break;
//           case "auth/invalid-email":
//             alert("Invalid email");
//             break;
//           case "auth/operation-not-allowed":
//             alert("Operation not allowed");
//             break;
//           case "auth/weak-password":
//             alert("Weak password");
//             break;
//           default:
//             alert("Something went wrong");
//         }

//         return;
//       }

//       commit("SET_USER", auth.currentUser);

//       router.push("/");
//     },

//     async logout({ commit }) {
//       await signOut(auth);

//       commit("CLEAR_USER");

//       toast.success("Vous êtes deconnectée")

//       router.push("/connexion");
//     },

//     fetchUser({ commit }) {
//       auth.onAuthStateChanged(async (user) => {
//         if (user === null) {
//           commit("CLEAR_USER");
//         } else {
//           commit("SET_USER", user);

//           if (router.isReady() && router.currentRoute.value.path === "/connexion") {
//             router.push("/");
//           }
//         }
//       });
//     },
//   },
// });
