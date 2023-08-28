import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:[false]
}
const AuthSlice=createSlice({
    name:'AuthStore',
    initialState:initialState,
    reducers:{
        AuthLogin:(state)=>{
            state.value[0]=true
        },
        AuthLogout:(state)=>{
            state.value[0]=false
            alert("Logout Successfully")
        }
    }
})
export const {AuthLogin,AuthLogout}=AuthSlice.actions
export default AuthSlice.reducer