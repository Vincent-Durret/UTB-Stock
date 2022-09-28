<template>
    <div v-if="store.state.user">
        <aside :class="`${is_expanded && 'is-expanded'}`">
            <div class="logo">
                <router-link to="/">
                    <img :src="imgSrc" alt="UTB">
                </router-link>
            </div>

            <div class="menu-toggle-wrap">
                <button class="menu-toggle" @click="ToggleMenu">
                    <span class="material-icons">keyboard_double_arrow_right</span>
                </button>
            </div>

            <div class="menu">
                <router-link class="button" v-for="(wood) in data_card_wood" :key="wood"
                :to="{name: 'Products', params: {category: wood.category }}">
                    <span class="material-icons">forest</span>
                    <span class="text">Bois</span>
                </router-link>
                <router-link class="button" v-for="(hardware) in data_card_harware" :key="hardware"
                :to="{name: 'Products', params: {category: hardware.category }}">
                    <span class="material-icons">construction</span>
                    <span class="text">Quincailleries</span>
                </router-link>
                <router-link class="button" v-for="(product) in data_card_product" :key="product"
                :to="{name: 'Products', params: {category: product.category }}">
                    <span class="material-icons">inventory</span>
                    <span class="text">Produits</span>
                </router-link>
                <router-link class="button" v-for="(other) in data_card_other" :key="other"
                :to="{name: 'Products', params: {category: other.category }}">
                    <span class="material-icons">widgets</span>
                    <span class="text">Autres</span>
                </router-link>
            </div>

            <div class="flex"></div>

            <div class="menu">
                <div class="button" @click="store.dispatch('logout')">
                    <span class="material-icons">logout</span>
                    <span class="text">Se déconecter</span>
                </div>
            </div>
        </aside>
    </div>

</template>

<script setup>
import { ref } from 'vue';
import { onBeforeMount, onMounted } from 'vue'
import { useStore } from 'vuex'
import { collection, getDocs, query, where, limit } from "firebase/firestore";

import { db } from '../Firebase/firebase.js'




const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const imgSrc = ref('../assets/Logo/logo2.png')


const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    imgSrc.value = is_expanded.value ? '../assets/Logo/logo-UTB-stock.png' : '../assets/Logo/logo2.png'

    localStorage.getItem("is_expanded", is_expanded.value)
}



const store = useStore()

onBeforeMount(() => {
    store.dispatch('fetchUser')
})

let data_card_wood = ref([]);

const itemCollectionWood = query(collection(db, "products"), where("category", "==", "Bois"), limit(1))
const itemCollectionHardwareStore = query(collection(db, "products"), where("category", "==", "Quincailleries"), limit(1))
const itemCollectionProduct = query(collection(db, "products"), where("category", "==", "Produits"), limit(1))
const itemCollectionOther = query(collection(db, "products"), where("category", "==", "Autres"), limit(1))

onMounted(async () => {
    const querySnapshot = await getDocs(itemCollectionWood)
    let itemProduct = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())

        const wood = {
            id: doc.id,
            category: doc.data().category

        }
        itemProduct.push(wood)

    })
    data_card_wood.value = itemProduct

})

let data_card_harware = ref([])

onMounted(async () => {
    const querySnapshot = await getDocs(itemCollectionHardwareStore)
    let itemProduct = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())

        const hardware = {
            id: doc.id,
            category: doc.data().category

        }
        itemProduct.push(hardware)

    })
    data_card_harware.value = itemProduct

})

let data_card_product = ref([])

onMounted(async () => {
    const querySnapshot = await getDocs(itemCollectionProduct)
    let itemProduct = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())

        const product = {
            id: doc.id,
            category: doc.data().category

        }
        itemProduct.push(product)

    })
    data_card_product.value = itemProduct

})

let data_card_other = ref([])

onMounted(async () => {
    const querySnapshot = await getDocs(itemCollectionOther)
    let itemProduct = []
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data())

        const other = {
            id: doc.id,
            category: doc.data().category.toLowerCase()

        }
        itemProduct.push(other)

    })
    data_card_other.value = itemProduct

})





</script>

<style lang="scss" scoped>
aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    background-color: var(--or);
    color: var(--light);

    transition: 0.2s ease-out;
    z-index: 2;

    .flex {
        flex: 1;
    }

    .logo {
        margin-bottom: 2rem;

        img {
            width: 5rem;
            transition: 0.3s;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--black);
                cursor: pointer;
            }

            &:hover {
                .material-icons {
                    color: var(--brown);
                    transform: translateX(0.5rem);
                    transition: 0.2s ease-out;
                    cursor: pointer;

                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
        cursor: pointer;
    }


    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: var(--black);
                transition: 0.2s ease-out;
            }

            .text {
                color: var(--black);
                font-weight: 600;
                transition: 0.2s ease-out;
            }

            &:hover,
            &.router-link-exact-active {

                .material-icons,
                .text {
                    color: var(--brown);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--brown);

            }
        }
    }


    &.is-expanded {
        width: var(--sidebar-width);

        .logo {

            img {
                width: 15rem;
                transition: 0.3s;
            }
        }

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;

            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        height: 100%;
        z-index: 99;
    }
}
</style>
