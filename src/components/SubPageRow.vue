<template>
    <div class="subpage-row">
        <div class="wrapper-sub">
            <SubPage v-for="(sub, index) in info_sub" :sub="sub" :key="index" />
        </div>
    </div>
</template>

<script>
import SubPage from './SubPage.vue';
export default {
    name: "SubPageRow",
    props: {
        info_sub: Array
    },
    components: {
        SubPage,
    },


}
</script>

<style lang="scss">
.subpage-row {
    background: #f0f7ee;
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