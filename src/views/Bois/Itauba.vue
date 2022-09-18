<template>
  <main class="itauba-page">
    <div class="return">
      <span @click="goHome()" class="material-icons">arrow_back</span>
    </div>
    <h1>Itauba</h1>
    <SubPageRow v-for="(data, i) in data_sub" :info_sub="data" :key="i" />
  </main>

</template>

<script>
import { info_itauba } from '../../DB/db.js'
import SubPageRow from '../../components/SubPageRow.vue';
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
    class SubCard {
      constructor(name, total) {
        this.name = name
        this.total = total
      }
    }

    let data_sub = ref([]);

    const makeDataSub = () => {
      let info_sub = [];

      for (const sub of info_itauba) {
        const new_sub = new SubCard(sub.name, sub.total)

        if (info_sub.length === 3) {
          info_sub.push(new_sub);
          data_sub.value.push(info_sub);
          info_sub = [];
        } else {
          info_sub.push(new_sub);
        }
      }
    };

    onMounted(makeDataSub,);

    return {
      data_sub,
    }
  },

}
</script>

<style lang="scss" scoped>
.itauba-page {
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