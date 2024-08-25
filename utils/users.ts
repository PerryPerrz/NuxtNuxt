const BASE_URL = 'http://localhost:8080'

// Function to get the users
export const getUsers = async () => {
    const response = await fetch(BASE_URL + '/users')
    const data = await response.json()

    return data
}

// Function to get a user by id
export const getUserById = async (id: string) => {
    const response = await fetch(BASE_URL + '/users/' + id)
    const data = await response.json()

    return data
}