<template>
    <div class="subpage">
        <div class="sub-card">
            <div v-for="(subprod, index) in subproduct" :key="index" class="sub-wrap">
                <h2 class="title-subpage">{{ subprod.title }} : </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <button @click="updateStocks" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock"> {{ subprod.total }} /{{ sub.stock }} {{ sub.unit }}</p>

            </div>
        </div>
    </div>
</template>


<script>
import { ref, reactive } from 'vue'
import { doc, updateDoc, query } from "firebase/firestore";
import { useToast } from 'vue-toastification'
import { useState } from '../composable/state.js'



import { db } from '../Firebase/firebase.js'

export default {
    name: "SubCard",
    props: {
        sub: Object,
        subproduct: Object,
    },
    data() {
        return {
            isOpen: false,
            openUpdate: false
        }
    },


    setup(props) {

        const toast = useToast()
        const subProductArrayTitle = props.subproduct.title
        const subProductsArrayTotal = props.subproduct.total
        const inputStock = ref(0)



        console.log(subProductArrayTitle)


        const updateStocks = async () => {

            try {
                const stockQ = doc(db, "products", props.sub.id);

                await updateDoc(stockQ, {

                    subproducts: [
                        {
                            title: subProductArrayTitle,
                            total: Math.max(0, subProductsArrayTotal - inputStock.value)
                        }
                    ]

                });
                // toast.success(" Vous avez retirer " + test.value + " " + props.sub.unit )

                // updateStocks ? inputStock.value = '' : inputStock.value = inputStock.value

            } catch (error) {
                toast.error('Une erreur est survenue')
                console.log(error)
            }



        }



        return {
            inputStock,
            updateStocks,
            subProductsArrayTotal,
        }
    }
}
</script>

<style lang="scss" >
.subpage {
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

            .test {

                width: 100%;

                input {
                    border: none;
                    // outline: none;
                    height: 2rem;
                    margin: 0.7rem;
                    border-radius: 5px;

                }

                input[type=number]:focus {
                    border: none;
                    outline: none;
                    transition: 0.2s;
                    border-radius: 5px;


                }
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

            .total-stock {
                line-height: 2rem;
                font-size: 1.2rem;
                color: var(--black-alt);

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