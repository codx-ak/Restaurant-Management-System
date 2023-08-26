import {configureStore} from '@reduxjs/toolkit'
import OrderSlice from '../Store/OrderSlice'
import MenuSlice from '../Store/MenuSlice'
import TableSlice from '../Store/TableSlice'

//config Redux Store
export const store=configureStore({
    reducer:{
        //Table Store
        OrderStore:OrderSlice,
        MenuStore:MenuSlice,
        TableStore:TableSlice
    }
})