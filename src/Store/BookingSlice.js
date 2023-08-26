import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{}
}
const TableSlice=createSlice({
    name:'TableStore',
    initialState:initialState,
    reducers:{}
})

export default TableSlice.reducer