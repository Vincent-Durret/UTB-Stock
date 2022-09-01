<template>
    <div class="wood-card">
        <div class="card">
            <div class="button">
                <div :style="changeBackground" class="image"></div>
                <span class="text">{{ info_card.name }}</span>
                <progress id="file" max="100" :value="info_card.total"> {{ info_card.total }} % </progress>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'

export default {
    name: "WoodCard",
    props: {
        info_card: Object,
    },
    setup(props) {

        const changeBackground = computed(() => {
            return {
                backgroundImage: `url(${props.info_card.image})`
            }
        })

        return {
            changeBackground
        }
    }
}
</script>

<style lang="scss">
.wood-card {

    .card {
        display: flex;
        flex-direction: row;
        transition: 0.5s;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        width: 250px;
        height: 250px;
        border-radius: 25px;
        transition: 0.3s;

        &:hover {
            background: var(--primary);
            transform: scale(0.9, 0.9);
        }

        .image {
            // position: absolute;
            background-image: url(../assets/Bois/ipe.jpg);
            width: 200px;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
        }


        .text {
            background: var(--dark);
            border-radius: 5px;
            padding: 5px;
            position: relative;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--light);

        }

        progress[value] {
            position: relative;
            bottom: -4rem;
            writing-mode: horizontal-tb !important;
            appearance: none;
            box-sizing: border-box;
            display: inline-block;
            height: 1em;
            width: 9em;
            vertical-align: -0.2em;
        }

        progress[value]::-webkit-progress-bar {
            background-color: var(--primary);
            border-radius: 5px;
        }

        progress[value]::-webkit-progress-value {
            background-color: #52D017;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }

        progress[value="20"]::-webkit-progress-value {
            background-color: #FF8C00;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }

        progress[value="10"]::-webkit-progress-value {
            background-color: #E42217;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }
    }




}


@media (max-width: 760px) {
    .wood-card {
        .card {
            display: flex;
            flex-direction: column;
            transition: 0.5s;
        }
    }
}
</style>