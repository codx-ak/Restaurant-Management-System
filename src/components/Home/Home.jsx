import React from 'react'
import {Box,Typography,Button, Container} from '@mui/material'
import HomeImg from '../../assets/images/4034081.jpg'
import '../../assets/css/homePage.css'

const Home = () => {
  return (
    <Container id='Home-Page'>
    <Box className='content'>
      <Typography component='h3' variant='h4'>Welcome !</Typography>
      <Typography component='p'>Where Every Bite Tells a Delicious Story!</Typography>
      <Button variant='contained' type='button'>Book Now</Button>
    </Box>
    <Box className='image'>
      <img src={HomeImg} alt={HomeImg} loading='lazy'/>
    </Box>
    </Container>
  )
}

export default Home