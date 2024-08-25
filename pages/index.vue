<template>
  <div>
    <h1>Accueil</h1>
    <NuxtLink to="/about">À propos</NuxtLink>

    <div class="field">
      <p style="margin-right: 0.5rem;">Votre prénom : </p>
      <input style="margin-right: 0.5rem;" type="text" v-model="firstname" />
      <NuxtLink to="/pagethree">
        <button @click="sharedName = firstname; firstname=''; sayHello(sharedName)">Envoyer</button>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { useState } from 'nuxt/app';
import { sayHello } from '../composables/hello';

  useHead({
    title: 'Home',
    description: 'The home page',
  })

  const sharedState = useState('share-this', 'default-value');
  const sharedName = useState ('firstname', 'default-name');

  const firstname = ref('');

  watch(() => firstname, (value) => {
    sharedName.value = value;
  });
</script>

<style scoped>
  .field {
    display: flex;
    align-items: center;
  }

  .link {
    color: white;
    text-decoration: none;
  }
</style>