<template>
    <div class="wrapper--input">
        <input v-model="user_search_item" type="text" placeholder="Rechercher">
        <span class="material-icons">
            search
        </span>
        <div class="search">
            <router-link class="link" v-for="(allitem, i) in search_item" :key="i"
                :to="{name: 'SubCard', params: {name: allitem.name }}">
                <div class="container--restaurant--search">
                    <p class="lh"> {{ allitem.name }} </p>
                    <hr class="trait">
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

            }
        }
        //  user search restaurant
        let user_search_item = ref('')

        let search_item = ref([])

        watch(user_search_item, new_value => {

            let regex = RegExp(new_value.toLowerCase())

            let new_search_item = all_item.filter(allitem => regex.test(allitem.name.toLowerCase()))


            new_value == 0 ? search_item.value = [] : search_item.value = new_search_item

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
    margin: 1rem;
    display: flex;
    justify-content: end;

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

    .material-icons {
        font-size: 3rem;
        color: var(--dark);
        position: absolute;
        top: 0.5rem;
        right: 0.2rem;
    }

    input[type=text]:focus {
        border: 5px solid var(--dark);
        border-bottom: none;
    }

    .search {
        position: absolute;
        top: 100%;
        width: 400px;
        background: var(--light);
        border: 5px solid var(--dark);
        border-top: none;
        border-radius: 0 0 5px 5px;
        z-index: 2;


        .link {
            text-decoration: none;
            color: black;

            .container--restaurant--search {
                padding: 10px;
                display: flex;
                flex-direction: column;

                &:hover .lh {
                    background: var(--dark);
                    color: black;
                }

                .lh {
                    display: flex;
                    flex-direction: column;
                    padding: 1rem;
                    font-weight: 600;
                }

                .trait {
                    width: 100%;
                    border-radius: 50%;
                }
            }
        }
    }
}

@media (max-width: 760px) {
    .wrapper--input {
        margin: 1.5rem;
        align-items: center;
        justify-content: center;

        input {
            width: 300px;
        }

        .search {
            width: 300px;
        }
    }
}
</style>