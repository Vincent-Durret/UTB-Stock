<template>
  <main class="product-page">
      <CardRow v-for="(data, i) in data_product_card" :info_card="data" :key="i" />
  </main>


</template>

<script>
import { info_product } from '../DB/dbProd.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
  name: 'Produits',
  components: {
      CardRow
  },
  setup() {
      class Product {
          constructor(name, image, total) {
              this.name = name
              this.image = image
              this.total = total
          }
      }

      let data_product_card = ref([]);

      const makeDataProduct = () => {
          let info_card = [];

          for (const product of info_product) {
              const new_product_card = new Product(product.name, product.image, product.total)

              if (info_card.length == 6) {
                  info_card.push(new_product_card);
                  data_product_card.value.push(info_card);
                  info_card = [];
              } else {
                  info_card.push(new_product_card);
              }
          }
      };

      onMounted(makeDataProduct,);

      return {
          data_product_card,
      }
  },
}
</script>

<style lang="scss">
</style>
