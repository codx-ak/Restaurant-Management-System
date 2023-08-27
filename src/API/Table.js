import api from './api'

export const TableData=async()=>{
    try{
    const response=await api.get("/api/tables")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

export const TableFilterById=async(id)=>
{    try{
    const response= await api.get("/api/tables/"+id)
    return response.data
        }
    catch(err) {
        console.log(err);
        }
}

export const TableFilterByGuest=async()=>{
    try{
    const response=api.get("/api/tables?status=Available")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

export const TableFilterByStatus=async()=>{
    try{
    const response=await api.get("/api/tables?status=Booked")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

export const TableBooking=async(id,data)=>{
    try{
    const response=await api.patch(("/api/tables/"+id),data,
        {headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'}})
        return response.data
    }
    catch(err){
        console.log(err)
    }
    
} 


export const TableBookingCancel=async(id,data)=>{
    try{
    const response=await api.patch("/api/tables/"+id,data,
    {headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'}})
        return response.data
    }
    catch(err){
        console.log(err)
    }
    
    
} 
    
    