import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/client/HomePage'

const Menu =React.lazy(()=>import('../pages/client/MenuPage'))
const Booking =React.lazy(()=>import('../pages/client/BookingPage'))
const Manage =React.lazy(()=>import('../pages/client/ManageBooking'))
const Order =React.lazy(()=>import('../pages/client/Order'))

const PageRoutes = () => {
  return (
    <React.Suspense fallback={<div>Loading</div>}>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='home' element={<HomePage/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='booking' element={<Booking/>} />
      <Route path='orders' element={<Manage/>} />
      <Route path='orders/:id' element={<Order/>} />
    </Routes>
    </React.Suspense>
  )
}

export default PageRoutes