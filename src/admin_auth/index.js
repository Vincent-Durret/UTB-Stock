import { getAuth, onAuthStateChanged } from "firebase/auth";
import { ref } from "vue";
const auth = getAuth();

const admin = "qO65yLrWwANe3zaYr5EaTmAIRZh2";

const id = ref("");

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

    id.value = uid;
  }
});

export { admin, id };
