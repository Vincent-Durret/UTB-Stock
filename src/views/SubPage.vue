<template>
    <main class="subcard">
        <div class="return">
            <span @click="$router.back()" class="material-icons">arrow_back</span>
        </div>
        <div class="wrap-titre">
            <h1> {{ $route.params.name.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase()) }} </h1>
        </div>
        <form class="addproduct">
            <input class="addprod__input" v-model="addTitleRef" type="text" name="Title"
                placeholder="Nom de la fourniture">
            <input v-model="addTotalRef" type="number" name="Total" placeholder="Quantitée(s)">
        </form>

        <button @click="addSubCollection()">Valider</button>


        <div class="wrap-card">
            <SubCard v-for="product in products" :sub="product" :key="product.id" />
        </div>
    </main>
</template>

<script>
import SubCard from '../components/SubCard.vue';
import { useRoute } from "vue-router"
import { collection, query, onSnapshot, addDoc, getDocs } from 'firebase/firestore'
import { db } from '../Firebase/firebase.js'
import { ref, onMounted } from 'vue';
import { useToast } from 'vue-toastification'

export default {
    name: "SubPage",
    components: {
        SubCard
    },

    setup() {
        const route = useRoute()
        const addTitleRef = ref('')
        const addTotalRef = ref(0)
        const products = ref([]);
        const toast = useToast()

        const addSubCollection = async () => {
            try {
                const docRef = await addDoc(collection(db, "products", route.params.id, "subproducts"), {
                    title: addTitleRef.value,
                    total: addTotalRef.value
                });
                console.log(docRef.id);
                toast.success('Fourniture ajoutée')

            } catch (error) {
                toast.error('Un probleme est survenue')
                console.log(error)
            }
        }

        onMounted(async () => {
            const q = query(collection(db, "products", route.params.id, "subproducts"))

            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                    // console.log(doc.id)
                })
                products.value = fetchedProducts
                console.log(products.value)
            });

            // const querySnapshot = await getDocs(q);
            // const fetchedProducts = [];
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     fetchedProducts.push({ id: doc.id, ...doc.data() })
            // });

            // products.value = fetchedProducts
        })

        return {
            addTitleRef,
            addTotalRef,
            addSubCollection,
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

    .addproduct {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 1rem;
    }

    .wrap-card {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }


}
</style>