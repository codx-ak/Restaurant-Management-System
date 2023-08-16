import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[{
        id:1,
                Order:"adg",
                Table:24,
                name:'Ak',
                email:'fhgh',
                mobile:'2345',
                checkIn:'56/14/3',
                time:'3-3',
                guest:2,
                booked:'3/5/6',
                status:'Table Reservered'
    }]
}

const OrderSlice=createSlice({
    name:'OrderStore',
    initialState:initialState,
    reducers:{

        AddOrder:(state,action)=>{
            let today = new Date().toISOString().slice(0, 10)
            var orderId = "Ak" + Math.random().toString(16).slice(2)
            const OrderModel={
                id:state.value.length+1,
                Order:orderId,
                Table:24,
                name:action.payload.name,
                email:action.payload.email,
                mobile:action.payload.mobile,
                checkIn:action.payload.checkin,
                time:action.payload.time,
                guest:action.payload.guest,
                booked:today,
                status:'Table Reservered'
            }
            state.value.push(OrderModel)
            
            alert("Order Placed")
        },

        RemoveOrder:(state,action)=>{
            let ProductIndex=null
            state.value.find((data,index)=>{
                if(action.payload.id == data.id){
                    ProductIndex=index
                }
            })
            state.value.splice(ProductIndex,1)
                alert("Order Removed ")
            
            
               
        }

}})

export const {AddOrder,RemoveOrder}=OrderSlice.actions
export default OrderSlice.reducer