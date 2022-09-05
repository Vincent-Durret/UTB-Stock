<template>
    <div class="card-row">


        <div class="wrapper-card">
            <Card v-for="(card, index) in info_card" :card="card" :key="index" />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
export default {
    name: "CardRow",
    props: {
        info_card: Array
    },
    components: {
        Card,
    },


}
</script>

<style lang="scss">
.card-row {
    background: #f0f7ee;
    min-height: 100vh;


    .wrapper-card {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1rem;
    }
}

@media (max-width: 760px) {
    .wrapper-card {
        flex-direction: column;
    }
}
</style>