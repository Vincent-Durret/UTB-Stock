<template>
    <span class="material-icons btn__update">
        edit_note
    </span>
</template>

<script>
export default {
    name: 'BtnUpdate',
}
</script>

<style lang="scss">
.btn__update {
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
</style>