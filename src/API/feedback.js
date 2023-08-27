import api from './api'

export const feedbackGet= await api.get("/api/feedback")
    .then((msg)=>msg.data)
    .catch(e=>console.log(e))

export const feedbackPost=async(data)=>{
    await api.post("/api/feedback",data,{headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}