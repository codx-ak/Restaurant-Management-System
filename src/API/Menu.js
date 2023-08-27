import api from './api'


export const sampleMenu= await api.get("/sample_menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    
export const menuData= await api.get("/menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    