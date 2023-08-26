import axios from 'axios'
import { BaseUrl } from './Url'

export const TableGet= await axios.get(BaseUrl+"/table")
    .then((table)=>table.data)
    .catch(e=>console.log(e))

export const TableBooking=async(id,data)=>{
    return await axios.patch(BaseUrl+"/table/"+id,data)
                .then(res=>{
                        if(res.status==200){
                            console.log("Table Booked")
                        }
                    })
                .catch(e=>console.log(e))
} 
export const TableBookingCancel=async(id,data)=>{
    return await axios.patch(BaseUrl+"/table/"+id,data)
                .then(res=>{
                        if(res.status==200){
                            console.log("Booking Cancelled")
                        }
                    })
                .catch(e=>console.log(e))
} 
    
    