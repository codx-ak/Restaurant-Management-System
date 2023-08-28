import {configureStore} from '@reduxjs/toolkit'
import MenuSlice from '../Store/MenuSlice'
import TableSlice from '../Store/TableSlice'
import ReviewSlice from '../Store/ReviewSlice'
import AuthSlice from '../Store/AuthSlice'

//config Redux Store
export const store=configureStore({
    reducer:{
        //Table Store
        MenuStore:MenuSlice,
        TableStore:TableSlice,
        ReviewStore:ReviewSlice,
        AuthStore:AuthSlice
    }
})