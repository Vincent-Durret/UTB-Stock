<template>
    <span class="material-icons btn__add">
        add_circle
    </span>
</template>
  
<script>
export default {
    name: 'BtnAdd',
}
</script>
  
<style lang="scss">
.btn__add {
    background: var(--black-alt);
    padding: 0.5rem;
    border-radius: 5px;
    color: var((--light));
    cursor: pointer;
    border: 1px solid var(--logo-letters);
    font-size: 3rem;


    &:hover {
        color: var(--logo-letters);
        transform: translateY(-0.5rem) scale(1.1, 1.1);
        transition: 0.2s ease-out;
    }
}
</style>
