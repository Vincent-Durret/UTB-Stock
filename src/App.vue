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
  // --dark: #1e293b;
  --dark:rgb(206,172,103);
  --dark-alt: #E3CD8B;
  --light: #F0F7EE;
  --sidebar-width: 300px;
  --logo-color: black;
  --brown: #863A12;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Fira sans', sans-serif;
  font-family: 'Oswald';

}

body {
  background: var(--light);
}

header {
  margin-right: 5rem;
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
    transition: all 0.4s ease-out;
  }


}
</style>
