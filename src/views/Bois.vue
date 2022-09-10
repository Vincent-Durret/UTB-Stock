<template>
  <main class="bois-page">
    <div class="return">
      <span @click="goHome()" class="material-icons">arrow_back</span>
    </div>

    <h1>Bois : </h1>
    <router-link to="/bois/itauba">
      <CardRow v-for="(data, i) in data_card" :info_card="data" :key="i" />
    </router-link>
  </main>


</template>

<script>
import { info_bois } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
  name: 'Bois',
  components: {
    CardRow,
  },
  methods: {
    goHome() {
      this.$router.push('/')
    }
  },
  setup() {
    class Card {
      constructor(name, image, total) {
        this.name = name
        this.image = image
        this.total = total
      }
    }

    let data_card = ref([]);

    const makeDataCard = () => {
      let info_card = [];

      for (const card of info_bois) {
        const new_card = new Card(card.name, card.image, card.total)

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
    margin-bottom: 1rem;
  }

  .material-icons {
    font-size: 2.5rem;
    color: var((--dark));
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      color: var(--dark-alt);
      transform: translateX(-0.5rem);
      transition: 0.2s ease-out;
    }
  }

  h1 {
    font-size: 2rem;
    margin: 20px;
  }
}
</style>
