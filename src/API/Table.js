import api from './api'

export const TableGet= await api.get("/api/tables")
    .then((table)=>table.data)
    .catch(e=>console.log(e))



export const TableFilterById=async(id)=>
{    try{
    const response= await api.get("/api/tables/"+id)
    return response.data
        }
    catch(err) {
        console.log(err);
        }
}

export const TableFilterByGuest=await api.get("/api/tables?status=Available")
        .then(table=>table.data)
        .catch(e=>console.log(e));

export const TableFilterByStatus=await api.get("/api/tables?status=Booked")
        .then(table=>table.data)
        .catch(err=>console.log(err));


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
    
    