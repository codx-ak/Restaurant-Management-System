import axios from 'axios'
import { BaseUrl } from './Url'

export const feedbackGet= await axios.get(BaseUrl+"/feedback")
    .then((msg)=>msg.data)
    .catch(e=>console.log(e))

export const feedbackPost=async(data)=>{
    return await axios.post(BaseUrl+"feedback",data)
        .then(res=>{
            if(res.status==200){
                console.log("Feedback send")
            }
        })
}