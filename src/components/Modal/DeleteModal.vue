<template>
    <div class="modal">
        <h3>Attention</h3>
        <p>Etes-vous sûr de vouloir supprimer le produit "{{ productName }}" ?</p>
        <div class="modal__btns">
            <button class="cancel" @click="$emit('close')">annuler</button>
            <button class="delete" @click="$emit('confirm')">confirmez</button>
        </div>
    </div>
</template>
  
<script>
export default {
    props: ['productName'],
};
</script>
  
<style lang="scss" scoped>
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
</style>