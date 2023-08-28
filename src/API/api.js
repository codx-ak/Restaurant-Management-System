import axios from 'axios'

//axios to creating BaseUrl
const api = axios.create({
    baseURL:"https://codx-json-server.vercel.app",
    });
    
export default api;