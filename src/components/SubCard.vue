<template>
    <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.title }} : </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <div class="wrap__bouton-subpage">
                    <button @click="updateStocks(false)" :disabled="!inputStock" class="bouton-subpage">-</button>
                    <button @click="updateStocks(true)" :disabled="!inputStock" class="bouton-subpage">+</button>

                </div>
                <h3 class="restant-stock">Stock :</h3>
                <div v-if="isAdmin && sub.areameters">
                    <p class="total-stock"> {{ sub.total }} {{ unitValue }} </p>
                    <p v-if="sub.areameters" class="subcard__total-stock"> {{ totalMeters.toFixed(3) }} m²</p>
                </div>
                <p v-else class="total-stock"> {{ sub.total }} {{ unitValue }} </p>
            </div>
        </div>
        <div v-if="isAdmin" class="wrap-edit">
            <BtnEdit @click="isOpen = !isOpen" />
        </div>
        <div v-if="isOpen" class="wrap-icon">
            <BtnUpdate @click="openUpdate = !openUpdate" />
            <BtnDelete @click="openDeleteModal = !openDeleteModal" />
        </div>
        <div v-if="openUpdate" class="app__forms-wrap">
            <div class="app__forms">
                <div class="app__forms-close">
                    <BtnClose @click="openUpdate = !openUpdate" />
                </div>
                <h3 class="app__forms-title">Modifier le produit "{{ sub.title }}"</h3>
                <input v-model="updateTitleRef" type="text" list="nom">
                <input v-model="updateTotalRef" type="number" :placeholder=sub.total>
                <input v-if="$route.params.category === 'bois'" v-model="updateAreaMetersRef" type="number">
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
import { ref, computed, watchEffect } from 'vue';
import { useStore } from "vuex";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { runTransaction } from "firebase/firestore";
import BtnEdit from './button/button-edit/BtnEdit.vue';
import BtnUpdate from './button/button-edit/BtnUpdate.vue';
import BtnDelete from './button/button-edit/BtnDelete.vue';
import BtnClose from './button/BtnClose.vue';
import { useRoute } from "vue-router"
import { useToast } from 'vue-toastification'
import { db } from '../Firebase/firebase.js'


export default {
    name: "SubCard",
    components: {
        BtnEdit,
        BtnUpdate,
        BtnDelete,
        BtnClose
    },
    props: {
        sub: Object,
        total: Number,
        unitValue: String,
        areameter: Number,
        areaMeter: Number,
        testing: Number,
    },

    setup(props) {
        const store = useStore();
        const user = computed(() => store.state.user);
        const userRole = computed(() => store.state.userRole);
        const isAdmin = computed(() => userRole.value === "admin");
        const route = useRoute()
        const toast = useToast()
        const inputStock = ref()

        const isOpen = ref(false)
        const openUpdate = ref(false)
        const openDeleteModal = ref(false)

        const updateTitleRef = ref(props.sub.title)
        const updateTotalRef = ref()
        const updateAreaMetersRef = ref(props.sub.areameters)

        const totalMeters = ref(0)

        watchEffect(() => {
            const calculMeters = props.sub.total * props.sub.areameters;
            totalMeters.value = calculMeters;
        });


        const updateStocks = async (increment) => {
            const stockQ = doc(db, "products", route.params.id, "subproducts", props.sub.id);
            const stockT = doc(db, "products", route.params.id);

            try {
                const changeAmount = parseInt(inputStock.value);
                const updatedTotal = increment
                    ? props.sub.total + changeAmount
                    : Math.max(0, props.sub.total - changeAmount);
                const updatedTotalMeters = updatedTotal * props.sub.areameters;

                if (route.params.category === "bois") {
                    await updateDoc(stockQ, {
                        total: updatedTotal,
                        totalMeters: updatedTotalMeters,
                    });

                    const stockChange = props.sub.total - updatedTotal;
                    await updateDoc(stockT, {
                        stock: increment ? props.total + changeAmount : props.total - stockChange,
                        stockMeters: props.areaMeter + (updatedTotalMeters - props.sub.totalMeters),
                    });
                } else {
                    await updateDoc(stockQ, {
                        total: updatedTotal,
                    });

                    const stockChange = props.sub.total - updatedTotal;
                    await updateDoc(stockT, {
                        stock: increment ? props.total + changeAmount : props.total - stockChange,
                    });
                }

                const action = increment ? "ajouté" : "retiré";
                toast.success(`Vous avez ${action} ${inputStock.value} ${props.unitValue}`);
                inputStock.value = '';
            } catch (error) {
                toast.error('Une erreur est survenue');
                console.log(error);
            }
        };



        const updateProduct = async () => {
            const productQ = doc(db, "products", route.params.id, "subproducts", props.sub.id);

            let updateData = {
                title: updateTitleRef.value,
                total: updateTotalRef.value
            };

            if (updateAreaMetersRef.value !== undefined) {
                updateData.areameters = updateAreaMetersRef.value;
            }

            try {
                await updateDoc(productQ, updateData);

                toast.success("La fourniture a etait mis a jour")

                updateTitleRef.value = ''
                updateTotalRef.value = ''

                openUpdate.value = false

            } catch (error) {
                console.log(error)
                toast.error('Une erreur est survenue')
                console.log("Error updating document: ", error)
            }
        }


        const deleteProduct = async () => {
            try {
                const stockT = doc(db, "products", route.params.id);
                const stockQ = doc(db, "products", route.params.id, "subproducts", props.sub.id);

                await runTransaction(db, async (transaction) => {
                    const stockTDoc = await transaction.get(stockT);

                    if (!stockTDoc.exists()) {
                        throw new Error("Document not found");
                    }

                    const newStock = props.total - props.sub.total;
                    const newStockMeters = props.areaMeter - props.sub.totalMeters;

                    if (route.params.category === "bois") {
                        transaction.update(stockT, {
                            stock: newStock,
                            stockMeters: newStockMeters,
                        });
                    } else {
                        transaction.update(stockT, {
                            stock: newStock,
                        });
                    }

                    transaction.delete(stockQ);
                });

                toast.success(props.sub.title + " supprimé avec succès ");
                openDeleteModal.value = false;
            } catch (error) {
                toast.error('Un problème est survenu');
                openDeleteModal.value = false;
                console.log(error);
            }
        };


        return {
            user,
            userRole,
            isAdmin,
            isOpen,
            openUpdate,
            openDeleteModal,
            inputStock,
            updateTitleRef,
            updateTotalRef,
            updateAreaMetersRef,
            updateStocks,
            updateProduct,
            deleteProduct,
            totalMeters,
        }
    }
}
</script>


<style lang="scss">
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



            .title-subpage {
                font-size: 2rem;
                color: var(--black-alt);
            }

            .wrap__bouton-subpage {
                display: flex;
                justify-content: space-around;
                width: 50%;

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