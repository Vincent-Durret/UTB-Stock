<template>
    <main class="subcard">
        <div class="return">
            <span @click="$router.back()" class="material-icons">arrow_back</span>
        </div>
        <div class="wrap-titre">
            <h1> {{ $route.params.title }} </h1>
        </div>
        <div class="wrap-card">
            <SubCard v-for="product in products.subproducts" :sub="product" :key="product" />
        </div>
    </main>
</template>

<script>
import SubCard from '../components/SubCard.vue';
import { useRoute } from "vue-router"
import { collection, query, where, onSnapshot } from 'firebase/firestore'
import { db } from '../Firebase/firebase.js'
import { ref, onMounted } from 'vue';
export default {
    name: "SubPage",
    components: {
        SubCard
    },

    setup() {

        const products = ref([]);

        onMounted(() => {
            const route = useRoute()
            const q = query(collection(db, "products"), where("id", "==", route.params.id))


            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                    console.log(doc.id)
                })
                products.value = fetchedProducts
            });
        })



        return {
            products,
        }
    },
}
</script>

<style lang="scss">
.subcard {
    position: relative;
    z-index: 3;

    .return {
        margin: 1rem;

        .material-icons {
            background: rgba(0, 0, 0, 0.9);
            padding: 0.4rem;
            border-radius: 5px;
            font-size: 2.5rem;
            color: var((--light));
            cursor: pointer;
            transition: 0.2s;
            border: 2px solid var(--logo-letters);

            &:hover {
                color: var(--logo-letters);
                transform: translateX(-0.5rem) scale(1.1, 1.1);
                filter: drop-shadow(0px 0px 10px var(--logo-letters));
                transition: 0.2s ease-out;
            }

            .button {
                text-decoration: none;
            }
        }
    }




    .wrap-titre {
        display: flex;
        justify-content: center;
        width: 100%;
        position: relative;
        z-index: 3;
    }

    .wrap-card {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }


}
</style>