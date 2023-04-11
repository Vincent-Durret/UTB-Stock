<template>
  <main class="login">
    <section class="forms">

      <form class="register" @submit.prevent="register">
        <h2>Inscription pour UTB stock</h2>
        <input type="email" placeholder="Email address" v-model="register_form.email" />
        <input type="password" placeholder="Password" v-model="register_form.password" />
        <input type="submit" value="Register" />
      </form>

      <form class="login" @submit.prevent="login">
        <div class="wrap">
          <div class="logo-login"></div>
        </div>

        <input type="email" placeholder="Email" v-model="login_form.email" autofocus />
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
  background: var(--light);
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


.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
}

.logo-login {
  background-image: url(../assets/Logo/logo-UTB-stock.svg);
  background-size: cover;
  background-position: center;
  width: 450px;
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
  color: var(--white);
  border-bottom: 2px solid var(--white);
}

form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
  background: rgba(0, 0, 0, 0.9);
  color: var(--light);
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  transition: 0.2s;
}

form.login input[type="submit"]:hover {
  box-shadow: rgb(0, 0, 0, 0.6) 0px 20px 30px -10px;
  /* background-color: var(--brown); */
  color: var(--logo-letters);
  /* transform: scale(0.95, 0.95); */
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
    display: contents;
  }


}
</style>