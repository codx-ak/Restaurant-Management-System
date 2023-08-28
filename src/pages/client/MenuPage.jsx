import { Box,Typography,Container } from '@mui/material'
import React from 'react'
import MenuItem from '../../components/MenuCard/MenuItem'
import { useSelector } from 'react-redux'

const MenuPage = () => {
  //getting Menu Data from Menu Store
  const Menu=useSelector(state=>state.MenuStore.value.menuData)
  return (
    <Box id='Menu'>
      <Typography className='first-title' variant='h6'>Menu</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      {
        // Home Page Menu Mapping
        Menu.length ? Menu.map((item,index)=>{
        return(
          <Container  key={index} sx={{padding:2}}>
            <Typography component='div' variant='h5' sx={{padding:2}}>{item.section_name}</Typography>
            <div className='MenuSingleContainer'>
            {
              item.items && item.items.map((menuItem,index)=><MenuItem key={index} item={menuItem}/>)
            } 
            </div>
          </Container>
      )}) : <Typography component='p'> No Items</Typography>
      }
      </Box>
  )
}

export default MenuPage