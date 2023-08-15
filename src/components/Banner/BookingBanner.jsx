import { Box, Typography } from '@mui/material'
import React from 'react'
import './banner.css'

const BookingBanner = () => {
  return (
    <Box className='BookingBanner'>
        <Typography variant='subtitle1' component='p'>NOW BOOKING</Typography>
        <Typography variant='h3'>Private Dinners & Happy Hours</Typography>
    </Box>
  )
}

export default BookingBanner