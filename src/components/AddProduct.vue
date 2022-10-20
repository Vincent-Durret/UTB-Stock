<template>
    <div class="add-product" alt="Ajouter un produits">
        <div @click="isOpen = !isOpen" class="wrap-element">
            <span  class="material-icons open">
                note_add
            </span>
            <p class="title-logo">Ajouter un produit</p>
        </div>
        <div v-if="isOpen" class="cart-add-product">
            <div class="wrap-icon">
                <span @click="isOpen = !isOpen" class="material-icons close">
                    cancel
                </span>
            </div>

            <h3>Ajouter un produit</h3>
            <div class="forms">
                <select v-model="addCategory" name="product-category" required>
                    <option value="" disabled selected hidden>Choisir une catégorie</option>
                    <option value="Bois">Bois</option>
                    <option value="Quincailleries">Quincailleries</option>
                    <option value="Produits">Produits</option>
                    <option value="Autres">Autres</option>
                </select>

                <input v-model="addName" type="text" placeholder="*Nom">
                <input v-model="addImage" type="text" placeholder="*Image">
                <input v-model="addTotal" type="number" placeholder="*Totale">
                <input v-model="addStock" type="number" placeholder="*Stock">
                <input v-model="addUnit" type="text" placeholder="*Unités">
                <button @click="addProducts">Créer le produit</button>
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
    name: "AddProduct",
    data() {
        return {
            isOpen: false
        }
    },

    setup() {
        const toast = useToast()

        const addCategory = ref('')
        const addName = ref('')
        const addImage = ref('')
        const addTotal = ref()
        const addStock = ref()
        const addUnit = ref('')

        const addProducts = async () => {
            await addDoc(collection(db, "products"), {
                category: addCategory.value,
                name: addName.value,
                image: addImage.value,
                total: addTotal.value,
                stock: addStock.value,
                unit: addUnit.value,
            });
            toast.success("Produit créer avec succes")

        }

        return {
            addCategory,
            addName,
            addImage,
            addTotal,
            addStock,
            addUnit,
            addProducts
        }
    }

}
</script>

<style lang="scss">
.add-product {
    // margin-bottom: 1rem;

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
        height: 32rem;
        top: 25%;
        left: 40%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;

        @media (max-width: 768px) {
            left: 22%;
            width: 18rem;
        }
        @media (max-width: 1200px) {
            left: 25%;
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
                    transform: scale(1.1, 1.1);

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