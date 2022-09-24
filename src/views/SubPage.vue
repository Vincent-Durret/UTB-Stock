<template>
    <main class="subcard">
        <div class="wrap-titre">
            <h1> {{ $route.params.name }} </h1>
        </div>
        <SubCardRow v-for="(data, i) in data_sub" :info_sub="data" :key="i" />
    </main>
</template>

<script>
import { info_itauba } from '../DB/db.js'
import SubCardRow from '../components/SubCardRow.vue';
import { onMounted, ref } from 'vue';
export default {
    name: "SubPage",
    components: {
        SubCardRow,
    },

    setup() {
        class SubCard {
            constructor(name, total, stock) {
                this.name = name
                this.total = total
                this.stock = stock
            }
        }

        let data_sub = ref([]);

        const makeDataSub = () => {
            let info_sub = [];

            for (const sub of info_itauba) {
                const new_sub = new SubCard(sub.name, sub.total, sub.stock)

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

<style lang="scss">
.subcard {
    
    .wrap-titre {
        display: flex;
        justify-content: center;
        width: 100%;
    }


}
</style>