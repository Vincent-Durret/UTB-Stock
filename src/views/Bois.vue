<template>
  <main class="bois-page">
    <div class="return">
      <span @click="goHome()" class="material-icons">arrow_back</span>
    </div>
    <div class="wrap-title">
      <h1>Bois</h1>
    </div>
    <SearchVue />
    <CardRow v-for="(data, i) in data_card" :info_card="data" :key="i" />
  </main>
</template>

<script>
import { info_bois } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';
import SearchVue from '../components/Search.vue';

export default {
  name: 'Bois',
  components: {
    CardRow,
    SearchVue,
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  setup() {
    class Card {
      constructor(name, image, total, stock) {
        this.name = name
        this.image = image
        this.total = total
        this.stock = stock
      }
    }

    let data_card = ref([]);

    const makeDataCard = () => {
      let info_card = [];

      for (const card of info_bois) {
        const new_card = new Card(card.name, card.image, card.total, card.stock)

        if (info_card.length === 3) {
          info_card.push(new_card);
          data_card.value.push(info_card);
          info_card = [];
        } else {
          info_card.push(new_card);
        }
      }
    };

    onMounted(makeDataCard,);

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


}
</style>
