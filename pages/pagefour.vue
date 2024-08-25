<template>
    <div>
        <h1>Page 4</h1>
        
        <div class="options">
            <select v-model="selectedValue" :onChange="refreshResp">
                <option value="todos" selected>Todos</option>
                <option value="posts">Posts</option>
            </select>

            <p>Réponse de la requête n° <span>{{ resp.id }}</span> : <span>{{ resp.title }}</span></p>
            <p>Réponse de la requête avec useFetch : <span>{{ data.title }}</span> qui possède l'id : <span>{{ data.id }}</span></p>

            <form @submit.prevent="addUser">
                <input v-model="userName" type="text" placeholder="Nom">
                <input v-model="userEmail" type="text" placeholder="Mail">
                <input v-model="userNumber" type="number" placeholder="Téléphone">
                <button type="submit">Ajouter</button>
                <p>Réponse de la requête : <span>{{ postDataReponse }}</span></p>
            </form>
        </div>
 
        <div class="users-list">
            <ClientOnly>
                <div v-if="pending">Chargement...</div>
                <div v-else v-for="user in users" :key="user.id">
                    <div class="user-card">
                        <p v-if="user.name !== ''">{{user.id}} - {{ user.name }}</p>
                        <p v-else>Utilisateur n°{{ user.id }}</p>

                        <p v-if="user.email !== ''">{{ user.email }}</p>
                        <p v-else>Adresse mail non renseignée</p>

                        <p v-if="user.email !== ''">{{ user.phone }}</p>
                        <p v-else>Numéro de téléphone non renseigné</p>

                        <div class="buttons">
                            <button @click="editUser(user.id)">Editer</button>
                            <button @click="deleteUser(user.id)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
    const BASE_URL = 'http://localhost:8080'

    useHead({
        title: 'Page Four',
        description: 'The fourth page',
    })

    const selectedValue = ref('todos')
    const postDataReponse = ref('')
    //const users = ref([])

    let resp = await fetch(BASE_URL + '/' + selectedValue.value + '/2')
        .then(response => response.json())
        .then(data => data.title)
        .catch(error => console.error(error))

    const refreshResp = async () => {
        resp = await $fetch(BASE_URL + '/' + selectedValue.value + '/1', {
            pick: ['title', 'id'],
        })
    }

    const { data, error} = await useFetch(BASE_URL + '/' + selectedValue.value + '/2', {
        pick: ['title', 'id'],
    })

    const userName = ref('')
    const userEmail = ref('')
    const userNumber = ref('')

    /*
    // JavaScript Fetch
    users.value = await fetch(BASE_URL + '/users')
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.error(error))
    */
    
    // Nuxt Fetch
    const { pending, data: users, refresh} = useFetch(BASE_URL + '/users', {
       lazy: false,
    })

    const addUser = async () => {
        const response = await fetch(BASE_URL + '/users', {
            method: 'POST',
            body: JSON.stringify({
                id: (users.value.length + 1).toString(),
                name: userName.value,
                email: userEmail.value,
                phone: userNumber.value,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => postDataReponse.value = data)
        .catch(error => console.error(error))

        refresh()
    }

    const deleteUser = async (id: string) => {
        const response = await fetch(BASE_URL + '/users/' + id, {
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

        refresh()
    }

    const editUser = async (id: string) => {
        const response = await fetch(BASE_URL + '/users/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                name: 'John Doe',
                email: 'john.doe@amundi-fc.com',
                phone: '0123456789',
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))

        refresh()
    }
</script>

<style scoped>
input {
    margin-right: 1rem;
}

.user-card {
    padding: 1rem;
    border: 1px solid #eaeaea;
    border-radius: 0.5rem;
    background-color: #f9f9f9;
    margin-top: 0rem;

    &:hover {
        background-color: #f0f0f0;
    }
}

.users-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 1rem;
    overflow-y: scroll; 
    height:400px;
    padding: 0 0.5rem 0.5rem 0.5rem;
    margin: 1rem;
}

.buttons {
    display: flex;
    justify-content: right;
    gap: 1rem;
    margin-top: 1rem;
}

.options {
    margin: 1.5rem;
}
</style>