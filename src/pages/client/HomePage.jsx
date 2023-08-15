import React from 'react'
import Home from '../../components/Home/Home'
import AboutPage from './AboutPage'
import BookingBanner from '../../components/Banner/BookingBanner'
import MenuPage from './MenuPage'

const HomePage = () => {
  return (
    <>
    <Home/>
    <AboutPage/>
    <BookingBanner/>
    <MenuPage/>
    </>
  )
}

export default HomePage