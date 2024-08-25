//import { registerEndpoint } from '@nuxt/test-utils/runtime'

const randomNumber = Math.floor(Math.random() * 10) + 1

//En temps normal, on devrait utiliser un service pour fetcher les données
export default defineEventHandler (async (event) => {
  const name = getRouterParam(event, 'name')

  // Fetch data from a fake API
  const response = await fetch('https://fakestoreapi.com/products/' + randomNumber)
  const data = await response.json()

  return `Hello, ${name}! Here is a random product: ${data.title} it costs ${data.price}E`
})

/*
// Pour les tests, on peut mocker les données et retourner de la fake data
registerEndpoint('https://fakestoreapi.com/products/ + randomNumber', () => {
  return {
    title: 'Un beau dindon',
    price: 100000
  }
})*/