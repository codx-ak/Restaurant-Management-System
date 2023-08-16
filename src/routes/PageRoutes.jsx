import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/client/HomePage'
import Loader from '../components/Loading/Loading'

const Menu =React.lazy(()=>import('../pages/client/MenuPage'))
const Booking =React.lazy(()=>import('../pages/client/BookingPage'))
const Orders =React.lazy(()=>import('../pages/client/Orders'))
const OrderDetail =React.lazy(()=>import('../pages/client/OrderDetail'))
const Review =React.lazy(()=>import('../pages/client/ReviewPage'))

const PageRoutes = () => {
  return (
    <React.Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='home' element={<HomePage/>} />
      <Route path='menu' element={<Menu/>} />
      <Route path='booking' element={<Booking/>} />
      <Route path='orders' element={<Orders/>} />
      <Route path='feedback' element={<Review/>} />
      <Route path='orders/:id' element={<OrderDetail/>} />
    </Routes>
    </React.Suspense>
  )
}

export default PageRoutes