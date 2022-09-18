<template>
    <div class="subpage-row">
        <div class="wrapper-sub">
            <SubPage v-for="(sub, index) in info_sub" :card="sub" :key="index" />
        </div>
    </div>
</template>

<script>
import SubPage from './SubPage.vue';
export default {
    name: "SubPage",
    props: {
        info_sub: Array
    },
    components: {
    SubPage
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