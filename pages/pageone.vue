<template>
    <div>
        <h1>Page 1</h1>

        <p>Shared state: {{ sharedState }}</p>
        <button @click="sharedState = Math.round(Math.random() * 100)">Click me</button>
        
        <hr>
        <ClientOnly fallback-tag="span" fallback="Loading comments..." class="red">
            <p>Client-only content</p>
        </ClientOnly>

        <hr>
        
        <Transition name="slide" mode="out-in" appear>
        <div :key="text">{{ text }}</div>
        </Transition>
        <button @click="text++">Increment</button>

        <hr>
        
        <TransitionGroup name="list" tag="ul">
            <li v-for="item in items" :key="item.id">
                {{ item.text }}
            </li>
        </TransitionGroup>

        <div class="list">
            <input v-model="textItem" type="text" placeholder="Enter item text">
            <button @click="addItem"  :disabled="isEmpty" :class="{ disabled: isEmpty }">Add item</button>
            <button @click="items.pop()">Remove item</button>
        </div>
    </div>
</template>

<script setup>
    useHead({
        title: 'Page One',
        description: 'The first page',
    })

    const sharedState = useState('share-this', 'default-value');
    const text = ref(0);

    const textItem = ref('');

    const isEmpty = computed(() => textItem.value.length == 0);

    const items = ref([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
    ]);

    function addItem() {
        items.value.push({ id: items.value.length + 1, text: textItem.value });
        textItem.value = '';
    }
</script>

<style scoped>
    hr {
        margin: 2rem 0;
    }

    .slide-enter-active, .slide-leave-active {
        transition: transform 0.5s;
    }

    .slide-enter, .slide-leave-to {
        transform: translateY(-30px);
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 0.5rem 0;
        padding: 0.5rem;
        border: 1px solid #ccc;
    }

    .disabled {
        background-color: #e7e6e6;
        color: gray;
    }

    .disabled:hover {
        cursor: not-allowed;
    }

    .list {
        margin-top: 3rem;
        display: flex;
        gap: 1rem;
    }

    .red {
        color: red;
    }

    .list-enter-active,
    .list-leave-active {
    transition: all 0.5s ease;
    }
    .list-enter-from,
    .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
    }
</style>