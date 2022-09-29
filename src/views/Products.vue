<template>
  <main class="bois-page">
    <div class="return">
      <span @click="goHome()" class="material-icons">arrow_back</span>
    </div>
    <div class="wrap-title">
      <h1>{{ $route.params.category }}</h1>

    </div>
    <SearchVue />
    <div class="cards-grid">
      <Card v-for="(product) in data_card" :card="product" :key="product" />
    </div>
  </main>
</template>

<script>
import { onMounted, ref } from 'vue';

import Card from '../components/Card.vue';
import SearchVue from '../components/Search.vue';

import { collection, getDocs, where, query } from 'firebase/firestore'

import { db } from '../Firebase/firebase.js'

export default {
  name: 'Products',
  components: {
    Card,
    SearchVue,
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  setup() {

    let data_card = ref([]);


    const itemCollectionRef = query(collection(db, 'products'), where("category", "==", "Bois"))
    // const itemCollectionQuery = query(itemCollectionRef, orderBy('date', 'desc'))

    const makeData = async () => {
      const querySnapshot = await getDocs(itemCollectionRef)
      let itemProduct = []
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
        const product = {
          id: doc.id,
          name: doc.data().name,
          image: doc.data().image,
          total: doc.data().total,
          stock: doc.data().stock,
          unit: doc.data().unit
        }
        itemProduct.push(product)
      })
      data_card.value = itemProduct
    }

    onMounted(makeData)

    // onMounted(makeDataCard,);

    return {
      data_card,
    }
  },
}
</script>

<style lang="scss">
.bois-page {

  .return {
    margin: 1rem;
  }

  .material-icons {
    background: var(--or);
    padding: 0.4rem;
    border-radius: 5px;
    font-size: 2.5rem;
    color: var((--black));
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--brown);
      transform: translateX(-0.5rem) scale(1.1, 1.1);

      transition: 0.2s ease-out;
    }

    .button {
      text-decoration: none;
    }
  }

  .wrap-title {
    display: flex;
    justify-content: center;
    width: 100%;

  }

  .cards-grid {
    display: flex;
    flex-wrap: wrap;
    column-gap: 1rem;
    row-gap: 1rem;
    justify-content: center;

    @media (max-width: 760px) {
      .cards-grid {
        flex-direction: column;
      }
    }
  }


}
</style>
