import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import MenuCard from './MenuCard'

import { Link } from 'react-router-dom'
import {sampleMenu} from '../../DB/MenuDB'

const Menu = () => {
  
  return (
    <Box id='Menu'>
    <Typography className='first-title' variant='h6'>Specialties</Typography>
    <Typography className='second-title' variant='h4'>Our Menu</Typography>
    <Box className="menu-container">
    {
      // Home Page Menu Mapping
      sampleMenu.length ? sampleMenu.map((item,index)=><MenuCard key={index} MenuItem={item}/>) : <Typography component='p'> No Items</Typography>
    }
    </Box>
    <Typography sx={{textAlign:'center',padding:5}}>
      <Link to='/menu'>
      <Button color='error' variant='outlined'>View Menu</Button>
      </Link>
    </Typography>
  </Box>
  )
}

export default Menu