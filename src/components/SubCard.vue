<template>
    <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.name }}: </h2>
                <input v-model="inputStock" type="number" placeholder="Nombre de lames" />
                <button @click="updateStock" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock">{{ sub.total }} / {{ sub.stock }} {{ sub.unit }}</p>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { doc, updateDoc, increment } from "firebase/firestore";


import { db } from '../Firebase/firebase.js'

export default {
    name: "SubCard",
    props: {
        sub: Object,
    },

    setup() {
        const inputStock = ref(0)
        const id = sub.id

        const updateStock = async () => {
            const stockQ = doc(db, "products", id);

            await updateDoc(stockQ, {
                total: increment(-inputStock.value)
            });



        }

        return {
            inputStock,
            updateStock
        }
    }
}
</script>

<style lang="scss" >
.subpage {
    .sub-card {
        display: flex;
    }

    .sub-wrap {
        margin: 15px;
        box-sizing: border-box;
        width: 230px;
        height: 230px;
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
    .subpage {
        .sub-card {
            flex-direction: column;
            transition: 0.5s;
        }

        .sub-wrap {
            margin: 10px;
        }
    }
}
</style>