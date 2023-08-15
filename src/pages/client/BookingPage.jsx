import React from 'react'
import TableCard from '../../components/TableCard/TableCard'
import { Container, Typography } from '@mui/material'
import '../../assets/css/booking.css'
const BookingPage = () => {
  return (
    <Container className='BookingPage'>
      <Typography component='h6' variant='h6'>Booking</Typography>
      <Typography component='h5' variant='h4'>Reserve Your Table: A Culinary Journey Awaits!</Typography>
      <TableCard/>
    </Container>
  )
}

export default BookingPage