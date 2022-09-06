<template>
    <main class="quincaillerie-page">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>

        <h1>Quincailleries : </h1>
        <CardRow v-for="(data, i) in data_hardware_store_card" :info_card="data" :key="i" />
    </main>


</template>

<script>
import { info_quincaillerie } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
    name: 'Quincaillerie',
    components: {
        CardRow
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
    setup() {
        class Hardware_Store {
            constructor(name, image, total) {
                this.name = name
                this.image = image
                this.total = total
            }
        }

        let data_hardware_store_card = ref([]);

        const makeDataHardwareStore = () => {
            let info_card = [];

            for (const hardware_store of info_quincaillerie) {
                const new_hardware_store_card = new Hardware_Store(hardware_store.name, hardware_store.image, hardware_store.total)

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
