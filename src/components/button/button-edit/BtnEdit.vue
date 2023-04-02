<template>
    <span class="material-icons btn__edit">
        mode_edit
    </span>
</template>

<script>
export default {
    name: 'BtnEdit',
}
</script>

<style lang="scss">
.btn__edit {
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
</style>