<template>
    <div class="btn__return-wrap">
        <span @click="$router.back()" class="material-icons btn__return">arrow_back</span>
    </div>
</template>
  


<script>
export default {
    name: 'BtnReturn',
}
</script>

  
<style lang="scss" scoped>
.btn__return-wrap {
    position: relative;
    z-index: 1;
    margin: 1rem;


    .btn__return {
        background: rgba(0, 0, 0, 0.9);
        padding: 0.4rem;
        border-radius: 5px;
        font-size: 2.5rem;
        color: var(--light);
        cursor: pointer;
        transition: 0.2s;
        border: 2px solid var(--logo-letters);

        &:hover {
            color: var(--logo-letters);
            filter: drop-shadow(0px 0px 10px var(--logo-letters));
            transform: translateX(-0.5rem) scale(1.1, 1.1);
            transition: 0.2s ease-out;
        }
    }
}
</style>
  