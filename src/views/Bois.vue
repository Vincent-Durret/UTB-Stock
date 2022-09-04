<template>
  <main class="bois-page">
    <CardRow v-for="(data, i) in data_card" :info_card="data" :key="i" />
  </main>


</template>

<script>
import  { info_bois } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
  name: 'Bois',
  components: {
    CardRow,
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
</style>
