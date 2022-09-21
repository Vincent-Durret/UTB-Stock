<template>
    <main class="subcard">
        <div class="wrap-titre">
            <h1 class="titre-subcard"> {{ $route.params.name }} </h1>
        </div>
        <SubPageRow v-for="(data, i) in data_sub" :info_sub="data" :key="i" />
    </main>
</template>

<script>
import { info_itauba } from '../DB/db.js'
import SubPageRow from '../components/SubPageRow.vue';
import { onMounted, ref } from 'vue';
export default {
    name: "SubCard",
    components: {
        SubPageRow,
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
        width: 100%;


        .titre-subcard {
            font-size: 2rem;
            color: var(--logo-color);
            background-color: var(--dark);
            padding: 1rem;
            border-radius: 5px;
            margin: 1rem;

        }
    }


}
</style>