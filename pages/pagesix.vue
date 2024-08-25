<template>
    <div>
        <h1>Page 6</h1>

        <div class="buttons">
            <button @click="addPost">Ajouter un post</button>
            <button @click="clearPosts" id="dangerBtn">Nettoyer</button>
        </div>

        <div v-if="deletedPosts.length !== 0" style="margin-top: 1rem;">
            Les posts supprimés : <span>{{ deletedPosts }}</span>
        </div>

        <div class="grid">
            <p v-if="isPending">Les posts se chargent...</p>
            <p v-else-if="error">Une erreur est survenue: {{ error.message }}</p>
            <div v-else class="container">
                <div v-for="post in posts" :key="post.id">
                    <div class="card">
                        <span>Post n° {{ post.id}}</span>
                        <p>{{ post.title }}</p>
                        <p>{{ post.content }}</p>
                        <p>{{ post.createdAt }}</p>

                        <div class="buttons">
                            <button @click="editPost(post.id)">Editer</button>
                            <button @click="deletePost(post.id)">Supprimer</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useQuery, useQueryClient, useMutation} from '@tanstack/vue-query';

    useHead({   
        title: 'Page Six',
        description: 'The sixth page',
    })

    const BASE_URL = 'http://localhost:3000/api'

    const queryClient = useQueryClient()

    // Function to get the posts
    const getPosts = async () => {
        const response = await $fetch(BASE_URL + '/posts')
        
        return response
    }

    // Get the posts
    const { data: posts, isPending, error} = useQuery({
        queryKey: ['posts'],
        queryFn: getPosts,

        refetchOnWindowFocus: true,
    })

    /*
    // Call the nuxt api to add a post
    const addPost = async () => {
        await $fetch(BASE_URL + '/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: 'Nouveau post',
                body: 'Contenu du nouveau post',
                userId: 1
            })
        })

        // Refresh the posts
        queryClient.invalidateQueries('posts')
    }*/

    const addPost = () => {
        mutate()

        // Refresh the posts
        deletedPosts.value = ''
    }

    // With mutation, we can use the mutate function to add a post
    const { mutate} = useMutation({
        mutationKey: 'addPost',
        mutationFn: async () => {
            const response = await fetch(BASE_URL + '/posts', {
                method: 'POST',
                body: JSON.stringify({
                    id: Math.max(...posts.value.map(post => post.id)) + 1,
                    title: 'Nouveau post',
                    content: 'Nouveau post',
                    createdAt: new Date().toISOString()
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

    // Call the nuxt api to delete a post
    const deletePost = async (id: number) => {
        await fetch(BASE_URL + '/post/' + id, {
            method: 'DELETE',
        })

        // Refresh the posts
        queryClient.invalidateQueries('posts')
    }

    // Call the nuxt api to edit a post
    const editPost = async (id: number) => {
        await fetch(BASE_URL + '/post/' + id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                title: 'Post modifié',
                content: 'Contenu du post modifié',
                createdAt: new Date().toISOString()
            })
        })

        // Refresh the posts
        queryClient.invalidateQueries('posts')
    }

    const deletedPosts = ref('')

    const clearPosts = async () => {
        const response = await fetch(BASE_URL + '/posts', {
            method: 'DELETE',
        })

        const data = await response.json()
        
        for (const post of data) {
            deletedPosts.value += post.title + ', '
        }

        // Refresh the posts
        queryClient.invalidateQueries('posts')
    }
</script>

<style scoped>
.grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    margin: 1rem;

    overflow-y: scroll;
    height: 700px;
    padding: 0 0.5rem 0.5rem 0.5rem;
    margin: 1rem;
}

.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
    max-width: 13rem;

    .buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
    }

    &:hover {
        background-color: #f9f9f9;
    }
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 1rem;
}

#dangerBtn {
    background-color: rgb(255, 113, 113);
    color: white;

    &:hover {
        background-color: #f84444;
    }
}
</style>