<template>
  <div class="app">
    <SideBar />
    <router-view  :key="$route.fullPath">
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
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
:root {
  --primary: #ddcdba;
  --primary-alt: #22c55e;
  --grey: #64748b;
  // COLOR
  --background: #ddcdba;
  --logo-color: black;
  --black: #000000;
  --black-alt: rgba(0, 0, 0, 0.9);
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
  // font-family: Geomanist, sans-serif;
  font-family: 'Nunito Sans', sans-serif;
}

body {
  background: var(--light);
}


h1 {
  font-size: 5rem;
  color: var(--logo-letters);
  background-color: var(--black);
  padding: 1rem;
  border-radius: 5px;
  margin: 2rem;
  opacity: 0.95;
  filter: drop-shadow(0px 0px 10px var(--logo-letters));

  @media (max-width: 760px) {
    font-size: 2.5rem;
    filter: drop-shadow(0px 0px 3px var(--logo-letters));

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



}
</style>
