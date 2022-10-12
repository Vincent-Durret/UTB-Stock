<template>
    <div class="update-product">
        <div class="wrap-element">
            <span class="material-icons open">
                edit
            </span>
            <p class="title-logo">Modifier un produit</p>

        </div>
        <div class="cart-add-product">
            <div class="wrap-icon">
                <span @click="isOpen = !isOpen" class="material-icons close">
                    cancel
                </span>

            </div>

            <h3>Modifier un produit</h3>
            <div class="forms">
                <select v-model="addTitle" name="product-title" required>
                    <option value="" disabled selected hidden>Choisir un Produit</option>
                    <option v-for="(product) in allitem" :key="product.id" value="Itauba">{{ product.name }}</option>
                </select>
                <input v-for="(product) in allitem" :key="product.id" v-model="category" type="text" :placeholder="product.total">
                <input v-model="name" type="text" placeholder="*Nom">
                <input v-model="total" type="number" placeholder="*Totale">
                <input v-model="stock" type="number" placeholder="*Stock">
                <input v-model="unit" type="text" placeholder="*Unités">
                <button>Modifier le produit</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { collection, addDoc, query, where, onSnapshot } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useRoute } from "vue-router"
import { useToast } from 'vue-toastification'
export default {
    name: "UpdateProducts",
    data() {
        return {
            isOpen: false
        }
    },

    setup() {
        const toast = useToast()

        const Name = ref('')
        const Total = ref()
        const Stock = ref()
        const Unit = ref('')

        // const addSubProducts = async () => {
        //     await addDoc(collection(db, "products"), {
        //         title: addTitle.value,
        //         name: addName.value,
        //         total: addTotal.value,
        //         stock: addStock.value,
        //         unit: addUnit.value,
        //     });
        //     toast.success("Sous produit créer avec succes")

        // }

        const allitem = ref([]);

        onMounted(async () => {
            const q = query(collection(db, 'products'))


            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                })
                allitem.value = fetchedProducts
            })
            console.log(product.name)
        })
        // const category = ref()

        return {
            // addTitle,
            // addName,
            // addTotal,
            // addStock,
            // addUnit,
            // addSubProducts,
            allitem,
            // category
        }
    }

}
</script>

<style lang="scss">
.update-product {

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
        border: 3px solid var(--black);
        background: var(--or-alt);
        width: 30rem;
        height: 32.5rem;
        top: 25%;
        left: 40%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;

        .wrap-icon {
            .close {
                position: relative;
                float: right;
                background: var(--or);
                color: var(--black);
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
                background: var(--or);
                padding: 1rem;
                font-size: 1.3rem;
                font-weight: bold;
                transition: background 0.3s;
                border-radius: 5px;

                &:hover {
                    background: var(--brown);
                    color: white;
                }
            }
        }

    }
}
</style>