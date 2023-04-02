<template>
  <main class="products-page">
    <BtnReturn />
    <div class="wrap-title">
      <h1> {{ $route.params.category.replace(/(?:^|\s|-)\S/g, x => x.toUpperCase()) }} </h1>
    </div>
    <div v-if="auth === king" class="products__add-sub">
      <span @click="openForm = !openForm" class="material-icons add">
        add_circle
      </span>
    </div>
    <Search />
    <div class="cards-grid">
      <Card v-for="product in products" :card="product" :key="product.id" />
    </div>


    <!-- form add products -->
    <div v-if="openForm" class="app__forms-wrap">
      <div class="app__forms">
        <div class="app__forms-close">
          <span @click="openForm = !openForm" class="material-icons close">
            cancel
          </span>
        </div>
        <h3 class="app__forms-title">Ajouter une fourniture</h3>
        <select v-model="addCategory" name="product-category" required>
          <option value="" disabled selected hidden>Choisir une catégorie</option>
          <option value="bois">Bois</option>
          <option value="quincailleries">Quincailleries</option>
          <option value="produits">Produits</option>
          <option value="autres">Autres</option>
        </select>
        <input v-model="addName" type="text" placeholder="*Nom">
        <input v-model="addImage" type="text" placeholder="*Image">
        <input v-model="addUnit" type="text" placeholder="*Unités">
        <button class="app__btn" @click="addProducts()">Valider</button>
      </div>
    </div>

  </main>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from "vue-router"
import Card from '../components/Card.vue';
import BtnReturn from '../components/BtnReturn.vue';
import { collection, query, where, onSnapshot, addDoc } from 'firebase/firestore'
import { db } from '../Firebase/firebase.js'
import Search from '../components/Search.vue';
import { useToast } from 'vue-toastification'
import { admin, id } from '../admin_auth/index'


export default {
  name: 'Products',
  components: {
    BtnReturn,
    Card,
    Search,
  },
  setup() {
    const openForm = ref(false);
    const products = ref([]);
    const addCategory = ref('');
    const addName = ref('');
    const addImage = ref('');
    const addUnit = ref('');

    const king = admin;
    const auth = id.value;

    const addProducts = async () => {
      await addDoc(collection(db, "products"), {
        category: addCategory.value,
        name: addName.value,
        image: addImage.value,
        unit: addUnit.value,
      });

      const toast = useToast();
      toast.success("Produit créé avec succès");

      addCategory.value = '';
      addName.value = '';
      addImage.value = '';
      addUnit.value = '';

      openForm.value = false;
    };

    const fetchProducts = () => {
      const route = useRoute();

      const q = query(collection(db, "products"), where("category", "==", route.params.category));

      onSnapshot(q, (querySnapshot) => {
        const fetchedProducts = [];

        querySnapshot.forEach((doc) => {
          fetchedProducts.push({ id: doc.id, ...doc.data() })
        });
        products.value = fetchedProducts;
      });
    };

    onMounted(fetchProducts);

    return {
      openForm,
      products,
      addCategory,
      addName,
      addImage,
      addUnit,
      king,
      auth,
      addProducts
    };
  }
}
</script>


<style lang="scss">
.products-page {
  width: 100%;



  .wrap-title {
    display: flex;
    justify-content: center;
    width: 100%;

  }

  .products__add-sub {
    position: relative;
    z-index: 5;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;

    .add {
      background: var(--black-alt);
      padding: 0.5rem;
      border-radius: 5px;
      color: var((--light));
      cursor: pointer;
      border: 1px solid var(--logo-letters);
      font-size: 3rem;
      transition: all 0.3s ease-in-out;


      &:hover {
        background: var(--logo-letters);
        color: var(--black-alt);
        transform: translateY(-0.5rem) scale(1.1, 1.1);
        transition: all 0.3s ease-in-out;
      }
    }
  }


  .cards-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 1rem;
    justify-content: center;

    @media (max-width: 760px) {
      .cards-grid {
        flex-direction: column;
      }
    }
  }


}
</style>
