import React from 'react'
import BookingCard from '../../components/BookingCard/BookingCard'
import { Box, Container, Typography } from '@mui/material'
import { Orders } from '../../DB/Orders'
const ManageBooking = () => {
  return (
    <Container className='orders'>
      <Typography component='h6' variant='h6'>Orders</Typography>
      <Typography component='h5' variant='h4'>Indulge Your Cravings, One Bite at a Time!</Typography>
      {
        Orders.length ? Orders.map((order,index)=><BookingCard key={index} order={order}/>) :<Typography component='p'> No Items</Typography>
      }
    </Container>
  )
}

export default ManageBooking