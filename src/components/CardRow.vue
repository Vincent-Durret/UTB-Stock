<template>
    <main>
        <div class="card-row">
            <div class="wrapper-card">
                <Card v-for="(product, index) in product" :card="product" :key="index" />
            </div>
        </div>
    </main>
</template>

<script>
import Card from './Card.vue';
export default {
    name: "CardRow",
    props: {
        product: Array
    },
    components: {
        Card,
    },


}
</script>

<style lang="scss">
main {

    .card-row {



        .wrapper-card {
            display: flex;
            flex-wrap: wrap;
            column-gap: 1rem;
            row-gap: 1rem;
        }
    }
}


@media (max-width: 760px) {
    .wrapper-card {
        flex-direction: column;
    }
}
</style>