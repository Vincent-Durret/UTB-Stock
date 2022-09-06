<template>
  <main class="login">
    <section class="forms">

      <form class="login" @submit.prevent="login">
        <div class="wrap">
          <div class="logo-login"></div>
        </div>

        <input type="email" placeholder="Email" v-model="login_form.email" />
        <input type="password" placeholder="Mot de passe" v-model="login_form.password" />
        <input type="submit" value="Connexion" />
      </form>

    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup() {
    const login_form = ref({});
    const register_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    }

    const register = () => {
      store.dispatch('register', register_form.value);
    }

    return {
      login_form,
      register_form,
      login,
      register
    }
  }
}
</script>

<style scoped>
main {
  background: #F0F7EE;
  padding: 0;
}

.forms {
  display: flex;
  min-height: 100vh;
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
  display: block;
}

form.register {
  display: none;
  color: #FFF;
  background-color: rgb(245, 66, 101);
  background-image: linear-gradient(to bottom right,
      rgb(245, 66, 101) 0%,
      rgb(189, 28, 60) 100%);
}

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.logo-login {
  background-image: url(../assets/Logo/logo-UTB-stock.png);
  background-size: cover;
  background-position: center;
  width: 350px;
  height: 150px;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;

  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #FFF;
  border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
  background-color: #1e293b;
  color: #f1f5f9;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
}

form.login input[type="submit"]:hover {
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  background-color: var(--dark-alt);
  transform: scale(0.95, 0.95);
}

form.register input[type="submit"] {
  background-color: #FFF;
  color: rgb(245, 66, 101);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

@media (max-width: 760px) {
  .login {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
  display:contents;
}

  
}
</style>