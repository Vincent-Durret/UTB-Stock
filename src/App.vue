<template>
  <div class="app">
    <SideBar />
    <router-view v-slot="{ Component }" :key="$route.fullPath">
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
  // COLOR
  --background: #ddcdba;
  --logo-color: black;
  --black: #000000;
  --brown: #863A12;
  --or: rgb(206, 172, 103);
  --or-alt: #E3CD8B;
  --light: #F0F7EE;
  --white: #FFF;
  --logo-letters: #D08B00;
  // DIMENTION
  --sidebar-width: 300px;

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  // font-family: 'Fira sans', sans-serif;
  font-family: Geomanist, sans-serif;
  ;
}

body {
  background: var(--light);
}

header {
  margin-right: 5rem;
}

h1 {
  font-size: 5rem;
  color: var(--logo-letters);
  background-color: var(--black);
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem;
  opacity: 0.8;
  filter: drop-shadow(0px 0px 10px var(--logo-letters));

  @media (max-width: 760px) {
    font-size: 2.5rem;
  }
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
    padding-left: 4rem;
    padding-top: 2rem;


    @media (max-width: 760px) {
      padding-left: 3.8rem;
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
