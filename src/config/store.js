import {configureStore} from '@reduxjs/toolkit'
import OrderSlice from '../Store/OrderSlice'
export const store=configureStore({
    reducer:{
        OrderStore:OrderSlice
    }
})