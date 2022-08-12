<template>
    <main class="bois-page">

        <div class="card">
            <router-link class="button" to="/bois/itauba">
                <img src="../assets/Bois/itauba.jpg" alt="">
                <span class="text">Itauba</span>
            </router-link>
            <router-link class="button" to="/bois/ipe">
                <img src="../assets/Bois/ipe.jpg" alt="">

                <span class="text">Ipé</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Bois/cumaru.jpg" alt="">
                <span class="text">Cumaru</span>
            </router-link>
            <router-link class="button" to="/bois/structures">
                <img src="../assets/Bois/structure.jpg" alt="">
                <span class="text">Structures</span>
            </router-link>
        </div>
    </main>

</template>
<style lang="scss" scoped>
main {
    background: #f0f7ee;
    min-height: 100vh;
}

.bois-page {

    .card {
        display: flex;
        flex-direction: row;
        transition: 0.5s;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        width: 250px;
        height: 250px;
        border-radius: 25px;

        &:hover {
            background: var(--primary);

        }

    }

    img {
        position: absolute;
        width: 200px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }


    .text {
        background: var(--dark);
        border-radius: 5px;
        padding: 5px;
        position: relative;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--light);
    }

}


@media (max-width: 760px) {
    .bois-page {
        .card {
            display: flex;
            flex-direction: column;
            transition: 0.5s;
        }
    }
}
</style>
