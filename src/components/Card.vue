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
            <div class="wrap-icon">
                <span v-if="isOpen" @click="deleteProduct" class="material-icons delete">
                    delete
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import { doc, deleteDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'


export default {
    name: "Card",
    props: {
        card: Object,
    },
    data() {
        return {
            isOpen: false
        }
    },

    setup(props) {
        const toast = useToast()

        const deleteProduct = async () => {
            await deleteDoc(doc(db, "products", props.card.id));
            toast.success("Produit supprimé avec succes")

        }

        return {
            deleteProduct
        }
    }

}
</script>

<style lang="scss" scoped>
.products-card {

    .card {
        display: flex;
        transition: 0.5s;
    }

    .wrap-edit {
        position: absolute;
        // margin-right: 3px;

        .edit {
            background: var(--black);
            padding: 0.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;
            opacity: 0.8;

            &:hover {
                color: var(--logo-letters);
                transform: translateY(-0.5rem) scale(1.1, 1.1);
                transition: 0.2s ease-out;
                opacity: 1;
            }
        }
    }

    .wrap-icon {
        position: absolute;
        margin-left: 3rem;

        .delete {
            background: var(--black);
            padding: 00.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;
            opacity: 0.8;

            &:hover {
                color: red;
                transform: translateY(-0.5rem) scale(1.1, 1.1);
                transition: 0.2s ease-out;
                opacity: 1;
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