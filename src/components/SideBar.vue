<template>
    <div v-if="store.state.user">
        <aside :class="`${is_expanded && 'is-expanded'}`">
            <div class="logo">
                <router-link to="/">
                    <img :src="this.imgSrc" alt="UTB">
                </router-link>

            </div>

            <div class="menu-toggle-wrap">
                <button class="menu-toggle" @click="ToggleMenu">
                    <span class="material-icons">keyboard_double_arrow_right</span>
                </button>
            </div>

            <div class="menu">
                <router-link class="button" to="/bois">
                    <span class="material-icons">forest</span>
                    <span class="text">Bois</span>
                </router-link>
                <router-link class="button" to="/quincailleries">
                    <span class="material-icons">construction</span>
                    <span class="text">Quincailleries</span>
                </router-link>
                <router-link class="button" to="/produits">
                    <span class="material-icons">inventory</span>
                    <span class="text">Produits</span>
                </router-link>
                <router-link class="button" to="/autres">
                    <span class="material-icons">widgets</span>
                    <span class="text">Autres</span>
                </router-link>
            </div>

            <div class="flex"></div>

            <div class="menu">
                <div class="button" @click="store.dispatch('logout')">
                    <span class="material-icons">logout</span>
                    <span class="text">Se déconecter</span>
                </div>
            </div>
        </aside>

    </div>

</template>

<script setup>
import { ref } from 'vue';
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")

const imgSrc = ref('../assets/Logo/logo2.png')


const ToggleMenu = () => {
    is_expanded.value = !is_expanded.value

    imgSrc.value = is_expanded.value ?  '../assets/Logo/logo-UTB-stock.png' : '../assets/Logo/logo2.png'

    localStorage.getItem("is_expanded", is_expanded.value)

}


const store = useStore()

onBeforeMount(() => {
    store.dispatch('fetchUser')
})


</script>

<style lang="scss" scoped>
aside {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    overflow: hidden;
    min-height: 100vh;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;
    z-index: 2;

    .flex {
        flex: 1;
    }

    .logo {
        margin-bottom: 1rem;

        img {
            width: 5rem;
            transition: 0.3s;
        }
    }

    .menu-toggle-wrap {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: 0.2s ease-out;

        .menu-toggle {
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: black;
                cursor: pointer;
            }

            &:hover {
                .material-icons {
                    color: var(--brown);
                    transform: translateX(0.5rem);
                    transition: 0.2s ease-out;
                    cursor: pointer;

                }
            }
        }
    }

    h3,
    .button .text {
        opacity: 0;
        transition: 0.3s ease-out;
        cursor: pointer;
    }


    .menu {
        margin: 0 -1rem;

        .button {
            display: flex;
            align-items: center;
            text-decoration: none;

            padding: 0.5rem 1rem;
            transition: 0.2s ease-out;

            .material-icons {
                font-size: 2rem;
                color: black;
                transition: 0.2s ease-out;
            }

            .text {
                color: black;
                font-weight: 600;
                transition: 0.2s ease-out;
            }

            &:hover,
            &.router-link-exact-active {

                .material-icons,
                .text {
                    color: var(--brown);
                }
            }

            &.router-link-exact-active {
                border-right: 5px solid var(--brown);

            }
        }
    }


    &.is-expanded {
        width: var(--sidebar-width);

        .logo {

            img {
                width: 15rem;
                transition: 0.3s;
            }
        }

        .menu-toggle-wrap {
            top: -3rem;

            .menu-toggle {
                transform: rotate(-180deg);
            }
        }

        h3,
        .button .text {
            opacity: 1;
        }

        .button {
            .material-icons {
                margin-right: 1rem;

            }
        }
    }

    @media (max-width: 768px) {
        position: fixed;
        height: 100%;
        z-index: 99;
    }
}
</style>
