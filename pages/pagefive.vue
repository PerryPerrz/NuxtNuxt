<template>
    <div>
        <h1>Page 5</h1>

        <div class="options">
            <input v-model="userName" placeholder="Name" />
            <input v-model="userEmail" placeholder="Email" />
            <input v-model="userNumber" placeholder="Phone"/>

            <button @click="addUser" :disabled="disabled" :class="{ 'is-disabled': disabled }" class="optBtn">Ajouter un utilisateur</button>
            <button @click="searchUser" class="optBtn">Rechercher un utilisateur</button>
            <button class="danger" @click="clearAll">Nettoyer</button>
        </div>

        <ClientOnly>
            <div class="grid">
                <div v-if="isPending">
                    <p>Chargement des données...</p>
                </div>
                <div v-else-if="error">
                    <p>Une erreur est survenue : {{ error.message }}</p>
                </div>
                <div v-else v-for="user in users" :key="user.id">
                    <div class="card">
                        <span>Utilisateur n° {{ user.id }}</span>

                        <p>{{ user.name }}</p>
                        <p>{{ user.email }}</p>
                        <p>{{ user.phone }}</p>

                        <div class="buttons">
                            <button @click="editUser(user.id)">Editer</button>
                            <button @click="deleteUser(user.id)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        </ClientOnly>
    </div>
</template>

<script setup lang="ts">
    import { useQuery, useMutation, useQueryClient} from '@tanstack/vue-query';
    import { ref, computed } from 'vue';
    
    const BASE_URL = 'http://localhost:8080'

    const userName = ref('')
    const userEmail = ref('')
    const userNumber = ref('')

    const queryClient = useQueryClient()

    import { getUsers } from '../utils/users'

    useHead({
        title: 'Page Five',
        description: 'The fifth page',
    })

    const disabled = computed(() => {
        return userName.value === '' || userEmail.value === '' || userNumber.value === ''
    })

    // Function to get the users
    /*
    const getUsers = async () => {
        const response = await fetch(BASE_URL + '/users')
        const data = await response.json()

        //console.log(await queryClient.isMutating())
        return data
    }*/

    // Get the users
    const { data: users, isPending, error} = useQuery({
        queryKey: ['users'],
        queryFn: getUsers,

        // refetch the data to each datas change
        //refetchOnMount: 'always',

        // Refetch the data when the window regains focus 
        refetchOnWindowFocus: true,
    })

    // Function to add a user
    const addUser = async () => {
        mutate({
            name: userName.value,
            email: userEmail.value,
            phone: userNumber.value,
        })

        userName.value = ''
        userEmail.value = ''
        userNumber.value = ''
    }

    // Add a user
    const { mutate} = useMutation({
        mutationKey: 'addUser',
        mutationFn: async (user) => {
            const response = await fetch(BASE_URL + '/users', {
                method: 'POST',
                body: JSON.stringify({
                    //id: (users.value.length + 1).toString(),
                    id: (Math.max(...users.value.map(user => user.id)) + 1).toString(),
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json()
            return data
        },
        onSuccess: () => {
            // Invalidate all the requests with the key 'users', and so, refetch the data
            queryClient.invalidateQueries('users')
        },
    })

    // Function to delete a user
    const deleteUser = async (id) => {
        mutateDelete(id)
    }

    // Delete a user
    const { mutate: mutateDelete} = useMutation({
        mutationKey: 'delete',
        mutationFn: async (id) => {
            const response = await fetch(BASE_URL + '/users/' + id, {
                method: 'DELETE',
            })

            const data = await response.json()
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })

    // Function to edit a user
    const editUser = async (id) => {
        let user = users.value.find(user => user.id === id);

        let name = prompt("Enter the new name", user.name);
        let email = prompt("Enter the new email", user.email);
        let phone = prompt("Enter the new phone", user.phone);
        
        mutateEdit({
            id: id,
            name: name,
            email: email,
            phone: phone,
        })

        queryClient.invalidateQueries('users')
    }

    // Edit a user
    const { mutate: mutateEdit } = useMutation({
        mutationKey: 'edit',
        mutationFn: async (user) => {
            const response = await fetch(BASE_URL + '/users/' + user.id, {
                method: 'PUT',
                body: JSON.stringify({
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await response.json()
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })

    // Function to search a user
    const searchUser = async () => {
        let name = prompt("Enter the name of the user you want to search", '');
        name = name.toLowerCase();

        let user = users.value.find(user => user.name.toLowerCase() === name);
        if (user) {
            alert("User found: " + user.name + " - " + user.email + " - " + user.phone);
        } else {
            alert("User not found");
        }
    }

    // Function to clear all the users
    const clearAll = async () => {
        /*
        if (confirm("Are you sure you want to delete all the users?")) {
            mutateClear()
        }*/

        alert("L'endpoint DELETE /users n'est pas disponible")
    }

    // Clear all the users
    const { mutate: mutateClear } = useMutation({
        mutationKey: 'clear',
        mutationFn: async () => {
            const response = await fetch(BASE_URL + '/users', {
                method: 'DELETE',
            })

            const data = await response.json()
            return data
        },
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })
</script>

<style scoped>
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 1rem;

        overflow-y: scroll;
        height: 600px;
        padding: 0 0.5rem 0.5rem 0.5rem;
        margin: 1rem;
    }

    .card {
        padding: 1rem;
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 14rem;
        margin-top: 0rem;
    }
    .card:hover {
        background-color: #f9f9f9;
    }

    .buttons {
        display: flex;
        justify-content: right;
        gap: 1rem;
    }

    .options {
        margin: 1.5rem;
    }

    .optBtn, input{
        margin-right: 1rem;
    }

    .danger {
        background-color: rgb(255, 113, 113);
        color: white;

        &:hover {
            background-color: #f84444;
        }
    }

    .is-disabled {
        background-color: #e7e6e6;
        color: gray;

        &:hover {
            cursor: not-allowed;
        }
    }
</style>