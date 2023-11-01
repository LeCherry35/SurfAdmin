import axios from 'axios'
import { AuthResponse } from '../models/response/AuthResponce'

export const API_URL = 'http://localhost:5000/api'
const $api = axios.create({
    baseURL: API_URL
})

$api.interceptors.request.use(config => {
    if(/login/.test(config.url ?? '')) return config;

    if (/refresh/.test(config.url ?? '')) {
        config.headers.refresh_token = `${localStorage.getItem('refreshToken')}`
    } else {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const { config } = error;

    if(error.response.status === 401 && config && !config.isRetry ) {
        try {
            
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`)

            localStorage.setItem('token', response.data.accessToken)
            return $api.request(config)
        } catch {
            console.log('User is not authorized');
        }
    }
    throw error
})

export default $api