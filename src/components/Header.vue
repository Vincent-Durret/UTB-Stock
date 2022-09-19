<template>
    <main>
        <header>
            <div class="wrap-header-img">
                <img class="header-img" src="../assets/Logo/logo-UTB-stock.png" alt="">
            </div>
            <Search />
        </header>
    </main>
</template>

<script>
import Search from '../components/Search.vue'

export default {
    name: 'Header',
    components: {
        Search,
    },
}
</script>

<style lang="scss">
main {
    padding-left: 4rem;
    padding-top: 0rem;


    header {
        background: var(--dark-alt);

        .wrap-header-img {
            padding: 1rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .header-img {
                background-size: cover;
                position: center;
                width: 50%;
            }
        }
    }
}

@media (max-width: 760px) {}
</style>