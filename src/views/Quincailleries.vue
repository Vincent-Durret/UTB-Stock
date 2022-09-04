<template>
    <main class="quincaillerie-page">
        <CardRow v-for="(data, i) in data_hardware_store_card" :info_card="data" :key="i" />
    </main>


</template>

<script>
import info_quicaillerie_1 from '../DB/dbQuin.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
    name: 'Quicaillerie',
    components: {
        CardRow
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

            for (const hardware_store of info_quicaillerie_1) {
                const new_hardware_store_card = new Hardware_Store(hardware_store.name, hardware_store.image, hardware_store.total)

                if (info_card.length === 23) {
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
</style>
