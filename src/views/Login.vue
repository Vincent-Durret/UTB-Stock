<template>
  <main class="login-page">
    <h1>Login</h1>
    <!-- <p> <input type="text" placeholder="Email" v-model="email" /> </p>
    <p> <input type="text" placeholder="Mot de Passe" v-model="password" /> </p>
    <p v-if="errMsg"> {{ errMsg }} </p>
    <p> <button @click="register">Envoyer</button> </p>
    <p> <button @click="signInWithGoogle">Se connecter avec Google</button> </p> -->
  </main>
</template>

<script setup>
// import { ref } from 'vue';
// import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
// import { useRouter } from 'vue-router';

// const email = ref('')
// const password = ref('')
// const errMsg = ref()
// const router = useRouter()

// const register = () => {
//   createUserWithEmailAndPassword(getAuth(), email.value, password.value)
//     .then((data) => {
//       console.log("Incription reussi")
//     })
//     .catch((error) => {
//       console.log(error.code)
//       switch (error.code) {
//         case "auth/invalid-email":
//           errMsg.value = "Adresse email invalide !";
//           break;
//         case "auth/user-not-found":
//           errMsg.value = "Ce compte n'existe pas ! ";
//           break;
//         case "auth/wrong-password":
//           errMsg.value = "Mot de passe incorect ! ";
//           break;
//         default:
//           errMsg.value = "Email ou mot de passe incorect";
//           break;


//       }
//     })

// }
// const signInWithGoogle = () => {
//   const provider = new GoogleAuthProvider()
//   signInWithPopup(getAuth(), provider)
//     .then((result) => {
//       console.log(result.user);
//       router.push('/home')
//     })

//     .catch((error) => {
//       //handle error
//     })
// }
</script>

<style lang="scss" scoped>
</style>