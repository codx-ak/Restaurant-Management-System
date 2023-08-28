import api from './api'

//getting All smaplemenu with get method
export const sampleMenu= await api.get("/sample_menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    
//getting All menudata with get method
export const menuData= await api.get("/menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    