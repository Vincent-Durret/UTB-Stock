<template>
    <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.title }} : </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <button @click="updateStocks()" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <div v-if="auth === king">
                    <p v-if="sub.areameters" class="subcard__total-stock"> {{ totalMeters }} m²</p>
                </div>
                <p v-else class="total-stock"> {{ sub.total }} {{ unitValue }} </p>
            </div>
        </div>
        <div v-if="auth === king" class="wrap-edit">
            <span @click="isOpen = !isOpen" class="material-icons edit">
                mode_edit
            </span>
        </div>
        <div v-if="isOpen" class="wrap-icon">
            <span @click="openUpdate = !openUpdate" class="material-icons update">
                edit_note
            </span>
            <span @click="openDeleteModal = !openDeleteModal" class="material-icons delete">
                delete
            </span>
        </div>
        <div v-if="openUpdate" class="app__forms-wrap">
            <div class="app__forms">
                <div class="app__forms-close">
                    <span @click="openUpdate = !openUpdate" class="material-icons close">
                        cancel
                    </span>
                </div>
                <h3 class="app__forms-title">Modifier le produit "{{ sub.title }}"</h3>
                <input v-model="updateTitleRef" type="text" list="nom" :placeholder=sub.title>
                <input v-model="updateTotalRef" type="number" :placeholder=sub.total>
                <button class="app__btn" @click="updateProduct()">Mettre a jour</button>
            </div>
        </div>
        <div v-if="openDeleteModal" class="card__delete">
            <div class="modal">
                <h3>Attention</h3>
                <p>Ete vous sur de vouloir supprimer le produit "{{ sub.title.toUpperCase() }}" ?</p>
                <div class="modal__btns">
                    <button class="cancel" @click="openDeleteModal = !openDeleteModal">annuler</button>
                    <button class="delete" @click="deleteProduct()">confirmez</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { ref } from 'vue'
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { useRoute } from "vue-router"
import { useToast } from 'vue-toastification'
import { db } from '../Firebase/firebase.js'
import { admin, id } from '../admin_auth/index'
// import { getAuth, onAuthStateChanged} from "firebase/auth";


export default {
    name: "SubCard",
    props: {
        sub: Object,
        total: Number,
        unitValue: String,
    },

    setup(props) {

        const route = useRoute()
        const toast = useToast()
        const inputStock = ref()

        const isOpen = ref(false)
        const openUpdate = ref(false)
        const openDeleteModal = ref(false)

        const updateTitleRef = ref('')
        const updateTotalRef = ref(0)

        const totalMeters = ref(0)

        const areaMeters = props.sub.areameters

        const calculMeters = props.sub.total * areaMeters
        // const auth = getAuth();

        const auth = id.value
        const king = admin



        // onAuthStateChanged(auth, (user) => {
        //     if (user) {

        //         const uid = user.uid;

        //         admin.value = uid

        //     } else {

        //     }
        // });

        totalMeters.value = calculMeters

        const updateStocks = async () => {

            const stockQ = doc(db, "products", route.params.id, "subproducts", props.sub.id);
            const stockT = doc(db, "products", route.params.id);


            try {

                await updateDoc(stockT, {
                    stock: props.total - inputStock.value
                });
                await updateDoc(stockQ, {
                    total: Math.max(0, props.sub.total - inputStock.value)
                });





                toast.success(" Vous avez retirer " + inputStock.value + " " + props.unitValue)

                updateStocks ? inputStock.value = '' : inputStock.value = inputStock.value

            } catch (error) {
                toast.error('Une erreur est survenue')
                console.log(error)
            }
        }



        const updateProduct = async () => {
            const productQ = doc(db, "products", route.params.id, "subproducts", props.sub.id);


            try {
                await updateDoc(productQ, {
                    title: updateTitleRef.value,
                    total: updateTotalRef.value,
                });

                toast.success("La fourniture a etait mis a jour")

                updateProduct ? updateTitleRef.value = '' : updateTitleRef.value = updateTitleRef.value
                updateProduct ? updateTotalRef.value = '' : updateTotalRef.value = updateTotalRef.value

                openUpdate.value = false

            } catch (error) {
                console.log(error)
                toast.error('Une erreur est survenue')
            }



        }

        const deleteProduct = async () => {
            try {
                await deleteDoc(doc(db, "products", route.params.id, "subproducts", props.sub.id));
                toast.success(props.sub.title + " supprimé avec succes ")



                openDeleteModal.value = false


            } catch (error) {
                toast.error('Un probleme est survenue')
                console.log(error)


            }

        }



        return {
            isOpen,
            openUpdate,
            openDeleteModal,
            inputStock,
            updateTitleRef,
            updateTotalRef,
            updateStocks,
            updateProduct,
            deleteProduct,
            totalMeters,
            king,
            auth,
            

        }
    }
}
</script>

