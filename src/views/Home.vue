<template>
  <main class="home-page">
    <header>
      <div class="wrap-header-img">
        <img class="header-img" src="../assets/Logo/logo-UTB-stock.png" alt="">
      </div>
      <Search />
    </header>
    <CardRow v-for="(data, i) in data_item_card" :info_card="data" :key="i" />
  </main>
</template>

<script>
import { info_all_item } from '../DB/db.js'
import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';
import Search from '../components/Search.vue';

export default {
  name: 'Home',
  components: {
    CardRow,
    Search,
  },

  setup() {
    class Item {
      constructor(name, image, total, stock) {
        this.name = name
        this.image = image
        this.total = total
        this.stock = stock
      }
    }

    let data_item_card = ref([]);

    const makeDataItem = () => {
      let info_card = [];

      for (const item of info_all_item) {
        const new_item_card = new Item(item.name, item.image, item.total, item.stock)

        if (info_card.length == 58) {
          info_card.push(new_item_card);
          data_item_card.value.push(info_card);
          info_card = [];
        } else {
          info_card.push(new_item_card);
        }
      }
    };

    onMounted(makeDataItem,);

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
    // background: white;

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
}

@media (max-width: 760px) {}
</style>