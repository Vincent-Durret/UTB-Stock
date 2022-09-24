<template>
    <main class="quincaillerie-page">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>
        <div class="wrap-title">
            <h1>Quincailleries</h1>
        </div>
        <Search />
        <CardRow v-for="(data, i) in data_hardware_store_card" :info_card="data" :key="i" />
    </main>


</template>

<script>
import { info_quincaillerie } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';
import Search from '../components/Search.vue';

export default {
    name: 'Quincaillerie',
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
        class Hardware_Store {
            constructor(name, image, total, stock) {
                this.name = name
                this.image = image
                this.total = total
                this.stock = stock
            }
        }

        let data_hardware_store_card = ref([]);

        const makeDataHardwareStore = () => {
            let info_card = [];

            for (const hardware_store of info_quincaillerie) {
                const new_hardware_store_card = new Hardware_Store(hardware_store.name, hardware_store.image, hardware_store.total, hardware_store.stock)

                if (info_card.length === 28) {
                    info_card.push(new_hardware_store_card);
                    data_hardware_store_card.value.push(info_card);
                    info_card = [];
                } else {
                    info_card.push(new_hardware_store_card);
                }
            }
        };

        onMounted(makeDataHardwareStore,);

        return {
            data_hardware_store_card,
        }
    },
}
</script>

<style lang="scss">
.quincaillerie-page {
    .return {
        margin: 1rem;
    }

    .material-icons {
        background: var(--or);
        padding: 0.4rem;
        border-radius: 5px;
        font-size: 2.5rem;
        color: var(--black);
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {

            color: var(--brown);
            transform: translateX(-0.5rem) scale(1.1, 1.1);
            transition: 0.2s ease-out;
        }
    }

    .wrap-title {
        display: flex;
        width: 100%;
    }

}
</style>
