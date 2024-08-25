/* v8 ignore start */
<template>
    <footer>
        <p>&copy; 2024 - <a href="https://nuxt.com/">Nuuuxt</a></p>
    </footer>
</template>

<script setup></script>

<style scoped>
    footer {
        text-align: center;

        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;

        background-color: var(--navbar-footer-color);
    }

    a {
        color: rgb(0, 0, 0);
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
</style>
/* v8 ignore end */