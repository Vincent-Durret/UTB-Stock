<template>
    <main class="bois-page">
        <WoodCardRow v-for="(data, i) in data_wood_card" :info_wood_card="data" :key="i"/>
    </main>


</template>

<script>
import  info_bois  from '../DB/db.js'

import { onMounted, ref } from 'vue';

import WoodCardRow from '../components/WoodCardRow.vue';

export default {
  name: 'Bois',
  components: {
    WoodCardRow,
  },
  setup() {
    class Wood {
      constructor(name, image, total) {
        this.name = name
        this.image = image
        this.total = total
      }
    }

    let data_wood_card = ref([]);

    const makeDataWood = () => {
      let info_wood_card = [];

      for (const wood of info_bois) {
        const new_wood_card = new Wood(wood.name, wood.image, wood.total)

        if (info_wood_card.length === 3) {
            info_wood_card.push(new_wood_card);
            data_wood_card.value.push(info_wood_card);
          info_wood_card = [];
        } else {
          info_wood_card.push(new_wood_card);
        }
      }
    };
  
    onMounted(makeDataWood,);
    
    return {
        data_wood_card,
    }
  },
}
</script>

<style lang="scss">
</style>
