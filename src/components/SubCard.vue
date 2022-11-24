<template>
    <div class="subpage">
        <div class="sub-card">
            <div v-for="subprod in sub.subproducts" :key="subprod" class="sub-wrap">
                <h2 class="title-subpage">{{ subprod.title }} </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <button @click="updateStocks" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock">{{ subprod.total }} /{{ sub.stock }} {{ sub.unit }}</p>
            </div>
            <!-- <div class="wrap-edit">
                <span @click="isOpen = !isOpen" class="material-icons edit">
                    mode_edit
                </span>
            </div>
            <div v-if="isOpen" class="wrap-icon">
                <span @click="openUpdate = !openUpdate" class="material-icons update">
                    edit_note
                </span>
                <span v-if="isOpen" @click="deleteProduct" class="material-icons delete">
                    delete
                </span>
            </div> -->
        </div>

        <!-- <div v-if="openUpdate" class="forms">
            <div class="wrap-close">
                <span @click="openUpdate = !openUpdate" class="material-icons close">
                    cancel
                </span>
            </div>
            <h3>Modifier le produit "{{ sub.name }}"</h3>
            <input v-model="updateTitle" type="text" list="nom" :placeholder=sub.title>
            <datalist id="nom">
                <option :value=sub.title></option>
            </datalist>
            <input v-model="updateName" type="text" list="name" :placeholder=sub.name>
            <datalist id="name">
                <option :value=sub.name></option>
            </datalist>
            <input v-model="updateTotal" type="number" :placeholder=sub.total>
            <input v-model="updateStock" type="number" :placeholder=sub.stock>
            <input v-model="updateUnit" type="text" :placeholder=sub.unit>
            <button @click="updateSubProducts">Modifier le produit</button>
        </div>  -->
    </div>
</template>


<script>
import { ref, computed } from 'vue'
import { doc, updateDoc, deleteDoc, where, query } from "firebase/firestore";
import { useRoute } from "vue-router"
import { useToast } from 'vue-toastification'


import { db } from '../Firebase/firebase.js'

export default {
    name: "SubCard",
    props: {
        sub: Object,
        test: Object,
    },
    data() {
        return {
            isOpen: false,
            openUpdate: false
        }
    },


    setup(props) {

    

        const toast = useToast()
        const route = useRoute()

        const inputStock = ref()

        const updateTitle = ref('')
        const updateName = ref('')
        const updateTotal = ref()
        const updateStock = ref()
        const updateUnit = ref('')


        const updateSubProducts = async () => {
            const q = doc(db, "products", props.sub.id)

            await updateDoc(q, {
                title: updateTitle.value,
                total: updateTotal.value,
            });

            updateSubProducts ? updateTitle.value = '' : updateTitle.value = updateTitle.value
            updateSubProducts ? updateTotal.value = '' : updateTotal.value = updateTotal.value

        }


        const updateStocks = async () => {

            const stockQ = query(doc(db, "products", props.sub.id), where("total", "array-contains", props.test.total));

            await updateDoc(stockQ, {

                total: Math.max(0, props.test.total - inputStock.value)

                // total: arrayUnion(Math.max(0, props.test.total - inputStock.value)),


            });
            toast.success(" Vous avez retirer " + inputStock.value + "  " + props.sub.unit + " en longueur " + props.sub.name)

            updateStocks ? inputStock.value = '' : inputStock.value = inputStock.value

        }


        const deleteProduct = async () => {
            await deleteDoc(doc(db, "products", props.sub.id));
            toast.success("Produit supprimé avec succes")

        }


        return {
            inputStock,
            updateTitle,
            updateTotal,
            updateSubProducts,
            updateStocks,
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
        z-index: 3;

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
        z-index: 3;

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

        .update {
            background: var(--black-alt);
            padding: 00.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;
            border: 1px solid var(--logo-letters);

            &:hover {
                color: var(--logo-letters);
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
        background: var(--or);
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

    .forms {
        position: relative;
        border: 3px solid var(--logo-letters);
        background: var(--black-alt);
        width: 30rem;
        // height: 37rem;
        // bottom: 100%;
        left: 14px;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;

        @media (max-width: 768px) {
            left: 20.5%;
            width: 18rem;
        }

        @media (min-width: 768px) {
            left: 25%;
        }


        .wrap-close {

            // margin-top: 1rem;
            .close {
                position: relative;
                float: right;
                background: var(--light);
                color: var(--logo-letters);
                padding: 0.3rem;
                border-radius: 5px;
                transition: color 0.2s, transform 0.3s;
                cursor: pointer;

                &:hover {
                    color: red;
                    // transform: scale(1.1, 1.1);

                    transition: 0.2s ease-out;
                }
            }
        }

        h3 {
            // margin-top: 1rem;
            display: flex;
            justify-content: center;
            color: var(--light);
        }


        input {
            margin-top: 1rem;
            margin: 1rem;
            padding: 8px;
            border: none;
            color: black;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1rem;
        }

        button {
            margin: 1rem;
            background: var(--light);
            padding: 1rem;
            font-size: 1.3rem;
            font-weight: bold;
            transition: background 0.3s;
            border-radius: 5px;

            &:hover {
                background: var(--logo-letters);
                color: white;
            }
        }
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