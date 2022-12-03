<template>
    <div class="add-product" alt="Ajouter un produits">
        <div @click="isOpen = !isOpen" class="wrap-element">
            <span class="material-icons open">
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
                    <option value="bois">Bois</option>
                    <option value="quincailleries">Quincailleries</option>
                    <option value="produits">Produits</option>
                    <option value="autres">Autres</option>
                </select>

                <input v-model="addName" type="text" placeholder="*Nom">
                <input v-model="addImage" type="text" placeholder="*Image">
                <h3>Ajouter les sous produits</h3>
                <div v-for="item in subproducts" :key="item" class="wrap__input-subproducts">

                    <input v-model="item.title" type="text"  placeholder="*Titre sous produits">
                    <input v-model="item.total" type="number"  placeholder="*Totale">
                </div>
                <div @click="addInputItem" class="wrap__add-item">
                    <span class="material-icons add-item">
                        add
                    </span>
                </div>
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
            isOpen: false,
        }
    },


    setup() {
        const toast = useToast()

        const addCategory = ref('')
        const addName = ref('')
        const addImage = ref('')
        const addTitle = ref('')
        const addTotal = ref()
        const addStock = ref()
        const addUnit = ref('')
        const subproducts = ref([])

        const addInputItem = () => {
            subproducts.value.push({
                title: "",
                total: 0
            })
        }



        console.log(subproducts.value)
        // const [subproducts, setSubProducts] = useState([])

        // console.log(this.subproducts)

        // const addItem = () => {
        //     setSubProducts([...subproducts, { title: addTitle.value, total: addTotal.value }])
        // }

        // console.log(addItem())


        const addProducts = async () => {
            await addDoc(collection(db, "products"), {
                category: addCategory.value,
                name: addName.value,
                image: addImage.value,
                subproducts: subproducts.value,
                stock: addStock.value,
                unit: addUnit.value,
            });
            toast.success("Produit créer avec succes")
            addProducts ? addCategory.value = '' : addCategory.value = addCategory.value
            addProducts ? addName.value = '' : addName.value = addName.value
            addProducts ? addImage.value = '' : addImage.value = addImage.value
            addProducts ? addTitle.value = '' : addTitle.value = addTitle.value
            addProducts ? addTotal.value = '' : addTotal.value = addTotal.value
            addProducts ? addStock.value = '' : addStock.value = addStock.value
            addProducts ? addUnit.value = '' : addUnit.value = addUnit.value

        }



        return {
            addCategory,
            addName,
            addImage,
            addTitle,
            addTotal,
            addStock,
            addUnit,
            addProducts,
            addInputItem,
            subproducts
            // addItem,
            // handlerChange,
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
        height: 36rem;
        top: 0;
        left: 40%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;
        overflow-y: scroll;

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