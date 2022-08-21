<template>
    <main class="page">
        <div class="card">
            <div class="wrap">
                <p>95 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de
                    lames restants
                </p>
            </div>
            <div class="wrap">

                <p>125 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de
                    lames restants
                </p>
            </div>
            <div class="wrap">

                <p>155 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de
                    lames restants
                </p>
            </div>
            <div class="wrap">

                <p>185 : <input type="number" placeholder="Nombre de lames" /> <button>Envoyer</button> Nombre de
                    lames restants
                </p>
            </div>
        </div>


    </main>

</template>

<script setup>
</script>

<style lang="scss" scoped>
main {
    background: #f0f7ee;
    min-height: 100vh;
}

.page {

    h1 {
        font-size: 3rem;
    }

    .card {
        display: flex;
        // justify-content: space-between;
    }

    .wrap {
        margin: 15px;
        box-sizing: border-box;
        width: 250px;
        height: 150px;
        background: var(--primary);
        border-radius: 25px;

    }


    p {
        margin: 5px;
        display: flex;
        align-items: center;
        line-height: 2rem;
        flex-direction: column;
        font-size: 1.2rem;

    }

    input {
        border-radius: 10px;
        margin: 5px;

    }

    button {
        margin: 5px;
        border-radius: 15px;
        background-color: var(--dark);
        padding: 10px;
        color: var(--light);
        transition: 0.2s;

        &:hover {
            box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
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