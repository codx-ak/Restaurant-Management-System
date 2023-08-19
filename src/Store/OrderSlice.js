import {createSlice} from '@reduxjs/toolkit'
import {Table} from '../DB/Table'

const initialState={
    value:[]
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
                Table:action.payload.table,
                name:action.payload.name,
                email:action.payload.email,
                mobile:action.payload.mobile,
                checkIn:action.payload.checkin,
                time:action.payload.time,
                guest:action.payload.guest,
                booked:today,
                status:'Table Booked'
            }
            state.value.push(OrderModel)
            localStorage.setItem("table",JSON.stringify(OrderModel))
            TableUpdate(OrderModel)
            
        },

        RemoveOrder:(state,action)=>{
            let ProductIndex=null
            state.value.find((data,index)=>{
                if(action.payload.Table == data.Table){
                    ProductIndex=index
                    localStorage.clear()
                    TableClear(action.payload.Table)
                }
            })
            state.value.splice(ProductIndex,1)
        }
        
}})

const TableUpdate=(data)=>{
    let tableIndex=null;
    Table.find((table,index)=>{
        if(table.tableNo==data.Table){
            tableIndex=index;
        }
    })
    Table[tableIndex].status="Booked"
    Table[tableIndex].reservation={
                name:data.name,
                email:data.email,
                checkIn:data.checkin,
                time:data.time,
                guest:data.guest
            }
    
}

const TableClear=(data)=>{
    let tableIndex=null;
    Table.find((table,index)=>{
        if(table.tableNo==data){
            tableIndex=index;
        }
    })
    Table[tableIndex].status="Available"
    Table[tableIndex].reservation={}

}


export const {AddOrder,RemoveOrder}=OrderSlice.actions
export default OrderSlice.reducer