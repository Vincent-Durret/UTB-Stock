<template>
    <main class="bois-page">
        <div class="card">
            <router-link class="button" to="/">
                <span class="bg"></span>
                <span class="text">Itauba</span>
            </router-link>
            <router-link class="button" to="/">
                <span class="text">Ipé</span>
            </router-link>
            <router-link class="button" to="/">
                <span class="text">Cumaru</span>
            </router-link>
        </div>
    </main>

</template>
<style lang="scss" scoped>
main {
    background: #f0f7ee;

    display: flex;
    flex-direction: row;
    min-height: 100vh;
}

.bois-page {

    .card {
        display: flex;
        flex-direction: row;

    }

    .button {
        margin:35px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        background: rgba(0, 0, 0, 0.4);
        width: 250px;
        height: 250px;
        border-radius: 25px;

    }

    .text {
        font-size: 1.2rem;
        text-transform: uppercase;
        color: #fff;
    }

}

.button:hover {
    background: white;
}
</style>
