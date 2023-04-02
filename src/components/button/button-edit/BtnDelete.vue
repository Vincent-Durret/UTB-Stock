<template>
    <span class="material-icons btn__delete">
        delete
    </span>
</template>

<script>
export default {
    name: 'BtnUpdate',
}
</script>

<style lang="scss">
.btn__delete {
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
</style>