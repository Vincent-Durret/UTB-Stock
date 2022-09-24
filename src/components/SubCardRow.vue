<template>
    <main>
        <div class="subpage-row">
            <div class="wrapper-sub">
                <SubCard v-for="(sub, index) in info_sub" :sub="sub" :key="index" />
            </div>
        </div>
    </main>
</template>

<script>
import SubCard from './SubCard.vue';
export default {
    name: "SubCardRow",
    props: {
        info_sub: Array
    },
    components: {
        SubCard
    },


}
</script>

<style lang="scss">
.subpage-row {
    min-height: 100vh;


    .wrapper-sub {
        display: flex;
        flex-wrap: wrap;
        column-gap: 1rem;
    }
}

@media (max-width: 760px) {
    .wrapper-sub {
        flex-direction: column;
    }
}
</style>