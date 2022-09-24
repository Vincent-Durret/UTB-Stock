<template>
    <main class="other-page">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>

        <div class="wrap-title">
            <h1>Autres</h1>
        </div>
        <Search />
        <CardRow v-for="(data, i) in data_other_card" :info_card="data" :key="i" />
    </main>


</template>

<script>
import { info_other } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';
import Search from '../components/Search.vue';

export default {
    name: 'Produits',
    components: {
        CardRow,
        Search
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
    setup() {
        class Other {
            constructor(name, image, total, stock) {
                this.name = name
                this.image = image
                this.total = total
                this.stock = stock
            }
        }

        let data_other_card = ref([]);

        const makeDataOther = () => {
            let info_card = [];

            for (const other of info_other) {
                const new_other_card = new Other(other.name, other.image, other.total, other.stock)

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
        margin: 1rem;
    }

    .material-icons {
        background: var(--or);
        padding: 0.4rem;
        border-radius: 5px;
        font-size: 2.5rem;
        color: var((--black));
        cursor: pointer;
        transition: 0.2s;

        &:hover {
            color: var(--brown);
            transform: translateX(-0.5rem) scale(1.1, 1.1);
            transition: 0.2s ease-out;
        }
    }

    .wrap-title {
        display: flex;
        justify-content: center;
        width: 100%;
    }
}
</style>
