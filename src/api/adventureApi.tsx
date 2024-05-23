import axios from 'axios'

const baseURL = 'https://conocepanama-backend-production.up.railway.app/api'

const adventureApi = axios.create({ baseURL })

export default adventureApi