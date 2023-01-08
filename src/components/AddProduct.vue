<template>
    <div class="add-product" alt="Ajouter un produits">
        <div @click="isOpen = !isOpen" class="wrap-element">
            <span class="material-icons open">
                note_add
            </span>
            <p class="title-logo">Ajouter un produit</p>
        </div>
        <div v-if="isOpen" class="cart-add-product">
            <div class="addproduct__froms">
                <div class="wrap-icon">
                    <span @click="isOpen = !isOpen" class="material-icons close">
                        cancel
                    </span>
                </div>

                <h3>Ajouter un produit</h3>
                <div class="forms">
                    <select v-model="addCategory" name="product-category" required>
                        <option value="" disabled selected hidden>Choisir une catégorie</option>
                        <option value="bois">Bois</option>
                        <option value="quincailleries">Quincailleries</option>
                        <option value="produits">Produits</option>
                        <option value="autres">Autres</option>
                    </select>
                    <input v-model="addName" type="text" placeholder="*Nom">
                    <input v-model="addImage" type="text" placeholder="*Image">
                    <input v-model="addStock" type="number" placeholder="*Stock">
                    <input v-model="addUnit" type="text" placeholder="*Unités">
                    <button @click="addProducts()">Créer le produit</button>
                </div>
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

    setup() {
        const toast = useToast()
        const isOpen = ref(false)

        const addCategory = ref('')
        const addName = ref('')
        const addImage = ref('')
        const addTitle = ref('')
        const addStock = ref(0)
        const addUnit = ref('')


        const addProducts = async () => {
            await addDoc(collection(db, "products"), {
                category: addCategory.value,
                name: addName.value,
                image: addImage.value,
                stock: addStock.value,
                unit: addUnit.value,
            });
            toast.success("Produit créer avec succes")
            addProducts ? addCategory.value = '' : addCategory.value = addCategory.value
            addProducts ? addName.value = '' : addName.value = addName.value
            addProducts ? addImage.value = '' : addImage.value = addImage.value
            addProducts ? addTitle.value = '' : addTitle.value = addTitle.value
            addProducts ? addStock.value = '' : addStock.value = addStock.value
            addProducts ? addUnit.value = '' : addUnit.value = addUnit.value

            isOpen.value = false
        }


        return {
            isOpen,
            addCategory,
            addName,
            addImage,
            addTitle,
            addStock,
            addUnit,
            addProducts,
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
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background: rgba(9, 10, 17, 0.76);
        z-index: 14;

        @media (max-width: 768px) {
            left: 20.5%;
            width: 18rem;
        }

        @media (min-width: 768px) {
            left: 25%;
        }

        .addproduct__froms {
            position: fixed;
            border: 3px solid var(--logo-letters);
            display: flex;
            flex-direction: column;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // padding: 1rem;
            background: var(--black);
            z-index: 15;
            border-radius: 5px;
            width: 400px;
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
                color: var(--light);
                border: 1px solid var(--logo-letters);
                padding: 0.3rem;
                border-radius: 2px;
                transition: color 0.2s, transform 0.3s;
                cursor: pointer;

                &:hover {
                    color: red;
                    // transform: scale(1.1, 1.1);
                    background: var(--logo-letters);

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

            .wrap__input-subproducts {
                display: flex;
                justify-content: center;
                align-items: center;

                input {
                    width: 100%;
                    margin: 1rem;
                    height: 1.5rem;
                }

            }

            .wrap__add-item {
                display: flex;
                align-items: center;
                justify-content: center;

                .add-item {
                    padding: 0.8rem;
                    background: var(--light);
                    font-size: 1rem;
                    font-weight: bold;
                    color: var(--logo-letters);
                    transition: background 0.3s;

                    &:hover {
                        background: var(--logo-letters);
                        color: var(--light);
                        transition: color 0.3s;
                    }
                }


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