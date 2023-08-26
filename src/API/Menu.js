import axios from 'axios'
import { BaseUrl } from './Url'

export const sampleMenu= await axios.get(BaseUrl+"/sample_menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    
export const menuData= await axios.get(BaseUrl+"/menu")
    .then((menu)=>menu.data)
    .catch(e=>console.log(e))
    