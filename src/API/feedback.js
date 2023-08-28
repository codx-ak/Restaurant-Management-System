import api from './api'

export const feedbackGet=async()=>{
    try{
    const response=await api.get("/api/feedback")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

export const feedbackPost=async(data)=>{
    await api.post("/api/feedback",data,{headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
    }})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
}