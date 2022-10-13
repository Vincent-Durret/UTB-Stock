<template>
    <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.name }}: </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <button @click="updateStock" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock">{{ sub.total }} / {{ sub.stock }} {{ sub.unit }}</p>
            </div>
            <div class="wrap-edit">
                <span @click="isOpen = !isOpen" class="material-icons edit">
                    mode_edit
                </span>
            </div>
            <div class="wrap-icon">
                <span v-if="isOpen" @click="deleteProduct" class="material-icons delete">
                    delete
                </span>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useToast } from 'vue-toastification'


import { db } from '../Firebase/firebase.js'

export default {
    name: "SubCard",
    props: {
        sub: Object,
    },
    data() {
        return {
            isOpen: false
        }
    },

    setup(props) {
        const inputStock = ref()
        const toast = useToast()



        const updateStock = () => {
            const stockQ = doc(db, "products", props.sub.id);

            updateDoc(stockQ, {
                total: Math.max(0, props.sub.total - inputStock.value)
            });
            toast.success(" Vous avez retirer " + inputStock.value + props.sub.unit + " en longueur " + props.sub.name)

        }

        const deleteProduct = async () => {
            await deleteDoc(doc(db, "products", props.sub.id));
            toast.success("Produit supprimé avec succes")

        }

        return {
            inputStock,
            updateStock,
            deleteProduct
        }
    }
}
</script>

<style lang="scss" >
.subpage {
    .sub-card {
        display: flex;
    }

    .wrap-edit {
        position: absolute;
        margin-right: 3px;

        .edit {
            background: black;
            border: 1px solid var(--logo-letters);
            padding: 0.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;

            &:hover {
                color: var(--logo-letters);
                transform: translateY(-0.5rem) scale(1.1, 1.1);
                transition: 0.2s ease-out;
            }
        }
    }

    .wrap-icon {
        position: absolute;
        margin-left: 3rem;

        .delete {
            background: rgba(0, 0, 0, 0.9);
            border: 1px solid var(--logo-letters);
            padding: 0.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;

            &:hover {
                color: red;
                transform: translateY(-0.5rem) scale(1.1, 1.1);
                transition: 0.2s ease-out;
            }
        }
    }

    .sub-wrap {
        margin: 15px;
        box-sizing: border-box;
        width: 230px;
        height: 230px;
        // background: rgba(0, 0, 0, 0.9);
        background: var(--or-alt);
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transition: border 0.2s ease-in;
        border: 2px solid var(--black);
        // filter: drop-shadow(0px 0px 15px var(--logo-letters));

    }

    .title-subpage {
        font-size: 2rem;
        color: var(--black-alt);
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
        background-color: var(--black);
        padding: 10px;
        color: var(--light);
        transition: background 0.2s ease;
        font-size: 1rem;
        font-weight: 700;

        &:hover {
            color: var(--logo-letters);
        }
    }

    .restant-stock {
        font-size: 1.5rem;
        margin-top: 0.7rem;
        color: var(--black-alt);
    }

    .total-stock {
        line-height: 2rem;
        font-size: 1.2rem;
        color: var(--black-alt);

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