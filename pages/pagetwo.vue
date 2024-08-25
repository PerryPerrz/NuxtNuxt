<template>
    <div>
        <h1>Page 2</h1>
        <p>Shared state: {{ alsoSharedState }}</p>

        <hr>
        
        <KeepAlive>
            <component :is="showComponentA ? componentA : componentB"></component>
        </KeepAlive>
        <button @click="showComponentA = !showComponentA">Toggle component</button>
        
        <hr>
       
        <KeepAlive>
            <component-a v-if="cpt % 2 == 0"></component-a>
            <component-b v-else></component-b>
        </KeepAlive>
        <p>Counter: {{ cpt }}</p>
        <button @click="cpt++">+1</button>
       
    </div>
</template>

<script setup>
    useHead({
        title: 'Page Two',
        description: 'The second page',
    })

    const alsoSharedState = useState('share-this');

    const componentA = resolveComponent('ComponentA');
    const componentB = resolveComponent('ComponentB');
    const showComponentA = ref(true);
    const cpt = ref(0);
</script>

<style scoped></style>