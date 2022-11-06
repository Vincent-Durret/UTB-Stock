<template>
    <div class="add-sub-product">
        <div class="wrap-element">
            <span @click="isOpen = !isOpen" class="material-icons open">
                post_add
            </span>
            <p class="title-logo">Ajouter un sous produit</p>
        </div>

        <div v-if="isOpen" class="cart-add-product">
            <div class="wrap-icon">
                <span @click="isOpen = !isOpen" class="material-icons close">
                    cancel
                </span>

            </div>

            <h3>Ajouter un sous produit</h3>
            <div class="forms">
                <select v-model="addTitle" name="product-title" required>
                    <option value="" disabled selected hidden>Choisir une catégorie</option>
                    <optgroup label="Bois">
                        <option value="Itauba">Itauba</option>
                        <option value="Structure">Structure</option>
                        <option value="Ipé">Ipé</option>
                        <option value="Cumaru">Cumaru</option>
                    </optgroup>
                </select>
                <input v-model="addTitle" type="text" placeholder="Si categorie inexistante a remplir">
                <input v-model="addName" type="text" placeholder="*Nom">
                <input v-model="addTotal" type="number" placeholder="*Totale">
                <input v-model="addStock" type="number" placeholder="*Stock">
                <input v-model="addUnit" type="text" placeholder="*Unités">
                <button @click="addSubProducts">Créer le sous produit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'
export default {
    name: "AddSubProduct",
    data() {
        return {
            isOpen: false
        }
    },

    setup() {
        const toast = useToast()

        const addTitle = ref('')
        const addName = ref('')
        const addTotal = ref()
        const addStock = ref()
        const addUnit = ref('')

        const addSubProducts = async () => {
            await addDoc(collection(db, "products"), {
                title: addTitle.value,
                name: addName.value,
                total: addTotal.value,
                stock: addStock.value,
                unit: addUnit.value,
            });
            toast.success("Sous produit créer avec succes")
            addSubProducts ? addTitle.value = '' : addTitle.value = addTitle.value
            addSubProducts ? addTotal.value = '' : addTotal.value = addTotal.value
            addSubProducts ? addName.value = '' : addName.value = addName.value
            addSubProducts ? addStock.value = '' : addStock.value = addStock.value
            addSubProducts ? addUnit.value = '' : addUnit.value = addUnit.value

        }


        return {
            addTitle,
            addName,
            addTotal,
            addStock,
            addUnit,
            addSubProducts
        }
    }

}
</script>

<style lang="scss">
.add-sub-product {

    .wrap-element {
        display: flex;
        align-items: center;

        .open {
            font-size: 2rem;
            color: var(--light);
            transition: 0.2s ease-out;
        }

        .title-logo {
            margin-left: 1rem;
            color: var(--light);
            font-weight: 600;
            transition: 0.2s ease-out;
        }

        &:hover {

            .open,
            .title-logo {
                color: var(--logo-letters);
            }
        }
    }



    .cart-add-product {
        position: fixed;
        border: 3px solid var(--logo-letters);
        background: var(--black);
        width: 30rem;
        height: 36rem;
        top: 25%;
        left: 40%;
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

        select {
            // padding: 1rem;
            border: none;
            color: black;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1rem;
        }

        input {
            padding: 1rem;
            border: none;
            color: black;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1rem;
        }

        .wrap-icon {
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
            display: flex;
            justify-content: center;
        }

        .forms {
            display: flex;
            flex-direction: column;
            justify-content: center;

            select {
                height: 1.5rem;
                margin: 1rem;
            }

            input {
                margin: 1rem;
                height: 1.5rem;
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
}
</style>