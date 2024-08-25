<template>
    <div>
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <button @click="$emit('close')" data-type="close">Close</button>
    </div>
</template>

<script setup>
const props = defineProps({
    title: String,
    content: String,
});

const emit = defineEmits(['close']);
</script>

<style scoped>
    .modal h2 {
        margin-top: 0;
    }

    .modal p {
        margin-bottom: 0;
    }

    .modal button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        color: lightpink;

        &:hover {
            color: red;
        }
    }
</style>