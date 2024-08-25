<template>
  <NuxtLoadingIndicator :throttle="0" :color="color" :height="3"/>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
  useHead({
    titleTemplate: 'Nuuuxt - %s'
  })

  const color = 'pink'

  console.log('Running in ' + process.env.NODE_ENV + ' mode');
</script>

<style>
:root {
  --navbar-footer-color: #f8f9fa;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

button {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #0053b3;
  }
}

select {
    padding: 0.5rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
    margin-right: 1rem;
}

input {
    padding: 0.5rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
}

span {
    color: #0070f3;
}

hr {
  margin: 2rem 0;
}

h1 {
  margin-top: 4rem;
  text-align: center;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>