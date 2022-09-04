<template>
    <div class="card-row">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>

        <h1>Bois : </h1>

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
    methods: {
        goHome() {
            this.$router.push('/home')
        }
    }

}
</script>

<style lang="scss">
.card-row {
    background: #f0f7ee;
    min-height: 100vh;

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