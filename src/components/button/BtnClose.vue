<template>
    <span class="material-icons btn__close">
        cancel
    </span>
</template>

<script>
export default {
    name: 'BtnClose',

}
</script>

<style lang="scss">
.btn__close {
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
</style>