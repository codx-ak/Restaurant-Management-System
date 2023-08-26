import axios from 'axios'
import { BaseUrl } from './Url'

export const TableGet= await axios.get(BaseUrl+"/tables")
    .then((table)=>table.data)
    .catch(e=>console.log(e))



export const TableFilterById=async(id)=>
{    try{
    const response= await axios.get(BaseUrl+"/tables?table_no="+id)
    return response.data
        }
    catch(error) {
        console.error('Error', error);
        return null
        }
}

export const TableBooking=async(id,data)=>{
    try{
        const response= await axios.patch((BaseUrl+"/tables?table_no="+id),data)
        console.log(response.data);
    }
   catch(error) {
    console.error('Error', error);
  }
} 


export const TableBookingCancel=async(id,data)=>{
    return await axios.patch(BaseUrl+"/tables/"+id,data)
                .then(res=>{
                        if(res.status==200){
                            console.log("Booking Cancelled")
                        }
                    })
                .catch(e=>console.log(e))
} 
    
    