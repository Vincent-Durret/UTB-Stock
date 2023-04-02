<template>
    <main class="not-found__page">
        <h1 class="not-found__title">Erreur 404</h1>
        <h2 class="not-found__not-found">Page Non Touver</h2>

        <BtnReturn />
        <h3>Revenir en arriere !</h3>
    </main>
</template>
<script>
import BtnReturn from '../components/button/BtnReturn.vue'
export default {
    name: "NotFound",
    components: {
        BtnReturn
    }
}

</script>

<style lang="scss">
.not-found__page {
    position: relative;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column
}
</style>