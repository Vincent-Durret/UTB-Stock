<template>
    <main class="product-page">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>
        <div class="wrap-title">
            <h1>Produits</h1>
        </div>
        <CardRow v-for="(data, i) in data_product_card" :info_card="data" :key="i" />
    </main>


</template>

<script>
import { info_product } from '../DB/db.js'

import { onMounted, ref } from 'vue';

import CardRow from '../components/CardRow.vue';

export default {
    name: 'Produits',
    components: {
        CardRow
    },
    methods: {
        goHome() {
            this.$router.push('/')
        }
    },
    setup() {
        class Product {
            constructor(name, image, total) {
                this.name = name
                this.image = image
                this.total = total
            }
        }

        let data_product_card = ref([]);

        const makeDataProduct = () => {
            let info_card = [];

            for (const product of info_product) {
                const new_product_card = new Product(product.name, product.image, product.total)

                if (info_card.length == 19) {
                    info_card.push(new_product_card);
                    data_product_card.value.push(info_card);
                    info_card = [];
                } else {
                    info_card.push(new_product_card);
                }
            }
        };

        onMounted(makeDataProduct,);

        return {
            data_product_card,
        }
    },
}
</script>

<style lang="scss">
.product-page {
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

    .wrap-title {
        display: flex;
        width: 100%;

        h1 {
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
