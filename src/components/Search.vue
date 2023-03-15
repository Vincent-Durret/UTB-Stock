<template>
    <div class="search__wrap">
        <input v-model="user_search_item" type="search" placeholder="Rechercher">
        <div class="search">
            <router-link class="search__link" v-for="(product, i) in search_item" :key="i"
            :to="`/${product.category}/${product.id}`">
                <div class="search__box-wrap">
                    <p class="search__name"> {{ product.name.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase()) }} </p>
                </div>
            </router-link>
        </div>
    </div>
    <div class="closed" @click="isClosed"></div>


</template>

<script>
import { onMounted, ref, watch } from 'vue';

import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../Firebase/firebase.js'




export default {
    name: 'Search',

    setup() {
        const allitem = ref([])
        const user_search_item = ref('')
        const search_item = ref([])

        onMounted(async () => {
            const q = query(collection(db, 'products'))


            onSnapshot(q, (querySnapshot) => {
                const fetchedProducts = [];

                querySnapshot.forEach((doc) => {
                    fetchedProducts.push({ id: doc.id, ...doc.data() })
                })
                allitem.value = fetchedProducts
            })

        })

        watch(user_search_item, new_value => {

            const regex = RegExp(new_value.toLowerCase())

            const new_search_item = allitem.value.filter(product => regex.test(product.name.toLowerCase()))


            new_value == 0 ? search_item.value = [] : search_item.value = new_search_item

        })

        const isClosed = () => {
            user_search_item.value = ''
        }
        


        return {
            user_search_item,
            search_item,
            isClosed
        }

    },
}
</script>

<style lang="scss">
@mixin magic-border($width, $color, $duration, $direction) {
    position: relative;

    &:before {
        content: '';
        position: absolute;
        width:calc(100% + #{$width * 2});
        height:calc(100% + #{$width * 2});
        top:calc(#{$width}/-1);
        left:calc(#{$width}/-1);
        background: linear-gradient(to right, $color 0%, $color 100%), linear-gradient(to top, $color 50%, transparent 50%), linear-gradient(to top, $color 50%, transparent 50%), linear-gradient(to right, $color 0%, $color 100%), linear-gradient(to left, $color 0%, $color 100%);
        background-size: 100% $width, $width 200%, $width 200%, 0% $width, 0% $width;
        background-position: 50% 100%, 0% 0%, 100% 0%, 100% 0%, 0% 0%;
        background-repeat: no-repeat, no-repeat;
        transition: transform $duration ease-in-out, background-position $duration ease-in-out, background-size $duration ease-in-out;
        transform: scaleX(0) rotate(180deg * $direction);
        transition-delay: $duration*2, $duration, 0s;
    }

    &:hover {
        &:before {
            background-size: 200% $width, $width 400%, $width 400%, 55% $width, 55% $width;
            background-position: 50% 100%, 0% 100%, 100% 100%, 100% 0%, 0% 0%;
            transform: scaleX(1) rotate(180deg * $direction);
            transition-delay: 0s, $duration, $duration*2;
        }
    }
}

.search__wrap {
    position: relative;
    margin-bottom: 3rem;
    // margin-right: 3rem;
    display: flex;
    justify-content: end;
    z-index: 4;

    input {
        background-color: var(--light);
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
        transition: border 0.2s;
        border-radius: 5px 5px 0 0;
    }

    input[type=search]:focus {
        border: 1px solid var(--black);
        border-bottom: none;

    }

    .search {
        position: absolute;
        top: 100%;
        width: 400px;
        background: var(--light);
        border: 2px solid var(--black);
        border-top: none;
        border-radius: 0 0 5px 5px;
        z-index: 2;


        .search__link {
            text-decoration: none;
            color: var(--black);

            .search__box-wrap {
                display: flex;
                flex-direction: column;

                // h3 {
                //     display: flex;
                //     justify-content: center;
                // }

                .search__name {
                    text-decoration: none;
                    color: var(--black);
                    font-size: 1rem;
                    font-weight: bold;
                    padding: 20px;
                    // text-transform: uppercase;
                    text-align: center;
                    @include magic-border(2px, var(--black), 0.2s, 0);
                    margin: 10px;
                    flex-grow: 1;
                    cursor: pointer;
                    transition: background 2s ease;
                    border-bottom: 1px solid var(--black);

                    &:hover {
                        color: var(--logo-letters);
                        background: rgba(0, 0, 0, 0.9);
                    }
                }
            }
        }
    }
}

.closed {
    position:fixed;
    top: 0;
    height: 100%;
    width: 94vw;
    z-index: 0;
    // background: #000;
}

@media (max-width: 760px) {
    .wrapper--input {
        margin: 1.5rem;
        align-items: center;
        justify-content: center;

        input {
            width: 250px;
        }

        .search {
            width: 250px;
        }
    }
}
</style>