<template>
    <div class="wood-card">
        <div class="card">
            <div class="button">
                <div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
                <span class="text">{{ card.name }}</span>
                <progress id="file" max="6000" :value="card.total"> {{ card.total }} </progress>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        card: Object,
    },

}
</script>

<style lang="scss">
.wood-card {

    .card {
        display: flex;
        flex-direction: row;
        transition: 0.5s;
        margin: 15px;
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        box-sizing: border-box;
        width: 250px;
        height: 250px;
        border-radius: 25px;
        transition: 0.3s;

        &:hover {
            background: var(--primary);
            transform: scale(0.9, 0.9);
        }

        .image {
            position: absolute;
            background-image: url(../assets/Bois/itauba.jpg);
            background-position: center;
            background-size: cover;
            width: 200px;
            height: 200px;
            border-radius: 20px;
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            z-index: 0;
            
        }


        .text {
            position: relative;
            background: var(--dark);
            border-radius: 5px;
            padding: 5px;
            position: relative;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--light);
            z-index: 1;
            margin-left: 25px;
            margin-right: 25px;

        }

        progress[value] {
            position: relative;
            bottom: -4rem;
            writing-mode: horizontal-tb !important;
            appearance: none;
            -moz-appearance: none;
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

        progress[value]::-moz-progress-bar {
            background-color: #52D017;
            // border-radius: 5px;
        }


        progress[value="30"]::-moz-progress-bar,
        progress[value="29"]::-moz-progress-bar,
        progress[value="28"]::-moz-progress-bar,
        progress[value="27"]::-moz-progress-bar,
        progress[value="26"]::-moz-progress-bar,
        progress[value="25"]::-moz-progress-bar,
        progress[value="24"]::-moz-progress-bar,
        progress[value="23"]::-moz-progress-bar,
        progress[value="22"]::-moz-progress-bar,
        progress[value="21"]::-moz-progress-bar {
            background-color: #F9DB24;
            // border-radius: 5px;
        }

        progress[value="20"]::-moz-progress-bar,
        progress[value="19"]::-moz-progress-bar,
        progress[value="18"]::-moz-progress-bar,
        progress[value="17"]::-moz-progress-bar,
        progress[value="16"]::-moz-progress-bar,
        progress[value="15"]::-moz-progress-bar,
        progress[value="14"]::-moz-progress-bar,
        progress[value="13"]::-moz-progress-bar,
        progress[value="12"]::-moz-progress-bar,
        progress[value="11"]::-moz-progress-bar {
            background-color: #FF8C00;
            // border-radius: 5px;
        }

        progress[value="10"]::-moz-progress-bar,
        progress[value="9"]::-moz-progress-bar,
        progress[value="8"]::-moz-progress-bar,
        progress[value="7"]::-moz-progress-bar,
        progress[value="6"]::-moz-progress-bar,
        progress[value="5"]::-moz-progress-bar,
        progress[value="4"]::-moz-progress-bar,
        progress[value="3"]::-moz-progress-bar,
        progress[value="2"]::-moz-progress-bar,
        progress[value="1"]::-moz-progress-bar {
            background-color: #E42217;
            // border-radius: 5px;
        }


        progress[value]::-webkit-progress-value {
            background-color: #52D017;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }


        progress[value="30"]::-webkit-progress-value,
        progress[value="29"]::-webkit-progress-value,
        progress[value="28"]::-webkit-progress-value,
        progress[value="27"]::-webkit-progress-value,
        progress[value="26"]::-webkit-progress-value,
        progress[value="25"]::-webkit-progress-value,
        progress[value="24"]::-webkit-progress-value,
        progress[value="23"]::-webkit-progress-value,
        progress[value="22"]::-webkit-progress-value,
        progress[value="21"]::-webkit-progress-value {
            background-color: #F9DB24;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }

        progress[value="20"]::-webkit-progress-value,
        progress[value="19"]::-webkit-progress-value,
        progress[value="18"]::-webkit-progress-value,
        progress[value="17"]::-webkit-progress-value,
        progress[value="16"]::-webkit-progress-value,
        progress[value="15"]::-webkit-progress-value,
        progress[value="14"]::-webkit-progress-value,
        progress[value="13"]::-webkit-progress-value,
        progress[value="12"]::-webkit-progress-value,
        progress[value="11"]::-webkit-progress-value {
            background-color: #FF8C00;
            border-radius: 5px;
            background-size: 35px 20px, 100% 100%, 100% 100%;
        }

        progress[value="10"]::-webkit-progress-value,
        progress[value="10"]::-webkit-progress-value,
        progress[value="9"]::-webkit-progress-value,
        progress[value="8"]::-webkit-progress-value,
        progress[value="7"]::-webkit-progress-value,
        progress[value="6"]::-webkit-progress-value,
        progress[value="5"]::-webkit-progress-value,
        progress[value="4"]::-webkit-progress-value,
        progress[value="3"]::-webkit-progress-value,
        progress[value="2"]::-webkit-progress-value,
        progress[value="1"]::-webkit-progress-value {
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