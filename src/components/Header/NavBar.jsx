import React from 'react'
import {Box,Typography} from '@mui/material'
import './nav.css'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
   <Box className='NavBar'>
    <Box className='nav-logo'>
      <Typography component='h6' variant='h6'>Codx .</Typography>
    </Box>
    <Box className='nav-item'>
      <Link to='/home'><Typography component='li'>Home</Typography></Link>
    <Link to='/home'><Typography component='li'>About</Typography></Link>
    <Link to='/menu'><Typography component='li'>Menu</Typography></Link>
    <Link to='/booking'><Typography component='li'>Reservation</Typography></Link>
    <Link to='/orders'><Typography component='li'>Manage</Typography></Link>
    </Box>
   </Box>
  )
}
export default NavBar