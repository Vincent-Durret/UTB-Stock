<template>
    <main class="subcard">
        <div class="return">
            <span @click="$router.back()" class="material-icons">arrow_back</span>
        </div>

        <div class="wrap-titre">
            <!-- <h1> test </h1> -->
        </div>

        <div class="subpage__add-sub">
            <span @click="openFormSub = !openFormSub" class="material-icons add">
                add_circle
            </span>
        </div>

        <div v-if="openFormSub" class="app__forms-wrap">
            <div class="app__forms">
                <div class="app__forms-close">
                    <span @click="openFormSub = !openFormSub" class="material-icons close">
                        cancel
                    </span>
                </div>
                <h3 class="app__forms-title">Ajouter une fourniture</h3>
                <input class="addprod__input" v-model="addTitleRef" type="text" name="Title"
                    placeholder="Nom de la fourniture">
                <input v-model="addTotalRef" type="number" name="Total" placeholder="Quantitée(s)">
                <input v-if="$route.params.category === wood" v-model="addAreaMeters" type="number"
                    placeholder="Metre carre">
                <button class="app__btn" @click="addSubCollection()">Valider</button>
            </div>
        </div>



        <div class="wrap-card">
            <SubCard v-for="product in products" :sub="product" :key="product.id" />
        </div>
    </main>
</template>

<script>
import SubCard from '../components/SubCard.vue';
import { useRoute } from "vue-router"
import { collection, query, onSnapshot, addDoc } from 'firebase/firestore'
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
        const toast = useToast()
        const openFormSub = ref(false)
        const addTitleRef = ref('')
        const addTotalRef = ref(0)
        const addAreaMeters = ref(0)
        const products = ref([]);
        const wood = "bois"

        const addSubCollection = async () => {
            try {
                await addDoc(collection(db, "products", route.params.id, "subproducts"), {
                    title: addTitleRef.value,
                    total: addTotalRef.value,
                    areameters: addAreaMeters.value
                });

                toast.success('Fourniture ajoutée')

                addSubCollection ? addTitleRef.value = '' : addTitleRef.value = addTitleRef.value
                addSubCollection ? addTotalRef.value = '' : addTotalRef.value = addTotalRef.value

                openFormSub.value = false

            } catch (error) {
                toast.error('Un probleme est survenue')
                console.log(error)
            }
        }

        onMounted(() => {
            const q = query(collection(db, "products", route.params.id, "subproducts"))

            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                    // console.log(doc.id)
                })
                products.value = fetchedProducts
            });

        })

        return {
            openFormSub,
            addTitleRef,
            addTotalRef,
            addAreaMeters,
            addSubCollection,
            products,
            wood
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

    .subpage__add-sub {

        display: flex;
        justify-content: center;
        margin-bottom: 1rem;

        .add {
            background: var(--black-alt);
            padding: 0.5rem;
            border-radius: 5px;
            color: var((--light));
            cursor: pointer;
            border: 1px solid var(--logo-letters);
            font-size: 3rem;


            &:hover {
                color: var(--logo-letters);
                transform: translateY(-0.5rem) scale(1.1, 1.1);
                transition: 0.2s ease-out;
            }
        }

    }



    .wrap-card {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }


}
</style>