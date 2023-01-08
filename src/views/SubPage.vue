<template>
    <main class="subcard">
        <div class="return">
            <span @click="$router.back()" class="material-icons">arrow_back</span>
        </div>

        <div class="wrap-titre">
            <h1> {{ $route.params.name.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase()) }} </h1>
        </div>

        <div class="subpage__add-sub">
            <span @click="openFormSub = !openFormSub" class="material-icons add">
                add_circle
            </span>
        </div>

        <div v-if="openFormSub" class="subcard__forms-wrap">
            <div class="subcard__forms">
                <div class="subcard__forms-close">
                    <span @click="openFormSub = !openFormSub" class="material-icons close">
                        cancel
                    </span>
                </div>
                <h3 class="subcard__forms-title">Ajouter une fourniture</h3>
                <input class="addprod__input" v-model="addTitleRef" type="text" name="Title"
                    placeholder="Nom de la fourniture">
                <input v-model="addTotalRef" type="number" name="Total" placeholder="Quantitée(s)">
                <button @click="addSubCollection()">Valider</button>
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
        const products = ref([]);

        const addSubCollection = async () => {
            try {
                const docRef = await addDoc(collection(db, "products", route.params.id, "subproducts"), {
                    title: addTitleRef.value,
                    total: addTotalRef.value
                });
                console.log(docRef.id);
                toast.success('Fourniture ajoutée')

                addSubCollection ? addTitleRef.value = '' : addTitleRef.value = addTitleRef.value
                addSubCollection ? addTotalRef.value = '' : addTotalRef.value = addTotalRef.value


                openFormSub.value = false

            } catch (error) {
                toast.error('Un probleme est survenue')
                console.log(error)
            }
        }

        onMounted( () => {
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
            openFormSub,
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

    .subcard__forms-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(9, 10, 17, 0.76);
        z-index: 14;

        .subcard__forms {
            position: fixed;
            border: 3px solid var(--logo-letters);
            display: flex;
            flex-direction: column;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            // padding: 1rem;
            background: var(--black);
            z-index: 15;
            border-radius: 5px;
            width: 400px;

            .subcard__forms-close {

                // margin-top: 1rem;
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

            .subcard__forms-title {
                display: flex;
                justify-content: center;
                color: var(--light);
                margin-top: 1rem;
            }

            input {
                margin-top: 1rem;
                margin: 1rem;
                padding: 8px;
                border: none;
                color: black;
                border-radius: 5px;
                font-weight: bold;
                font-size: 1rem;
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

    .wrap-card {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem 2rem;
        justify-content: center;
    }


}
</style>