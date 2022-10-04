<template>
  <main class="home-page">
    <header>
      <div class="wrap-header-img">
        <img class="header-img" src="../assets/Logo/logo-UTB-stock.png" alt="">
      </div>
      <div class="wrap-icons">
        <AddProduct />
        <AddSubProduct />
      </div>
      <Search />
    </header>
    <div class="wrap-card">
      <Card v-for="(product) in allproducts" :card="product" :key="product.id" />
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'

import { db } from '../Firebase/firebase.js'

import Card from '../components/Card.vue';
import Search from '../components/Search.vue';
import AddProduct from '../components/AddProduct.vue';
import AddSubProduct from '../components/AddSubProduct.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Search,
    AddProduct,
    AddSubProduct
  },

  setup() {


    const allproducts = ref([])

    onMounted(() => {
      const q = query(collection(db, 'products'), orderBy('category', "asc"))


      onSnapshot(q, (querySnapshot) => {
        const fetchedProducts = [];

        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() })
        })
        allproducts.value = fetchedProducts
      });


    })

    return {
      allproducts,

    }
  },

}
</script>

<style lang="scss" scoped>
main {
  padding-left: 4rem;
  padding-top: 0rem;


  header {

    .wrap-header-img {
      padding: 1rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .header-img {
        background-size: cover;
        position: center;
        width: 50%;
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
    gap: 1rem 2rem;
    justify-content: center;
  }
}
</style>