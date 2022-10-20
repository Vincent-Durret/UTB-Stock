<template>
    <main class="add-products">
        <div class="wrap-edit">
            <span @click="isOpen = !isOpen" class="material-icons edit">
                add_circle_outline
            </span>
        </div>
        <div v-if="isOpen" class="wrap-icons">
            <AddProduct />
            <AddSubProduct />   
        </div>

    </main>
</template>

<script>
import AddProduct from './AddProduct.vue';
import AddSubProduct from './AddSubProduct.vue';
export default {
    name: "AddProducts",
    components: {
    AddProduct,
    AddSubProduct
},
    data() {
        return {
            isOpen: false
        }

    },


}
</script>

<style lang="scss">

.add-products {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .wrap-edit {
        margin-bottom: 1rem;
        .edit {
            background: var(--black);
            padding: 0.4rem;
            border-radius: 5px;
            font-size: 2.5rem;
            color: var((--light));
            cursor: pointer;
            transition: transform 0.2s;

            &:hover {
                color: var(--logo-letters);
                transform: translateY(-1rem);
            }
        }

    }

}


</style>