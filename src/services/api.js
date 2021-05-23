import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:5001/v1/finaciamento',
    headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
    }
});

export default api;