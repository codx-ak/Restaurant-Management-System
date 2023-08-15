import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:[]
}

const CartSlice=createSlice({
    name:'MenuStore',
    initialState:initialState,
    reducers:{

        AddMenu:(state,action)=>{
            const Product={...action.payload,count:1}
            if(state.value.length){
                const Result=state.value.find(data=>action.payload.id === data.id)
                if(Result){
                    alert("Already Added")
                }else{
                    state.value.unshift(Product)
                    alert("Product Add Successfully")
                }}
                else{
                    state.value.push(Product)
                    alert("Product Add Successfully")
                }
                
        },

        RemoveCart:(state,action)=>{
            let ProductIndex=null
            state.value.find((data,index)=>{
                if(action.payload.id == data.id){
                    ProductIndex=index
                }
            })
            state.value.splice(ProductIndex,1)
                alert("Product Removed ")
            
            
               
        },

        ProductCountAdd:(state,action)=>{
            state.value.find(data=>{
                if(action.payload.id === data.id){
                    data.count++
                }
            })
        },
        ProductCountDel:(state,action)=>{
            state.value.find(data=>{
                if(action.payload.id === data.id){
                    data.count--
                }
            })
        },
        ClearCart:(state,action)=>{
            state.value=[]
        }

}})

export const {AddCart,RemoveCart,ClearCart,ProductCountAdd,ProductCountDel}=CartSlice.actions
export default CartSlice.reducer