<style lang="scss" >
.subpage {
    position: relative;

    .sub-card {
        display: flex;

        .sub-wrap {
            margin: 15px;
            box-sizing: border-box;
            width: 230px;
            height: 230px;
            // background: rgba(0, 0, 0, 0.9);
            background: var(--or);
            border-radius: 5px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            transition: border 0.2s ease-in;
            border: 2px solid var(--black);
            // filter: drop-shadow(0px 0px 15px var(--logo-letters));



            .title-subpage {
                font-size: 2rem;
                color: var(--black-alt);
                // line-height: 3.5rem;
            }



            .bouton-subpage {
                margin-top: 10px;
                border-radius: 5px;
                background-color: var(--black);
                padding: 10px;
                color: var(--light);
                transition: background 0.2s ease;
                font-size: 1rem;
                font-weight: 700;

                &:hover {
                    color: var(--logo-letters);
                }
            }

            .restant-stock {
                font-size: 1.5rem;
                margin-top: 0.7rem;
                color: var(--black-alt);
            }

            .subcard__total-stock {
                margin-top: 0.5rem;
                font-size: 1.1rem;
                color: var(--black-alt);
            }

            .total-stock {
                line-height: 2rem;
                font-size: 1.2rem;
                color: var(--black-alt);

            }

        }
    }

    .wrap-edit {
        position: absolute;
        top: 0;
        z-index: 3;
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
        top: 0;
        z-index: 3;

        animation: fade 0.3s ease-in-out;

        @keyframes fade {
            0% {
                transform: scale(0);
            }

            100% {
                transform: scale(1);
            }
        }


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

    .card__forms {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(9, 10, 17, 0.76);
        z-index: 14;

        .forms {
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

            // @media (max-width: 768px) {
            // 	left: 20.5%;
            // 	width: 18rem;
            // }

            // @media (min-width: 768px) {
            // 	left: 25%;
            // }


            .wrap-close {

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

            h3 {
                // margin-top: 1rem;
                display: flex;
                justify-content: center;
                color: var(--light);
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

            .wrap__subproducts {
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;

                input {
                    margin-top: 1rem;
                    margin: 1rem;
                    padding: 8px;
                    border: none;
                    color: black;
                    border-radius: 5px;
                    font-weight: bold;
                    font-size: 1rem;
                    // width: 100%;
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

    .card__delete {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(9, 10, 17, 0.76);
        z-index: 24;


        .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 330px;
            padding: 30px;
            background: var(--black);
            z-index: 25;
            border-radius: 5px;
            border: 3px solid var(--logo-letters);


            h3 {
                margin-bottom: 15px;
                color: var(--light);
            }

            p {
                font-size: 0.8rem;
                line-height: 25px;
                color: var(--light);
            }

            .modal__btns {
                margin-top: 25px;
                display: flex;
                flex-direction: row;

                .cancel {

                    background: var(--light);
                    padding: 1rem;
                    font-size: 0.8rem;
                    font-weight: bold;
                    transition: background 0.3s;
                    border-radius: 5px;

                    &:hover {
                        background: var(--logo-letters);
                        color: white;
                    }
                }

                .delete {
                    margin-left: 1rem;
                    background: var(--light);
                    padding: 1rem;
                    font-size: 0.8rem;
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
}




@media (max-width: 760px) {
    .subpage {
        .sub-card {
            flex-direction: column;
            transition: 0.5s;
        }

        .sub-wrap {
            margin: 10px;
        }
    }
}
</style>