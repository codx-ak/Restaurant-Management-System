import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/client/HomePage'
import Loader from '../components/Loading/Loading'
import Login from '../Validate/Login'
import Logout from '../Validate/Logout'

// Lasy load to import the Pages
const Menu =React.lazy(()=>import('../pages/client/MenuPage'))
const Booking =React.lazy(()=>import('../pages/client/BookingPage'))
const Orders =React.lazy(()=>import('../pages/client/Orders'))
const OrderDetail =React.lazy(()=>import('../pages/client/OrderDetail'))
const Review =React.lazy(()=>import('../pages/client/ReviewPage'))
const Success =React.lazy(()=>import('../pages/client/ConfirmPage'))
const Table =React.lazy(()=>import('../pages/client/TablePage'))
const TableDetail =React.lazy(()=>import('../pages/client/TableDetail'))
const ManageTable =React.lazy(()=>import('../pages/admin/ManageTable'))
const TableDetails =React.lazy(()=>import('../pages/admin/TableDetails'))

const PageRoutes = () => {
  return (
    <React.Suspense fallback={<Loader/>}>
    <Routes>
      {/* Home Page*/}
      <Route path='/' element={<HomePage/>} />
      <Route path='home' element={<HomePage/>} />
      {/* Menu Page*/}
      <Route path='menu' element={<Menu/>} />
      {/* Booking Page*/}
      <Route path='booking' element={<Booking/>} />
      <Route path='booking/success' element={<Success/>} />
      {/* Order Page*/}
      <Route path='orders' element={<Orders/>} />
      <Route path='orders/:id' element={<OrderDetail/>} />
      {/* Table Page*/}
      <Route path='table-overview' element={<Table/>} />
      <Route path='table-overview/:id' element={<TableDetail/>} />
      {/* Feedback Page*/}
      <Route path='feedback' element={<Review/>} />
      {/* Authentication Page*/}
      <Route path='login' element={<Login/>} />
      <Route path='logout' element={<Logout/>} />
      {/* Admin Page*/}
      <Route path='admin' element={<ManageTable/>} />
      <Route path='admin/table/:id' element={<TableDetails/>} />
    </Routes>
    </React.Suspense>
  )
}

export default PageRoutes