<template>
  <main class="home-page">
    <header>
      <div class="wrap-header-img">
        <img class="header-img" src="../assets/Logo/logo-UTB-stock.png" alt="">
      </div>
      <Search />
    </header>
    <div class="wrap-card">
      <Card v-for="(product) in data_item_card" :card="product" :key="product" />
    </div>
  </main>
</template>

<script>
// import info_all_item from '../DB/db.js'
import { onMounted, ref } from 'vue';

import { collection, getDocs, orderBy, query } from 'firebase/firestore'

import { db } from '../Firebase/firebase.js'

import Card from '../components/Card.vue';
import Search from '../components/Search.vue';

export default {
  name: 'Home',
  components: {
    Card,
    Search,
  },



  setup() {


    let data_item_card = ref([]);


    const itemCollectionRef = query(collection(db, 'products'), orderBy('category', "asc"))
    // const itemCollectionQuery = query(itemCollectionRef, orderBy('date', 'desc'))

    const makeData = async () => {
      const querySnapshot = await getDocs(itemCollectionRef)
      let itemProduct = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const product = {
          id: doc.id,
          category: doc.data().category,
          name: doc.data().name,
          image: doc.data().image,
          total: doc.data().total,
          stock: doc.data().stock,
          unit: doc.data().unit
        }
        itemProduct.push(product)
      })
      data_item_card.value = itemProduct
    }

    onMounted(makeData)

    return {
      data_item_card,

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
  }

  .wrap-card {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem 2rem;
    justify-content: center;
  }
}
</style>