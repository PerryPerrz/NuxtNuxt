<template>
    <div>
        <h1>Page 3</h1>
        <p v-if="sharedName != undefined && sharedName != ''">Bonjour, {{ sharedName }} 👋</p>
        <p v-else>Vous n'avez pas indiqué de nom...</p>
        <hr>

        <button @click="isModalOpen = !isModalOpen">Open modal</button>

        <Teleport to="body">
            <div class="modal" v-if="isModalOpen" @close="isModalOpen = false">
                <modal-content title="Modal" content="Modal content goes here..." @click="isModalOpen = false"></modal-content>
            </div>
        </Teleport>

        <div v-if="isModalOpen" class="overlay"></div>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: 'dindon',
    })

    useHead({
        title: 'Page Three',
        description: 'The third page',
    })
    const sharedName = useState('firstname', 'default-name');

    const isModalOpen = ref(false);

    // When the modal is open, the user can't scroll the page
    watch(isModalOpen, (value) => {
        if (value) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    });
</script>

<style scoped>
    .modal {
        background-color: white;
        border-radius: 0.5rem;
        padding: 1rem;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }

    .overlay {
        background-color: rgba(128, 128, 128, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 999;
    }
</style>