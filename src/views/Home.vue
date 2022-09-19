<template>
  <main class="home-page">
    <h1 class="titre-home">Bienvenue sur UTB-Stock ! </h1>
    <Search />
  </main>
</template>

<script>
  import Search from '../components/Search.vue'
export default {
  name: 'Home',
  components: {
    Search,
  }

}
</script>

<style lang="scss">
main {

  .titre-home {
    font-size: 3rem;
  }

}
</style>