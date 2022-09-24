<template>
    <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.name }}: </h2>
                <input type="number" placeholder="Nombre de lames" />
                <button class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock">{{ sub.total }} / {{ sub.stock }}</p>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "SubCard",
    props: {
        sub: Object,
    },
}
</script>

<style lang="scss" scoped>
main {
    min-height: 100vh;
}

.subpage {

    .sub-card {
        display: flex;
    }

    .sub-wrap {
        margin: 15px;
        box-sizing: border-box;
        width: 16rem;
        height: 15rem;
        background: var(--or-alt);
        border-radius: 5%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: border 0.3s ease-in-out;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
            border: 15px solid var(--or);
        }

    }

    .title-subpage {
        font-size: 2rem;
        // line-height: 3.5rem;
    }


    input {
        border: none;
        outline: none;
        height: 2rem;
        margin: 0.7rem;
        border-radius: 5px;

    }

    input[type=number]:focus {
        border: none;
        outline: none;
        transition: 0.2s;
        border-radius: 2px;

    }

    .bouton-subpage {
        margin-top: 10px;
        border-radius: 5px;
        background-color: var(--or);
        padding: 10px;
        color: var(--black);
        transition: background 0.2s ease;
        font-size: 1rem;
        font-weight: 700;

        &:hover {
            box-shadow: rgb(38, 57, 77) 0px 10px 15px -10px;
            background-color: var(--brown);
            color: var(--white);
        }
    }

    .restant-stock {
        font-size: 1.5rem;
        margin-top: 0.7rem;
    }

    .total-stock {
        line-height: 2rem;
        font-size: 1.2rem;
    }

}

@media (max-width: 760px) {
    .subpage-hardware-store {
        .sub-card {
            display: flex;
            flex-direction: column;
            transition: 0.5s;
            margin-left: -10px;
        }

        .sub-wrap {
            margin: 10px;
        }
    }
}
</style>