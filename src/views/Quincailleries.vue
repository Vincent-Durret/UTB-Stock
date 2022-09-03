<template>
    <main class="bois-page">
        <HardwareStoreCardRow v-for="(data, i) in data_hardware_store_card" :info_hardware_store_card="data" :key="i" />
    </main>


</template>

<script>
import info_quicaillerie_1 from '../DB/dbQuin.js'

import { onMounted, ref } from 'vue';

import HardwareStoreCardRow from '../components/HardwareStoreCardRow.vue';

export default {
    name: 'Quicaillerie',
    components: {
        HardwareStoreCardRow,
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
            let info_hardware_store_card = [];

            for (const hardware_store of info_quicaillerie_1) {
                const new_hardware_store_card = new Hardware_Store(hardware_store.name, hardware_store.image, hardware_store.total)

                if (info_hardware_store_card.length === 23) {
                    info_hardware_store_card.push(new_hardware_store_card);
                    data_hardware_store_card.value.push(info_hardware_store_card);
                    info_hardware_store_card = [];
                } else {
                    info_hardware_store_card.push(new_hardware_store_card);
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
