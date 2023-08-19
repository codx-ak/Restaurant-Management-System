import {configureStore} from '@reduxjs/toolkit'
import OrderSlice from '../Store/OrderSlice'

//config Redux Store
export const store=configureStore({
    reducer:{
        //Table Store
        OrderStore:OrderSlice
    }
})