<template>
  <main class="other-page">
      <div class="return">
          <span @click="goHome()" class="material-icons">arrow_back</span>
      </div>

      <h1>Autres : </h1>
      <CardRow v-for="(data, i) in data_other_card" :info_card="data" :key="i" />
  </main>


</template>

<script>
import { info_other } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
  name: 'Produits',
  components: {
      CardRow
  },
  methods: {
      goHome() {
          this.$router.push('/')
      }
  },
  setup() {
      class Other {
          constructor(name, image, total) {
              this.name = name
              this.image = image
              this.total = total
          }
      }

      let data_other_card = ref([]);

      const makeDataOther = () => {
          let info_card = [];

          for (const other of info_other) {
              const new_other_card = new Other(other.name, other.image, other.total)

              if (info_card.length == 11) {
                  info_card.push(new_other_card);
                  data_other_card.value.push(info_card);
                  info_card = [];
              } else {
                  info_card.push(new_other_card);
              }
          }
      };

      onMounted(makeDataOther,);

      return {
          data_other_card,
      }
  },
}
</script>

<style lang="scss">
.other-page {
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
