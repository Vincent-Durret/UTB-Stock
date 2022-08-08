<template>
    <main class="quicailleries-page">
        <h1>Quincailleries</h1>
        <div class="card">
            <router-link class="button" to="/bois/itauba">
                <!-- <img src="../assets/Bois/itauba.jpg" alt=""> -->
                <span class="text">Visserie terrasses</span>
            </router-link>
            <router-link class="button" to="/bois/ipe">
                <!-- <img src="../assets/Bois/ipe.jpg" alt=""> -->

                <span class="text">visseries structure</span>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <!-- <img src="../assets/Bois/cumaru.jpg" alt=""> -->
                <span class="text">??</span>
            </router-link>
            <router-link class="button" to="/bois/structures">
                <!-- <img src="../assets/Bois/structure.jpg" alt=""> -->
                <span class="text">??</span>
            </router-link>
        </div>
    </main>

</template>

<style lang="scss" scoped>
.quicailleries-page {

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
        opacity: 0.7;
        padding: 5px;
        position: relative;
        font-size: 1.2rem;
        text-transform: uppercase;
        color: var(--light);
    }

}

.button:hover {
    background: var(--primary);
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