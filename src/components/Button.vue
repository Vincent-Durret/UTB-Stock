<template>
    <button class="btn" :class="type" @click="handleClick">
        {{ label }}
    </button>
</template>
  


<script>
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        label: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: 'default',
        },
    },
    setup(props, { emit }) {
        function handleClick() {
            emit('click');
        }

        return {
            handleClick,
        };
    },
});
</script>

  
<style scoped>
.btn {
    position: relative;
    z-index: 10000;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
}

.btn.default {
    background-color: #3273dc;
}

.btn.default:hover {
    background-color: #2768c7;
}

.btn.warning {
    background-color: #f66;
}

.btn.warning:hover {
    background-color: #ef5c00;
}
</style>
  