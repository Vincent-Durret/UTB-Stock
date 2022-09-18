<template>

    <main class="page">

        <div class="return">
            <span @click="goBack()" class="material-icons">arrow_back</span>
        </div>

        <div class="card">
            <div class="wrap">
                <p>95 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de
                    lames restants
                </p>
            </div>
        </div>
    </main>

</template>

<script>
export default {
    name: 'SubPage',
    props: {
        sub: Object,
    },

    methods: {
        goBack() {
            this.$router.push('/bois')
        }
    }
}
</script>

<style lang="scss" scoped>
main {
    background: #f0f7ee;
    min-height: 100vh;
}

.page {

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
    }

    .card {
        display: flex;
    }

    .wrap {
        margin: 15px;
        box-sizing: border-box;
        width: 16rem;
        height: 15rem;
        background: var(--primary);
        border-radius: 5%;
        display: flex;
        justify-content: center;
        align-items: center;

    }


    p {
        display: flex;
        align-items: center;
        line-height: 2rem;
        flex-direction: column;
        font-size: 1.2rem;
        margin: 0 auto;
        line-height: 3rem;
    }

    input[type=number]:focus {
            border-radius: 10px;
            border: 1px solid var(--dark); 
            transition: 0.2s;
            border-radius: 2px;
    
        }

    button {
        margin-top: 10px;
        border-radius: 2px;
        background-color: var(--dark);
        padding: 10px;
        color: var(--light);
        transition: 0.2s;

        &:hover {
            box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
            background-color: var(--dark-alt);
            transform: scale(0.95, 0.95);
        }
    }

}

@media (max-width: 760px) {
    .page {
        .card {
            display: flex;
            flex-direction: column;
            transition: 0.5s;
            margin-left: -10px;
        }

        .wrap {
            margin: 10px;
        }
    }
}
</style>