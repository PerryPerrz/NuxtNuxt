<template>
    <div>
        <h2>Component B</h2>
        <p>Composant dynamik et KeepAlive. (B)</p>
        
        <div class="content">
            Value indiquée : <span>{{ inputValue }}</span>
            <custom-input v-model="inputValue" />
        </div>
    </div>
</template>

<script setup>
    onMounted(() => {
        console.log('ComponentB mounted');
    });

    const inputValue = ref('Hello World');
    const emit = defineEmits(['update:modelValue']);
</script>

<style scoped>
.content {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #f9f9f9;

    display: flex;
    flex-direction: column;
    gap: 1rem;
}
</style>