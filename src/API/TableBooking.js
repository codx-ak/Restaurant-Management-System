import axios from 'axios'
import { AddOrder, RemoveOrder } from '../Store/OrderSlice'

export const BookingPost=(data)=>{
    return (dispatch)=>{
    axios.post("http://127.0.0.1:3000/api/booking",{
    headers:{"Content-type": "application/json; charset=UTF-8",}},
    {data:data})
        .then(res=>{
            if(res.status==200){
                dispatch(AddOrder(data))
            }
        }) 
        .catch(err=>console.log(err))
}}

export const BookingDelete=(data)=>{
    return (dispatch)=>{
    axios.delete("http://127.0.0.1:3000/api/booking/"+data,{
    headers:{"Content-type": "application/json; charset=UTF-8",}})
        .then(res=>{
            if(res.status==200){
                dispatch(RemoveOrder({Table:data}))
            }
        }) 
        .catch(err=>console.log(err))
}}