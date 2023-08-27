import axios from 'axios'
import { BaseUrl } from './Url'

export const feedbackGet= await axios.get(BaseUrl+"/api/feedback")
    .then((msg)=>msg.data)
    .catch(e=>console.log(e))

export const feedbackPost=async(data)=>{
    await axios.post(BaseUrl+"/api/feedback",data,{headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}