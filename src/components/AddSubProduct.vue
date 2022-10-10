<template>
    <div class="add-sub-product">
        <div class="wrap-element">
            <span @click="isOpen = !isOpen" class="material-icons open">
                post_add
            </span>
            <p class="title-logo">Ajouter un sous produit</p>
        </div>

        <div v-if="isOpen" class="cart-add-product">
            <div  class="wrap-icon">
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
    // margin: 1rem;
    // position: absolute;

    .wrap-element {
        display: flex;
        align-items: center;
        // // float: left;

        .open {
            position: relative;
            // background: var(--black);
            // padding: 0.4rem;
            // border-radius: 5px;
            // font-size: 2.5rem;
            color: var((--light));
            cursor: pointer;
            transition: 0.2s;
            z-index: 3;

            // &:hover {
            //     color: var(--logo-letters);
            //     transform: translateY(-0.5rem) scale(1.2, 1.2);
            //     transition: 0.2s ease-out;
            // }
        }

        .title-logo {
            position: absolute;
            margin-left: 0.8rem;
            transform: translateX(-0.5rem);
            visibility: hidden;
            z-index: -1;

        }

        &:hover .title-logo {
            visibility: visible;
            transform: translateX(4rem);
            transition: transform 0.3s ease-in-out;
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