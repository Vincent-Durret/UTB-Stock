<template>
	<div class="products-card">
		<div class="card">
			<router-link class="button"
				:to="{ name: 'SubPage', params: { id: card.id, category: card.category, name: card.name, unit: card.unit } }">
				<!-- @click="$router.push(`/${card.category}/${card.id}`)"> -->
				<div :style="{ backgroundImage: `url(${card.image})` }" class="image"></div>
				<span class="text">{{ card.name }}</span>
				<h3 v-for="prod in products" :key="prod.total" class="total">{{ prod.total }} {{ card.stock }} {{ card.unit }} </h3>
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

		<div v-if="openUpdate" class="card__forms">

			<div class="forms">
				<div class="wrap-close">
					<span @click="openUpdate = !openUpdate" class="material-icons close">
						cancel
					</span>
				</div>
				<h3>Modifier le produit "{{ card.name }}"</h3>
				<input v-model="updateCategory" type="text" list="category" :placeholder=card.category>
				<datalist id="category">
					<option value="Bois"></option>
					<option value="Quincailleries"></option>
					<option value="Produits"></option>
					<option value="Autres"></option>
				</datalist>
				<input v-model="updateName" type="text" list="nom" :placeholder=card.name>
				<datalist id="nom">
					<option :value=card.name></option>
				</datalist>
				<input v-model="updateImage" type="text" list="image" :placeholder=card.image>
				<datalist id="image">
					<option :value=card.image></option>
				</datalist>
				<input v-model="updateStock" type="number" :placeholder=card.stock>
				<input v-model="updateUnit" type="text" :placeholder=card.unit>
				<button @click="updateProducts">Modifier le produit</button>
			</div>
		</div>
	</div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, deleteDoc, updateDoc, collection, query, onSnapshot} from "firebase/firestore";
import { db } from '../Firebase/firebase.js'
// import { useRoute } from "vue-router"
import { useToast } from 'vue-toastification'


export default {
	name: "Card",
	props: {
		card: Object,
	},
	data() {
		return {
			isOpen: false,
			openUpdate: false,
			openDeleteModal: false,
		}
	},

	setup(props) {
		const toast = useToast()
		const updateCategory = ref('')
		const updateName = ref('')
		const updateImage = ref('')
		const updateTitle = ref('')
		const updateTotal = ref(0)
		const updateStock = ref(0)
		const updateUnit = ref('')
		const products = ref([])
        // const route = useRoute()





		onMounted(async () => {
			const q = query(collection(db, "products", props.card.id, "subproducts"))

			onSnapshot(q, (querySnapshot) => {
				const fetchedProducts = [];

				querySnapshot.forEach((doc) => {
					fetchedProducts.push({ id: doc.id, ...doc.data() })
					// console.log(doc.id)
				})
				products.value = fetchedProducts
				console.log(products.value)
			});

			// const querySnapshot = await getDocs(q);
			// const fetchedProducts = [];
			// querySnapshot.forEach((doc) => {
			//     // doc.data() is never undefined for query doc snapshots
			//     fetchedProducts.push({ id: doc.id, ...doc.data() })
			// });

			// products.value = fetchedProducts
		})

		// const subProductTotal = products.value.total
		// const totalAmount = subProductTotal.reduce((acc, curr) => acc + curr.total, 0)

		const updateProducts = async () => {
			const stockQ = doc(db, "products", props.card.id);
			try {
				await updateDoc(stockQ, {
					category: updateCategory.value,
					name: updateName.value,
					image: updateImage.value,
					stock: updateStock.value,
					unit: updateUnit.value
				});
				updateProducts ? updateCategory.value = '' : updateCategory.value = updateCategory.value
				updateProducts ? updateName.value = '' : updateName.value = updateName.value
				updateProducts ? updateImage.value = '' : updateImage.value = updateImage.value
				updateProducts ? updateTitle.value = '' : updateTitle.value = updateTitle.value
				updateProducts ? updateTotal.value = '' : updateTotal.value = updateTotal.value
				updateProducts ? updateStock.value = '' : updateStock.value = updateStock.value
				updateProducts ? updateUnit.value = '' : updateUnit.value = updateUnit.value


				toast.success("Produits modifier")

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
			updateCategory,
			updateName,
			updateImage,
			updateTitle,
			updateTotal,
			updateStock,
			updateUnit,
			updateProducts,
			deleteProduct,
			products,
			// totalAmount,
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
	// position:relative;
	// z-index: 1;

	// &:active {
	//     transform: translateY(-2rem);
	//     transition: transform 0.2s ease-in-out;
	// }

	.card {
		display: flex;
		transition: 0.5s;
		position: relative;
		z-index: 1;
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

	.card__forms {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(9, 10, 17, 0.76);
		z-index: 14;

		.forms {
			position: fixed;
			border: 3px solid var(--logo-letters);
			display: flex;
			flex-direction: column;
			overflow-y: scroll;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			// padding: 1rem;
			background: var(--black);
			z-index: 15;
			border-radius: 5px;
			width: 400px;

			// @media (max-width: 768px) {
			// 	left: 20.5%;
			// 	width: 18rem;
			// }

			// @media (min-width: 768px) {
			// 	left: 25%;
			// }


			.wrap-close {

				// margin-top: 1rem;
				.close {
					position: relative;
					float: right;
					background: var(--light);
					color: var(--logo-letters);
					padding: 0.3rem;
					border-radius: 5px;
					transition: color 0.2s, transform 0.3s;
					cursor: pointer;

					&:hover {
						color: red;
						// transform: scale(1.1, 1.1);

						transition: 0.2s ease-out;
					}
				}
			}

			h3 {
				// margin-top: 1rem;
				display: flex;
				justify-content: center;
				color: var(--light);
			}

			input {
				margin-top: 1rem;
				margin: 1rem;
				padding: 8px;
				border: none;
				color: black;
				border-radius: 5px;
				font-weight: bold;
				font-size: 1rem;
			}

			.wrap__subproducts {
				width: 100%;
				display: flex;
				justify-content: center;
				align-items: center;

				input {
					margin-top: 1rem;
					margin: 1rem;
					padding: 8px;
					border: none;
					color: black;
					border-radius: 5px;
					font-weight: bold;
					font-size: 1rem;
					// width: 100%;
				}
			}






			button {
				margin: 1rem;
				background: var(--light);
				padding: 1rem;
				font-size: 1.3rem;
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



@media (max-width: 760px) {
	.wood-card {
		.card {
			flex-direction: column;
			transition: 0.5s;
		}
	}
}
</style>