<template>
  <div class="app">
    <SideBar />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <Component :is="Component" />
      </transition>
    </router-view>

  </div>


</template>

<script>
import SideBar from '../src/components/SideBar.vue';
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
  --light: #F0F7EE;
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

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateX(-5rem);
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s ease-out;
  }

}
</style>
