<template>
    <main class="bois-page">

        <div class="return">
            <span @click="goHome()" class="material-icons">arrow_back</span>
        </div>

        <h1>Bois : </h1>

        <div class="card">
            <router-link class="button" to="/bois/itauba">
                <img src="../assets/Bois/itauba.jpg" alt="">
                <span class="text">Itauba</span>
                <progress id="file" max="100" value="90"> 70% </progress>
            </router-link>
            <router-link class="button" to="/bois/ipe">
                <img src="../assets/Bois/ipe.jpg" alt="">
                <span class="text">Ipé</span>
                <progress id="file" max="100" value="10"> 70% </progress>
            </router-link>
            <router-link class="button" to="/bois/cumaru">
                <img src="../assets/Bois/cumaru.jpg" alt="">
                <span class="text">Cumaru</span>
                <progress id="file" max="100" value="20"> 70% </progress>
            </router-link>
            <router-link class="button" to="/bois/structures">
                <img src="../assets/Bois/structure.jpg" alt="">
                <span class="text">Structures</span>
                <progress id="file" max="100" value="60"> 70% </progress>
            </router-link>
        </div>
    </main>

</template>

<script>
export default {
    methods: {
        goHome() {
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    background: #f0f7ee;
    min-height: 100vh;
}

.bois-page {

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
        font-size: 3rem;
        margin: 20px;
    }

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
        flex-direction: column;
        width: 250px;
        height: 250px;
        border-radius: 25px;
        transition: 0.3s;

        &:hover {
            background: var(--primary);
            transform: scale(0.9, 0.9);
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

    progress[value] {
        position: relative;
        bottom: -4rem;
        writing-mode: horizontal-tb !important;
        appearance: none;
        box-sizing: border-box;
        display: inline-block;
        height: 1em;
        width: 9em;
        vertical-align: -0.2em;
    }

    progress[value]::-webkit-progress-bar {
        background-color: var(--primary);
        border-radius: 5px;
    }

    progress[value]::-webkit-progress-value {
        background-color: #52D017;
        border-radius: 5px;
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }

    progress[value="20"]::-webkit-progress-value {
        background-color: #FF8C00;
        border-radius: 5px;
        background-size: 35px 20px, 100% 100%, 100% 100%;
    }
    progress[value="10"]::-webkit-progress-value {
        background-color: #E42217;
        border-radius: 5px;
        background-size: 35px 20px, 100% 100%, 100% 100%;
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
