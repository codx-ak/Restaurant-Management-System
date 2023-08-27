import axios from 'axios'
import { BaseUrl } from './Url'

export const TableGet= await axios.get(BaseUrl+"/api/tables")
    .then((table)=>table.data)
    .catch(e=>console.log(e))



export const TableFilterById=async(id)=>
{    try{
    const response= await axios.get(BaseUrl+"/api/tables/"+id)
    return response.data
        }
    catch(err) {
        console.log(err);
        }
}

export const TableFilterByGuest=await axios.get(BaseUrl+"/api/tables?status=Available")
        .then(table=>table.data)
        .catch(e=>console.log(e));

export const TableFilterByStatus=await axios.get(BaseUrl+"/api/tables?status=Booked")
        .then(table=>table.data)
        .catch(err=>console.log(err));


export const TableBooking=async(id,data)=>{
    try{
    const response=await axios.patch((BaseUrl+"/api/tables/"+id),data,
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
    const response=await axios.patch(BaseUrl+"/api/tables/"+id,data,
    {headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'}})
        return response.data
    }
    catch(err){
        console.log(err)
    }
    
    
} 
    
    