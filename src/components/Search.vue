<template>
    <div class="wrapper--input">
        <input v-model="user_search_item" type="search" placeholder="Rechercher">
        <!-- <span class="material-icons">
            search
        </span> -->
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

    input[type=search]:focus {
        border: 5px solid var(--or);
        border-bottom: none;

    }

    .search {
        position: absolute;
        top: 100%;
        width: 400px;
        background: var(--light);
        border: 5px solid var(--or);
        border-top: none;
        border-radius: 0 0 5px 5px;
        z-index: 2;


        .link {
            text-decoration: none;
            color: var(--black);

            .container--restaurant--search {
                display: flex;
                flex-direction: column;

                .lh {
                    text-decoration: none;
                    color: var(--black);
                    font-size: 1rem;
                    padding: 20px;
                    text-transform: uppercase;
                    text-align: center;
                    @include magic-border(3px, var(--or), 0.2s, 0);
                    margin: 10px;
                    flex-grow: 1;
                    cursor: pointer;
                    transition: background 2s ease;

                    &:hover {
                        color: var(--black);
                        background: var(--or);
                    }
                }

                .trait {
                    width: 100%;
                    border-radius: 50%;
                    margin-bottom: 5px;
                }
            }
        }
    }
}

@media (max-width: 760px) {
    .wrapper--input {
        margin: 1.5rem;
        align-items: center;

        input {
            width: 300px;
        }

        .search {
            width: 300px;
        }
    }
}
</style>