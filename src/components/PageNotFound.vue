<template>
    <main class="not-found__page">
        <h1 class="not-found__title">Erreur 404</h1>
        <h2 class="not-found__not-found">Page Non Touver</h2>
    </main>
</template>
<script>
export default {
    name: "NotFound",
}

</script>

<style lang="scss">
    .not-found__page {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column
    }
</style>