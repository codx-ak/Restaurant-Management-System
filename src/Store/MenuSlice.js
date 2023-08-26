import { createSlice } from "@reduxjs/toolkit";
import { menuData } from '../API/Menu'
import { sampleMenu } from '../API/Menu'

const initialState={
    value:{
        menuData,
        sampleMenu
    }
}
const MenuSlice=createSlice({
    name:'MenuStore',
    initialState:initialState,
    reducers:{}
})

export default MenuSlice.reducer