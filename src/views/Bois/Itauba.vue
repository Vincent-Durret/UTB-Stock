<template>
  <SubPageRow v-for="(data, i) in data_sub" :info_sub="data" :key="i" />
</template>

<script>
import SubPageRow from '../../components/SubPageRow.vue'
import { info_itauba } from '../../DB/db.js'

import { onMounted, ref } from 'vue';


export default {
  name: 'Itauba',
  components: {
    SubPageRow,
  },
  methods: {
    goHome() {
      this.$router.push('/bois')
    }
  },
  setup() {
    class SubPage {
      constructor(name, image, total) {
        this.name = name
        this.total = total
      }
    }

    let data_sub = ref([]);

    const makeDataSub = () => {
      let info_sub = [];

      for (const sub of info_itauba) {
        const new_sub = new SubPage(sub.name, sub.total)

        if (info_sub.length === 4) {
          info_sub.push(new_sub);
          data_sub.value.push(info_sub);
          info_sub = [];
        } else {
          info_sub.push(new_sub);
        }
      }
    };

    onMounted(makeDataSub);

    return {
      data_sub,
    }
  },
}

</script>

<style lang="sass">

</style>