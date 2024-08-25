# NuxtNuxt

## Présentation
Projet de prise en main de Nuxt, TanStack Query (Anciennement Vue Query) et Vitest.

--- 

## NotaBene
Autoimport dans les packages Components/Composables/Utils

Il faut penser à ajouter : 

`{
 "include": [
    "types/**/*.d.ts",
    "plugins/**/*.ts",
    "middleware/**/*.ts",
    "store/**/*.ts",
    "layouts/**/*.ts",
    "pages/**/*.ts",
    "components/**/*.ts"]
}`

dans le fichier tsconfig.json

---

## Commandes
- Installer les dépendances : `npm i` / `npm install`
- Lancer le serveur : `npx json-server -p 8080  db.json`
- Lancer l'application Nuxt : `npm run dev`
- Lancer les tests avec Vitest : `npm run test`
- Lancer le coverage des tests avec V8 : `npm run coverage`

---

## Routes
- L'application Nuxt : http://localhost:3000/
- Le serveur : http://localhost:8080/

### Endpoints de l'API du serveur Nitro de Nuxt
- /hello/[name]
- /hello/[name]/[age]
- /posts 
    - delete : Supprimer tous les posts
    - get : Récupèrer tous les posts
    - post : Ajouter un post
- /post/[id]
    - delete : Supprimer un post spécifique
    - get : Récupèrer un post spécifique
    - put : Modifier un post spécifique

---
## Liens

https://tanstack.com/query/latest/docs/framework/vue/guides/queries
https://tanstack.com/query/latest/docs/framework/vue/guides/mutations
https://tanstack.com/query/latest/docs/framework/vue/guides/query-invalidation
https://tanstack.com/query/latest/docs/framework/vue/guides/filters#query-filters

https://jestjs.io/fr/
https://vitest.dev/