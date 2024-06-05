import axios from 'axios'

const baseURL = 'http://localhost:8080/api'
//const baseURL = 'https://conocepanama-backend-production.up.railway.app/api'

const adventureApi = axios.create({ baseURL })

adventureApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')

    if (token) {
        config.headers['x-token'] = `${token}`
    }
    return config
})

export default adventureApi