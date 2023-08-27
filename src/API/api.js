import axios from 'axios'


const api = axios.create({
    baseURL:"https://codx-json-server.vercel.app",
    });
    
export default api;