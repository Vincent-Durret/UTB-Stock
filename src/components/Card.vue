<template>
	<div class="products-card">
		<div class="card">
			<router-link class="button" :to="`/${card.category}/${card.id}`">
				<div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
				<span class="text">{{ card.name }}</span>
				<h3 class="total">{{ card.stock }} {{ card.unit }} </h3>
				<h3 class="total"> {{ card.stockAreaMeters }}</h3>
			</router-link>
			<div v-if="isAdmin" class="wrap-edit">
				<BtnEdit @click="isOpen = !isOpen" />
			</div>
			<div v-if="isOpen" class="wrap-icon">
				<BtnUpdate @click="openUpdate = !openUpdate" />
				<BtnDelete @click="openDeleteModal = !openDeleteModal" />
			</div>
		</div>

		<div v-if="openDeleteModal" class="card__delete">
			<div class="modal">
				<h3>Attention</h3>
				<p>Ete vous sur de vouloir supprimer le produit "{{ card.name.toUpperCase() }}" ?</p>
				<div class="modal__btns">
					<button class="cancel" @click="openDeleteModal = !openDeleteModal">annuler</button>
					<button class="delete" @click="deleteProduct">confirmez</button>
				</div>
			</div>
		</div>

		<div v-if="openUpdate" class="app__forms-wrap">

			<div class="app__forms">
				<div class="app__forms-close">
					<BtnClose @click="openUpdate = !openUpdate" />
				</div>
				<h3 class="app__forms-title">Modifier le produit "{{ card.name }}"</h3>
				<input v-model="updateCategory" type="text" list="category" :placeholder=card.category>
				<datalist id="category">
					<option value="bois"></option>
					<option value="quincailleries"></option>
					<option value="produits"></option>
					<option value="autres"></option>
				</datalist>
				<input v-model="updateName" type="text" list="nom" :placeholder=card.name>
				<datalist id="nom">
					<option :value=card.name></option>
				</datalist>
				<input v-model="updateImage" type="text" list="image" :placeholder=card.image>
				<datalist id="image">
					<option :value=card.image></option>
				</datalist>
				<input v-model="updateUnit" type="text" :placeholder=card.unit>
				<button class="app__btn" @click="updateProducts">Valider</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from "vuex";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import BtnEdit from '../components/button/button-edit/BtnEdit.vue';
import BtnUpdate from '../components/button/button-edit/BtnUpdate.vue';
import BtnDelete from '../components/button/button-edit/BtnDelete.vue';
import BtnClose from '../components/button/BtnClose.vue';
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'

export default {
	name: "Card",
	components: {
		BtnEdit,
		BtnUpdate,
		BtnDelete,
		BtnClose
	},
	props: {
		card: Object,
	},

	setup(props) {
		const store = useStore();
		const user = computed(() => store.state.user);
		const userRole = computed(() => store.state.userRole);
		const isAdmin = computed(() => userRole.value === "admin");
		const toast = useToast()
		const isOpen = ref(false)
		const openUpdate = ref(false)
		const openDeleteModal = ref(false)
		const updateCategory = ref('')
		const updateName = ref('')
		const updateImage = ref('')
		const updateUnit = ref('')



		const updateProducts = async () => {
			const stockQ = doc(db, "products", props.card.id);
			try {
				await updateDoc(stockQ, {
					category: updateCategory.value,
					name: updateName.value,
					image: updateImage.value,
					unit: updateUnit.value
				});

				updateCategory.value = ''
				updateName.value = ''
				updateImage.value = ''
				updateUnit.value = ''

				toast.success("Produits modifier")

				openUpdate.value = false
				isOpen.value = false

			} catch (error) {
				toast.error('Une erreur est survenue !')
				console.log(error)
			}
		}

		const deleteProduct = async () => {
			try {
				await deleteDoc(doc(db, "products", props.card.id));
				toast.success("Produit supprimé avec succès")

			} catch (error) {
				toast.error('Un problème est survenu')
			}
		}

		return {
			user,
			userRole,
			isAdmin,
			isOpen,
			openUpdate,
			openDeleteModal,
			updateCategory,
			updateName,
			updateImage,
			updateUnit,
			updateProducts,
			deleteProduct,
		}
	}
}
</script>

<style lang="scss" scoped>
.products-card {
	display: flex;
	justify-content: center;
	flex-direction: column-reverse;
	align-items: center;

	.card {
		display: flex;
		transition: 0.5s;
		position: relative;
		z-index: 1;

		@media (max-width: 760px) {
			flex-direction: column;
			transition: 0.5s;
		}

		.button {
			display: flex;
			justify-content: center;
			align-items: center;
			text-decoration: none;
			flex-direction: column;
			box-sizing: border-box;
			text-decoration: none;
			color: white;
			width: 210px;
			height: 210px;
			border-radius: 25px;
			transition: 0.3s;

			&:hover {
				background: var(--black);
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
				z-index: 2;
				border: 2px solid var(--black);
			}


			.text {
				position: relative;
				background: rgba(0, 0, 0, 0.9);
				border-radius: 5px;
				padding: 5px;
				position: relative;
				font-size: 1.2rem;
				text-transform: uppercase;
				color: var(--logo-letters);
				z-index: 3;
				margin-left: 25px;
				margin-right: 25px;
				font-weight: 550;

			}

			.card__total {
				top: 2.5rem;
				background: rgba(0, 0, 0, 0.9);
				padding: 0.3rem;
				border-radius: 5px;
				position: relative;
				z-index: 3;
				color: var(--logo-letters);
				font-weight: 600;
			}

			.total {
				// margin-top: 1rem;
				top: 20%;
				background: rgba(0, 0, 0, 0.9);
				padding: 0.3rem;
				border-radius: 5px;
				position: relative;
				z-index: 3;
				color: var(--logo-letters);
				font-weight: 600;
			}
		}
	}

	.card__delete {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(9, 10, 17, 0.76);
		z-index: 24;


		.modal {
			position: fixed;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			width: 330px;
			padding: 30px;
			background: var(--black);
			z-index: 25;
			border-radius: 5px;
			border: 3px solid var(--logo-letters);


			h3 {
				margin-bottom: 15px;
				color: var(--light);
			}

			p {
				font-size: 0.8rem;
				line-height: 25px;
				color: var(--light);
			}

			.modal__btns {
				margin-top: 25px;
				display: flex;
				flex-direction: row;

				.cancel {

					background: var(--light);
					padding: 1rem;
					font-size: 0.8rem;
					font-weight: bold;
					transition: background 0.3s;
					border-radius: 5px;

					&:hover {
						background: var(--logo-letters);
						color: white;
					}
				}

				.delete {
					margin-left: 1rem;
					background: var(--light);
					padding: 1rem;
					font-size: 0.8rem;
					font-weight: bold;
					transition: background 0.3s;
					border-radius: 5px;

					&:hover {
						background: var(--logo-letters);
						color: white;
					}
				}
			}
		}
	}

}
</style>