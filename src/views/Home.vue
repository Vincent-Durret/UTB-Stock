<template>
  <main class="home-page">
    <header>
      <div class="wrap-header-img">
        <img class="header-img" src="../assets/Logo/logo-UTB-stock.png" alt="">
      </div>
      <Search />
    </header>
    <div class="wrap-card">
      <Card v-for="product in allproducts" :card="product" :key="product.id" />
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '../Firebase/firebase.js';
import Card from '../components/Card.vue';
import Search from '../components/Search.vue';

export default {
  name: 'Accueil',
  components: {
    Card,
    Search,
  },

  setup() {
    const allproducts = ref([]);

    const fetchProducts = () => {

      const q = query(collection(db, "products"), orderBy("stock", "desc"));
      onSnapshot(q, (querySnapshot) => {
        const fetchedProducts = [];

        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() })
        });
        allproducts.value = fetchedProducts;
      });
    };


    onMounted(fetchProducts);

    return {
      allproducts,

    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  width: 100%;

  header {

    .wrap-header-img {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      z-index: 3;

      .header-img {
        background-size: cover;
        position: center;
        width: 50%;


        @media (max-width: 760px) {
          width: 100%;
          filter: drop-shadow(0px 0px 1px var(--logo-letters));
        }
      }

    }

    .wrap-icons {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
  }

  .wrap-card {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;
    justify-content: center;

    @media (max-width: 760px) {
      flex-direction: column;

    }
  }
}
</style>