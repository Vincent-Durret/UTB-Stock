<template>
    <div class="products-card">
        <div class="card">
            <router-link class="button"
                :to="{name: 'SubCard', params: {category: card.category, title: card.name, total: card.total }}">
                <div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
                <span class="text">{{ card.name }}</span>
                <h3 class="total"> {{card.total}} / {{ card.stock }} {{ card.unit }} </h3>
            </router-link>
            <div class="wrap-edit">
                <span @click="isOpen = !isOpen" class="material-icons edit">
                    mode_edit
                </span>
            </div>
            <div v-if="isOpen" class="wrap-icon">
                <span @click="openUpdate = !openUpdate" class="material-icons update">
                    edit_note
                </span>
                <span @click="deleteProduct" class="material-icons delete">
                    delete
                </span>
            </div>
        </div>

        <div v-if="openUpdate" class="forms">
            <div class="wrap-close">
                <span @click="openUpdate = !openUpdate" class="material-icons close">
                    cancel
                </span>
            </div>
            <h3>Modifier un produit</h3>
            <input v-model="updateCategory" type="text" list="category" :placeholder=card.category>
            <datalist id="category">
                <option value="Bois"></option>
                <option value="Quincailleries"></option>
                <option value="Produits"></option>
                <option value="Autres"></option>
            </datalist>
            <input v-model="updateName" type="text" list="nom" :placeholder=card.name>
            <datalist id="nom">
                <option :value=card.name></option>
            </datalist>
            <input v-model="updateImage" type="text" list="image" :placeholder=card.image>
            <datalist id="image">
                <option :value=card.image></option>
            </datalist>
            <input v-model="updateTotal" type="number" :placeholder=card.total>
            <input v-model="updateStock" type="number" :placeholder=card.stock>
            <input v-model="updateUnit" type="text" :placeholder=card.unit>
            <button @click="updateProducts">Modifier le produit</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'


export default {
    name: "Card",
    props: {
        card: Object,
    },
    data() {
        return {
            isOpen: false,
            openUpdate: false
        }
    },

    setup(props) {
        const toast = useToast()

        const updateCategory = ref('')
        const updateName = ref('')
        const updateImage = ref('')
        const updateTotal = ref()
        const updateStock = ref()
        const updateUnit = ref('')

        const updateProducts = async () => {
            const stockQ = doc(db, "products", props.card.id);

            await updateDoc(stockQ, {
                category: updateCategory.value,
                name: updateName.value,
                image: updateImage.value,
                total: updateTotal.value,
                stock: updateStock.value,
                unit: updateUnit.value
            });
            toast.success("Produits modifier")

        }

        const deleteProduct = async () => {
            await deleteDoc(doc(db, "products", props.card.id));
            toast.success("Produit supprimé avec succes")

        }

        return {
            updateCategory,
            updateName,
            updateImage,
            updateTotal,
            updateStock,
            updateUnit,
            updateProducts,
            deleteProduct
        }
    }

}
</script>

<style lang="scss" scoped>
.products-card {
    display: flex;
    justify-content: center;
    .card {
        display: flex;
        transition: 0.5s;
    }

    .wrap-edit {
        position: absolute;
        // margin-right: 3px;

        .edit {
            background: var(--black-alt);
            padding: 0.5rem;
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

    .wrap-icon {
        position: absolute;
        margin-left: 3rem;
        

        .delete {
            margin-left: 0.5rem;
            background: var(--black-alt);
            padding: 00.5rem;
            border-radius: 5px;
            color: var((--light));
            border: 1px solid var(--logo-letters);
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

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        box-sizing: border-box;
        text-decoration: none;
        color: white;
        width: 210px;
        height: 210px;
        border-radius: 25px;
        transition: 0.3s;

        &:hover {
            background: var(--black);
            transform: scale(0.9, 0.9);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            border: 3px solid black;
        }

        .image {
            position: absolute;
            background-image: url(../assets/Bois/itauba.jpg);
            background-position: center;
            background-size: cover;
            width: 200px;
            height: 200px;
            border-radius: 20px;
            z-index: 0;
            border: 2px solid var(--black);
        }


        .text {
            position: relative;
            background: rgba(0, 0, 0, 0.9);
            border-radius: 5px;
            padding: 5px;
            position: relative;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--logo-letters);
            z-index: 1;
            margin-left: 25px;
            margin-right: 25px;
            font-weight: 550;

        }

        .total {
            // margin-top: 1rem;
            top: 20%;
            background: rgba(0, 0, 0, 0.9);
            padding: 0.3rem;
            border-radius: 5px;
            position: relative;
            z-index: 1;
            color: var(--logo-letters);
            font-weight: 600;
        }
    }

    .forms {
        position: fixed;
        border: 3px solid var(--logo-letters);
        background: var(--black-alt);
        width: 30rem;
        height: 37rem;
        top: 25%;
        left: 40%;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        border-radius: 5px;
        z-index: 10;
        overflow: hidden;

        @media (max-width: 768px) {
            left: 20.5%;
            width: 18rem;
        }

        @media (min-width: 768px) {
            left: 25%;
        }

        input {
            padding: 1rem;
            border: none;
            color: black;
            border-radius: 5px;
            font-weight: bold;
            font-size: 1rem;
        }

        .wrap-close {
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
            color: var(--light);
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


@media (max-width: 760px) {
    .wood-card {
        .card {
            flex-direction: column;
            transition: 0.5s;
        }
    }
}
</style>