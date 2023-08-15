import React from 'react'
import Home from '../../components/Home/Home'
import BookingBanner from '../../components/Banner/BookingBanner'
import MenuPage from './MenuPage'
import About from '../../components/Home/About'

const HomePage = () => {
  return (
    <>
    <div className='home'>
    <Home/>
    </div>
    <About/>
    <BookingBanner/>
    <MenuPage/>
    </>
  )
}

export default HomePage