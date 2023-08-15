import React from 'react'
import {Box,Typography,Button} from '@mui/material'
import './homePage.css'

const Home = () => {
  return (
    <Box className='content'>
      <Typography component='h6' variant='h6'>Satisfy Your Cravings</Typography>
      <Typography component='h2' variant='h2'>Delicious Foods With Wonderful Eating</Typography>
      <Typography component='p'>Where Every Bite Tells a Delicious Story!</Typography>
      <Button variant='contained' type='button'>Book Table Now</Button>
    </Box>
  )
}

export default Home