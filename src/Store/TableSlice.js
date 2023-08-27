import { createSlice } from "@reduxjs/toolkit";
import { TableBooking, TableBookingCancel } from "../API/Table";
const initialState={
    value:[]
}
const TableSlice=createSlice({
    name:'TableStore',
    initialState:initialState,
    reducers:{
        AddBooking:(state,action)=>{
            let today = new Date().toISOString().slice(0, 10)
            // Order ID Generate
            var orderId = "Ak" + Math.random().toString(16).slice(2)
            const OrderModel={
                Order:orderId,
                Table:action.payload.table,
                name:action.payload.name,
                email:action.payload.email,
                mobile:action.payload.mobile,
                checkIn:action.payload.checkin,
                time:action.payload.time,
                guest:action.payload.guest,
                booked:today
            }
            TableBooking(action.payload.table,{reservation:OrderModel,status:"Booked"})
            // store local storage
            localStorage.setItem("table",JSON.stringify(OrderModel))
        },
        CancelBooking:(state,action)=>{
            TableBookingCancel(action.payload,{reservation:{},status:"Available"})
        }
    }
})

export const {AddBooking,CancelBooking}=TableSlice.actions
export default TableSlice.reducer