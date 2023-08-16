import React from 'react'
import Home from '../../components/Home/Home'
import BookingBanner from '../../components/Banner/BookingBanner'
import About from '../../components/Home/About'
import Menu from '../../components/MenuCard/Menu'

const HomePage = () => {

  return (
    <>
    <div className='home'>
    <Home/>
    </div>
    <About/>
    <BookingBanner/>
    <Menu/>
    </>
  )
}

export default HomePage