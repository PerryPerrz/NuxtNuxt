<template>
    <div>
        <h2>Component A</h2>
        <p>Composant dynamik et KeepAlive. (A)</p>

        <div class="content">
            <p>Counter : {{ cpt }}</p>
            <button style="margin-right: 1rem;" @click="increment" data-type="increment">Increment</button>
            <button @click="decrement" data-type="decrement">Decrement</button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted } from 'vue';
    
    onMounted(() => {
        console.log('ComponentA mounted');
    });

    const cpt = ref<number>(0);
    const increment = () => { cpt.value++;};
    const decrement = () => { cpt.value--;};
</script>

<style scoped>
.content {
    margin-top: 1rem;
    margin-bottom: 1rem;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
}
</style>