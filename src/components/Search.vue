<template>
    <div class="wrapper--input">
        <input v-model="user_search_item" type="text" placeholder="Rechercher">
        <div class="search">
            <router-link class="link" v-for="(allitem, i) in search_item" :key="i"
                :to="{name: 'SubCard', params: {name: allitem.name }}">
                <div class="container--restaurant--search">
                    <!-- <div class="wrapper--img">
                        <img :src="restaurant.image" alt="">
                    </div> -->
                    <p> {{ allitem.name }} </p>
                </div>
            </router-link>
        </div>
        
    </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue';
import { info_all_item } from '../DB/db';
export default {
    name: 'Search',

    setup() {
        class All {
            constructor(name) {
                this.name = name
            }
        }

        let data_item = ref([]);

        let all_item = []

        const makeDataItem = () => {
            let three_item = [];

            for (const allitem of info_all_item) {
                const new_item = new All(allitem.name)
                all_item.push(new_item)


                // if (three_item.length === 2) {
                //     three_item.push(new_item);
                //     data_item.value.push(three_item);
                //     three_item = [];
                // } else {
                //     three_item.push(new_item);
                // }
            }
        }
        //  user search restaurant
        let user_search_item = ref('')

        let search_item = ref([])

        watch(user_search_item, new_value => {

            let regex = RegExp(new_value.toLowerCase())

            let new_search_item = all_item.filter(allitem => regex.test(allitem.name.toLowerCase()))


            new_value == 0 ? search_item.value = [] : search_item.value = new_search_item

            console.log(search_item)
        })

        onMounted(makeDataItem,)

        return {
            data_item,
            user_search_item,
            search_item,
        }

    },
}
</script>

<style lang="scss">
.wrapper--input {
    position: relative;

    input {
        background-color: var(--primary);
        border: none;
        height: 60px;
        width: 400px;
        outline: none;
        padding-left: 20px;
        transition: border 0.2s;
        border-radius: 5px 5px 0 0;
    }

    input[type=text]:focus {
        border: 5px solid var(--dark);
        border-bottom: none;
        color: black;
    }

    .search {
        position: absolute;
        top: 100%;
        width: 400px;
        background-color: var(--primary);
        border: 5px solid var(--dark);
        border-top: none;
        border-radius:  0 0 5px 5px;


        .link {
            text-decoration: none;
            color: black;
        }

        .container--restaurant--search {
            display: flex;
            align-items: center;
            padding: 10px;

            &:hover {
                background: var(--light);
            }

            .wrapper--img {
                height: 60px;
                width: 60px;
                margin-right: 25px;
                border-radius: 50%;
                overflow: hidden;

                img {
                    height: 100%;
                    width: auto;
                }
            }
        }
    }
}
</style>