<template>
    <main class="subcard">
        <BtnReturn />
        <div class="wrap-titre">
            <h1> {{ productsName }} </h1>
        </div>
        <!-- <p> {{ totalAreaMeters }}</p> -->

        <div v-if="isAdmin" class="subpage__add-sub">
            <BtnAdd @click="openFormSub = !openFormSub" />
        </div>
        <div v-if="openFormSub" class="app__forms-wrap">
            <div class="app__forms">
                <div class="app__forms-close">
                    <BtnClose @click="openFormSub = !openFormSub" />
                </div>
                <h3 class="app__forms-title">Ajouter une fourniture</h3>
                <input v-model="addTitleRef" type="text" name="Title" placeholder="Nom de la fourniture">
                <input v-model="addTotalRef" type="number" name="Total" placeholder="Quantitée(s)">
                <input v-if="$route.params.category === wood" v-model="addAreaMeters" type="number"
                    placeholder="Metre carre">
                <button class="app__btn" @click="addSubCollection()">Valider</button>
            </div>
        </div>




        <div class="wrap-card">
            <SubCard v-for="product in subProducts" :sub="product" :unitValue="productsInfo.unit" :total="totalAmount"
                :areaMeter="totalAreaMeters" :key="product.id" />
        </div>

    </main>
</template>

<script>
import SubCard from '../components/SubCard.vue';
import BtnReturn from '../components/button/BtnReturn.vue';
import BtnAdd from '../components/button/BtnAdd.vue';
import BtnClose from '../components/button/BtnClose.vue';
import { useRoute } from "vue-router"
import { collection, query, onSnapshot, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../Firebase/firebase.js'
import { ref, onMounted, computed } from 'vue';
import { useStore } from "vuex";
import { useToast } from 'vue-toastification'

export default {
    name: "SubPage",
    components: {
        SubCard,
        BtnReturn,
        BtnAdd,
        BtnClose
    },

    setup() {

        const store = useStore();
        const user = computed(() => store.state.user);
        const userRole = computed(() => store.state.userRole);
        const isAdmin = computed(() => userRole.value === "admin");
        const route = useRoute()
        const toast = useToast()
        const openFormSub = ref(false)
        const addTitleRef = ref('')
        const addTotalRef = ref()
        const addAreaMeters = ref()
        const subProducts = ref([]);
        const wood = "bois"
        const productsInfo = ref([])
        const productsName = ref([])
        const totalAmount = ref(0)
        const calculAreaMeters = []
        const totalAreaMeters = ref(0)


        const testeur = () => {
            console.log("tu as cliquer")
        }


        const dataName = async () => {

            const docRef = doc(db, "products", route.params.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                productsInfo.value = docSnap.data()
                productsName.value = docSnap.data().name.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase())
            } else {
                toast.warning("Document non trouver ! veuillez appelez votre developeur.")
            }
        }


        const makeDataSubProducts = () => {
            const q = query(collection(db, "products", route.params.id, "subproducts"))

            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];
                // Videz le tableau calculAreaMeters
                calculAreaMeters.length = 0;

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                    const totalMeters = doc.data().total
                    const areaMeters = doc.data().areameters

                    calculAreaMeters.push(totalMeters * areaMeters)
                })
                subProducts.value = fetchedProducts
                totalAreaMeters.value = calculAreaMeters.reduce((acc, curr) => acc + curr, 0)
                totalAmount.value = subProducts.value.reduce((acc, curr) => acc + curr.total, 0)
            });
        }


        const addSubCollection = async () => {
            const stockQ = doc(db, "products", route.params.id);
            try {
                await addDoc(collection(db, "products", route.params.id, "subproducts"), {
                    title: addTitleRef.value,
                    total: addTotalRef.value,
                    areameters: addAreaMeters.value
                });

                await updateDoc(stockQ, {
                    stock: totalAmount.value,
                    stockAreaMeters: totalAreaMeters.value
                });

                toast.success('Fourniture ajoutée')

                addTitleRef.value = ''
                addTotalRef.value = ''
                addAreaMeters.value = ''

                openFormSub.value = false

            } catch (error) {
                toast.error('Un probleme est survenue')
                console.log(error)
            }

        }

        onMounted(makeDataSubProducts)
        onMounted(dataName)



        return {
            user,
            userRole,
            isAdmin,
            openFormSub,
            addTitleRef,
            addTotalRef,
            addAreaMeters,
            addSubCollection,
            subProducts,
            wood,
            totalAmount,
            productsInfo,
            productsName,
            totalAreaMeters,
            calculAreaMeters,
            testeur

        }
    },
}
</script>

<style lang="scss">
.subcard {
    position: relative;
    z-index: 3;


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
    }



    .wrap-card {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }


}
</style>