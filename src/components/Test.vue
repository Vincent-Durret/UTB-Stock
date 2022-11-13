<template>
  <div class="subpage">
        <div class="sub-card">
            <div class="sub-wrap">
                <h2 class="title-subpage">{{ sub.longueur }}: </h2>
                <input v-model="inputStock" type="number" placeholder="Quantités" />
                <button @click="updateStocks" class="bouton-subpage">Envoyer</button>
                <h3 class="restant-stock">Stock :</h3>
                <p class="total-stock">{{ sub.total }} / {{ sub.stock }} {{ sub.unit }}</p>
            </div>
            <div class="wrap-edit">
                <span @click="isOpen = !isOpen" class="material-icons edit">
                    mode_edit
                </span>
            </div>
            <div v-if="isOpen" class="wrap-icon">
                <span @click="openUpdate = !openUpdate" class="material-icons update">
                    edit_note
                </span>
                <span v-if="isOpen" @click="deleteProduct" class="material-icons delete">
                    delete
                </span>
            </div>
        </div>

        <div v-if="openUpdate" class="forms">
            <div class="wrap-close">
                <span @click="openUpdate = !openUpdate" class="material-icons close">
                    cancel
                </span>
            </div>
            <h3>Modifier le produit "{{ sub.name }}"</h3>
            <input v-model="updateTitle" type="text" list="nom" :placeholder=sub.title>
            <datalist id="nom">
                <option :value=sub.title></option>
            </datalist>
            <input v-model="updateName" type="text" list="name" :placeholder=sub.name>
            <datalist id="name">
                <option :value=sub.name></option>
            </datalist>
            <input v-model="updateTotal" type="number" :placeholder=sub.total>
            <input v-model="updateStock" type="number" :placeholder=sub.stock>
            <input v-model="updateUnit" type="text" :placeholder=sub.unit>
            <button @click="updateSubProducts">Modifier le produit</button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

</style>