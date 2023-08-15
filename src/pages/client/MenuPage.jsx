import { Box, Typography } from '@mui/material'
import React from 'react'
import MenuCard from '../../components/MenuCard/MenuCard'
import { MenuData } from '../../DB/MenuData'

const MenuPage = () => {
  return (
    <Box id='Menu'>
      <Typography component='h6' variant='h6'>Specialties</Typography>
      <Typography component='h5' variant='h4'>Our Menu</Typography>
      <Box className="menu-container">
      {
        MenuData.length ? MenuData.map(item=><MenuCard key={item.id} MenuItem={item}/>) : <Typography component='p'> No Items</Typography>
      }
      </Box>
    </Box>
  )
}

export default MenuPage