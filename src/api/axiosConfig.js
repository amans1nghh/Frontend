import axios from 'axios';

const api = axios.create({
    baseURL: 'https://moviereview-backend-r2gd.onrender.com'
    
});

export default api;
