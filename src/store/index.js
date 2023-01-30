import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase/firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useToast } from "vue-toastification";

const toast = useToast();

export default createStore({
  state: {
    user: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details;

      try {
        await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            toast.error("Utilisateur inconnue !");
            break;
          case "auth/wrong-password":
            toast.error("Mot de passe inconnue !");
            break;
          default:
            toast.error("Veuillez remplire tous les champs");
        }

        return;
      }

      commit("SET_USER", auth.currentUser);
      toast.success("Bienvenue sur UTB Stock");

      router.push("/");
    },

    async register({ commit }, details) {
      const { email, password } = details;

      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email already in use");
            break;
          case "auth/invalid-email":
            alert("Invalid email");
            break;
          case "auth/operation-not-allowed":
            alert("Operation not allowed");
            break;
          case "auth/weak-password":
            alert("Weak password");
            break;
          default:
            alert("Something went wrong");
        }

        return;
      }

      commit("SET_USER", auth.currentUser);

      router.push("/");
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      toast.success("Vous êtes deconnectée");

      router.push("/connexion");
    },

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          commit("CLEAR_USER");
        } else {
          commit("SET_USER", user);

          if (
            router.isReady() &&
            router.currentRoute.value.path === "/connexion" &&
            user
          ) {
            router.push("/");
          }
        }
      });
    },
  },
});

// import { createStore } from "vuex";
// import router from "../router";
// import { auth } from "../firebase/firebase.js";
// import {
//   createUserWithEmailAndPassword,
//   setPersistence,
//   signInWithEmailAndPassword,
//   browserSessionPersistence,
//   signOut,
// } from "firebase/auth";
// import { useToast } from "vue-toastification";

// const toast = useToast();

// export default createStore({
//   state: {
//     user: null,
//     isAuthenticated: false,
//   },
//   mutations: {
//     SET_USER(state, user) {
//       state.user = user;
//     },

//     CLEAR_USER(state) {
//       state.user = null;
//     },

//     SET_AUTH_STATUS(state, isAuthenticated) {
//       state.isAuthenticated = isAuthenticated;
//     },
//   },

//   actions: {
//     async login({ commit }, details) {
//       const { email, password } = details;

//       try {
//         setPersistence(auth, browserSessionPersistence)
//           .then(() => {
//             return signInWithEmailAndPassword(auth, email, password);
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//           });
//       } catch (error) {
//         switch (error.code) {
//           case "auth/user-not-found":
//             toast.error("Utilisateur inconnue !");
//             break;
//           case "auth/wrong-password":
//             toast.error("Mot de passe inconnue !");
//             break;
//           default:
//             toast.error("Veuillez remplire tous les champs");
//         }

//         return;
//       }

//       const currentUser = auth.currentUser;
//       if (currentUser) {
//         commit("SET_USER", currentUser);
//         commit("SET_AUTH_STATUS", { isAuthenticated: true });
//       }

//       // commit("SET_USER", auth.currentUser);
//       // commit("SET_AUTH_STATUS", { isAuthenticated: true });
//       toast.success("Bienvenue sur UTB Stock");

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

//       toast.success("Vous êtes deconnectée");

//       router.push("/connexion");
//     },

//     fetchUser({ commit, state }) {
//       auth.onAuthStateChanged(async (user) => {
//         if (user === null) {
//           commit("CLEAR_USER");
//           commit("SET_AUTH_STATUS", { isAuthenticated: false });
//         } else {
//           commit("SET_USER", user);
//           commit("SET_AUTH_STATUS", { isAuthenticated: true });

//           setPersistence(auth, browserSessionPersistence)
//             .then(() => {
//               console.log("Session persistence has been set");
//             })
//             .catch((error) => {
//               console.log("Error setting session persistence:", error);
//             });

//           console.log(state.isAuthenticated);

//           if (router.isReady() && !state.isAuthenticated) {
//             router.push("/connexion");
//           }
//         }
//       });
//     },
//   },
// });

// if (router.isReady() && router.currentRoute.value.path === "/connexion") {
//   router.push("/");
// }

// if (router.isReady() && router.currentRoute.value.path !== "/connexion") {
//   commit("SET_USER", user);
//   router.push("/");
// async fetchUser({ commit, state }) {
//   try {
//     auth.onAuthStateChanged(async (user) => {
//       if (user === null) {
//         commit("CLEAR_USER");
//         commit("SET_AUTH_STATUS", { isAuthenticated: false });
//       } else {
//         commit("SET_USER", user);
//         commit("SET_AUTH_STATUS", { isAuthenticated: true });

//         await setPersistence(auth, browserSessionPersistence);
//         console.log("Session persistence has been set");

//         // await signInWithEmailAndPassword(auth, email, password);
//         // console.log("User signed in successfully");

//         console.log(state.isAuthenticated);

//         if (router.isReady()) {
//           if (!state.isAuthenticated) {
//             router.push("/connexion");
//           }
//         }
//       }
//     });
//   } catch (error) {
//     console.error("Error in fetchUser:", error);
//     throw error;
//   }
// },
