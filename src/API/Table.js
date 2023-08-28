import api from './api'

//getting All Table deta with get method
export const TableData=async()=>{
    try{
    const response=await api.get("/api/tables")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

//getting filtered data with get method
export const TableFilterById=async(id)=>
{    try{
    const response= await api.get("/api/tables/"+id)
    return response.data
        }
    catch(err) {
        console.log(err);
        }
}

//getting filtered data with get method
export const TableFilterByGuest=async(guest)=>{
    try{
    const response=await api.get("/api/tables?status=Available")
    let Filter=response.data.filter(data=>data.seating_capacity >= guest)
    return Filter
    }
    catch(err) {
        console.log(err);
        }
}

//getting filtered data with get method
export const TableFilterByStatus=async()=>{
    try{
    const response=await api.get("/api/tables?status=Booked")
    return response.data
    }
    catch(err) {
        console.log(err);
        }
}

//update the table Data
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
    
    