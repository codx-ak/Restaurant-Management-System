import { Box, Button, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import './bookingcard.css'
import { Link } from 'react-router-dom'
const BookingCard = ({order}) => {
  return (
    <Card variant='outlined' className='BookingCard'>
        <Box>
        <Typography variant='h6' component='div'>{order.name}</Typography>
        <Typography component='p'>Order : {order.Order}</Typography>
        <Typography component='p'>Table  : {order.Table}</Typography>
        </Box>
        <Link to={`${order.Order}`}>
        <Button variant='outlined'>view Order</Button>
        </Link>
        <IconButton>X</IconButton>
    </Card>
  )
}

export default BookingCard