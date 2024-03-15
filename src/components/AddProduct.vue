<template>
    <div v-if="openForm" class="app__forms-wrap">
        <div class="app__forms">
            <div class="app__forms-close">
                <span @click="toggleForm" class="material-icons close">cancel</span>
            </div>
            <h3 class="app__forms-title">Ajouter une fourniture</h3>
            <select v-model="product.category" name="product-category" required>
                <option value="" disabled selected hidden>Choisir une catégorie</option>
                <option value="bois">Bois</option>
                <option value="quincailleries">Quincailleries</option>
                <option value="produits">Produits</option>
                <option value="autres">Autres</option>
            </select>
            <input v-model="product.name" type="text" placeholder="*Nom">
            <input v-model="product.image" type="text" placeholder="*Image">
            <input v-model="product.unit" type="text" placeholder="*Unités">
            <button class="app__btn" @click="addProduct">Valider</button>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'

export default {
    name: "AddProduct",

    setup() {
        const toast = useToast()
        const openForm = ref(false)

        const product = reactive({
            category: '',
            name: '',
            image: '',
            unit: '',
        })

        const toggleForm = () => {
            openForm.value = !openForm.value
        }

        const addProduct = async () => {
            try {
                await addDoc(collection(db, "products"), product);
                toast.success("Produit créer avec succes")
                Object.keys(product).forEach(key => {
                    product[key] = ''
                })
                openForm.value = false
            } catch (error) {
                toast.error("Une erreur s'est produite lors de la création du produit")
            }
        }

        return {
            openForm,
            product,
            toggleForm,
            addProduct,
        }
    }
}
</script>

<style lang="scss"></style>