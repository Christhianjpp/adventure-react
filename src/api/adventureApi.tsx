import axios from 'axios'

// const baseURL = 'http://localhost:8080/api'
const baseURL = 'https://conocepanama-backend-production.up.railway.app/api'

const adventureApi = axios.create({ baseURL })

export default adventureApi