// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    title: 'Nuuuxt',
    description: 'Awesome Nuxt.js project',
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  //plugins: ['~/plugins/routeMiddleware.ts', '~/plugins/vue-query.ts'], //Si les plugins sont directement dans la root de plugins, pas besoin de les import à la main
})