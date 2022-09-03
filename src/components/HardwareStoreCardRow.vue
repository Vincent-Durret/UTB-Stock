<template>
    <div class="hardwarestorecard-row">
        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>

        <h1>Quicailleries :</h1>

        <div class="wrapper-card">
            <HardwareStoreCard v-for="(card, index) in info_hardware_store_card" :info_card="card" :key="index" />
        </div>
    </div>
</template>

<script>
import HardwareStoreCard from './HardwareStoreCard.vue';
export default {
    name: "HardwareStoreCardRow",
    props: {
        info_hardware_store_card: Array
    },
    components: {
        HardwareStoreCard,
    },
    methods: {
        goHome() {
            this.$router.push('/home')
        }
    }

}
</script>

<style lang="scss">
.hardwarestorecard-row {
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