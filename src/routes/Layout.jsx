import React from 'react'
import Footer from '../components/Footer/Footer'
import NavBar from '../components/Header/NavBar'
import PageRoutes from './PageRoutes'


const Layout = () => {
  return (
    <>
    <NavBar/>
    <PageRoutes/>
    <Footer/>
    </>
  )
}

export default Layout