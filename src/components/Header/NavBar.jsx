import React from 'react'
import {Badge, Box,Typography} from '@mui/material'
import './nav.css'
import {Link} from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import LocalMallIcon from '@mui/icons-material/LocalMall';
const NavBar = () => {
  return (
   <Box className='NavBar'>
    <Box className='nav-logo'>
      <img src={Logo} alt={Logo} />
    </Box>
    <Box className='nav-item'>
    <Link to='/home'><Typography component='li'>Home</Typography></Link>
    <Link to='/menu'><Typography component='li'>Menu</Typography></Link>
    <Link to='/table-overview'><Typography component='li'>Table</Typography></Link>
    <Link to='/booking'><Typography component='li'>Reservation</Typography></Link>
    <Link to='/orders'><Badge color="secondary" variant="dot"><LocalMallIcon/></Badge></Link>
    </Box>
   </Box>
  )
}
export default NavBar