<template>
  <div class="app">
    <SideBar />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>


</template>

<script>
import SideBar from '../src/components/SideBar.vue';
import { useStore } from 'vuex'
export default {
  components: {
    SideBar,
  },
}

</script>

<style lang="scss">
:root {
  --primary: #ddcdba;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;


  main {
    flex: 1 1 0;
    padding-left: 6rem;
    padding-top: 2rem;


    @media (max-width: 760px) {
      padding-left: 6rem;
      padding-top: 2rem;
    }
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-5rem);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease;
  }

}
</style>
