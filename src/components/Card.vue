<template>
    <div class="wood-card">
        <div class="card">
            <router-link class="button" :to="{name: 'SubCard', params: {category: card.category, title: card.name }}">
                <div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
                <span class="text">{{ card.name }}</span>
                <h3 class="total"> {{card.total}} / {{ card.stock }} {{ card.unit }} </h3>
            </router-link>
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
    }

    .button {
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        flex-direction: column;
        box-sizing: border-box;
        width: 230px;
        height: 230px;
        border-radius: 25px;
        transition: 0.3s;

        &:hover {
            background: var(--or);
            transform: scale(0.9, 0.9);
            box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            border: 3px solid black;
        }

        .image {
            position: absolute;
            background-image: url(../assets/Bois/itauba.jpg);
            background-position: center;
            background-size: cover;
            width: 200px;
            height: 200px;
            border-radius: 20px;
            z-index: 0;
            border: 3px solid var(--or);
        }


        .text {
            position: relative;
            background: var(--or);
            border-radius: 5px;
            padding: 5px;
            position: relative;
            font-size: 1.2rem;
            text-transform: uppercase;
            color: var(--black);
            z-index: 1;
            margin-left: 25px;
            margin-right: 25px;
            font-weight: 550;

        }

        .total {
            // margin-top: 1rem;
            top: 20%;
            background: var(--or);
            padding: 0.3rem;
            border-radius: 5px;
            position: relative;
            z-index: 1;
            color: var(--black);
            font-weight: 600;
        }
    }
}


@media (max-width: 760px) {
    .wood-card {
        .card {
            flex-direction: column;
            transition: 0.5s;
        }
    }
}
</style>