<template>
	<div class="products-card">
		<div class="card">
			<router-link class="button" :to="`/${card.category}/${card.id}`">
				<div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
				<span class="text">{{ card.name }}</span>
				<h3 class="total">{{ card.stock }} {{ card.unit }} </h3>
			</router-link>
			<div class="wrap-edit">
				<span @click="isOpen = !isOpen" class="material-icons edit">
					mode_edit
				</span>
			</div>
			<div v-if="isOpen" class="wrap-icon">
				<span @click="openUpdate = !openUpdate" class="material-icons update">
					edit_note
				</span>
				<span @click="openDeleteModal = !openDeleteModal" class="material-icons delete">
					delete
				</span>
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
					<span @click="openUpdate = !openUpdate" class="material-icons close">
						cancel
					</span>
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
import { ref } from 'vue';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
import { useToast } from 'vue-toastification'


export default {
	name: "Card",
	props: {
		card: Object,
	},

	setup(props) {
		const toast = useToast()
		const isOpen = ref(false)
		const openUpdate = ref(false)
		const openDeleteModal = ref(false)
		const updateCategory = ref('')
		const updateName = ref('')
		const updateImage = ref('')
		const updateTitle = ref('')
		const updateTotal = ref(0)
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
				updateProducts ? updateCategory.value = '' : updateCategory.value = updateCategory.value
				updateProducts ? updateName.value = '' : updateName.value = updateName.value
				updateProducts ? updateImage.value = '' : updateImage.value = updateImage.value
				updateProducts ? updateTitle.value = '' : updateTitle.value = updateTitle.value
				updateProducts ? updateTotal.value = '' : updateTotal.value = updateTotal.value
				updateProducts ? updateUnit.value = '' : updateUnit.value = updateUnit.value

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
				toast.success("Produit supprimé avec succes")

			} catch (error) {
				toast.error('Un probleme est survenue')

			}

		}

		return {
			isOpen,
			openUpdate,
			openDeleteModal,
			updateCategory,
			updateName,
			updateImage,
			updateTitle,
			updateTotal,
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


		.wrap-edit {
			position: absolute;
			z-index: 3;
			// margin-right: 3px;

			.edit {
				background: var(--black-alt);
				padding: 0.5rem;
				border-radius: 5px;
				color: var((--light));
				cursor: pointer;
				border: 1px solid var(--logo-letters);

				&:hover {
					color: var(--logo-letters);
					transform: translateY(-0.5rem) scale(1.1, 1.1);
					transition: 0.2s ease-out;

				}
			}
		}

		.wrap-icon {
			position: absolute;
			margin-left: 3rem;
			z-index: 3;


			.delete {
				margin-left: 0.5rem;
				background: var(--black-alt);
				padding: 00.5rem;
				border-radius: 5px;
				color: var((--light));
				border: 1px solid var(--logo-letters);
				cursor: pointer;

				&:hover {
					color: red;
					transform: translateY(-0.5rem) scale(1.1, 1.1);
					transition: 0.2s ease-out;
				}
			}

			.update {
				background: var(--black-alt);
				padding: 00.5rem;
				border-radius: 5px;
				color: var((--light));
				cursor: pointer;
				border: 1px solid var(--logo-letters);

				&:hover {
					color: var(--logo-letters);
					transform: translateY(-0.5rem) scale(1.1, 1.1);
					transition: 0.2s ease-out;
				}
			}
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