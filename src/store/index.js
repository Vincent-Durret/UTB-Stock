import { createStore } from "vuex";
import router from "../router";
import { auth } from "../firebase/firebase.js";
import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.js";
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
    loggedIn: false,
    userRole: null,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_USER_ROLE(state, role) {
      state.userRole = role;
    },

    CLEAR_USER(state) {
      state.user = null;
    },
    AUTH_PERCISTANCE(state, loggedIn) {
      state.loggedIn = loggedIn;
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
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await addDoc(collection(db, "users"), {
          uid: user.uid,
          email: user.email,
          role: "standard",
        });

        console.log("Document utilisateur ajouté avec succès");
      } catch (error) {
        console.error(
          "Erreur lors de la création de l'utilisateur ou de l'ajout du document utilisateur: ",
          error
        );

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

      router.push("/connexion");
    },

    async setUser({ commit }, user) {
      if (user) {
        commit("SET_USER", user);

        const userQuery = query(
          collection(db, "users"),
          where("uid", "==", user.uid)
        );
        const querySnapshot = await getDocs(userQuery);

        if (!querySnapshot.empty) {
          const userDocSnap = querySnapshot.docs[0];
          const userData = userDocSnap.data();
          commit("SET_USER_ROLE", userData.role);
        } else {
          console.log("Aucun document utilisateur trouvé");
          toast.error("Aucun utilisateur trouver !");
        }
      } else {
        commit("SET_USER", null);
        commit("SET_USER_ROLE", null);
      }
    },

    async logout({ commit }) {
      await signOut(auth);

      commit("CLEAR_USER");

      toast.success("Vous êtes deconnectée");

      router.push("/connexion");
    },

    fetchUser({ dispatch }) {
      auth.onAuthStateChanged(async (user) => {
        if (user === null) {
          dispatch("setUser", null);
        } else {
          dispatch("setUser", user);

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
