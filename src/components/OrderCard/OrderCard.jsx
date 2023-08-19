import { Box, Button, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import './orders.css'
import { Link } from 'react-router-dom'
import {Clear } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { BookingDelete } from '../../API/TableBooking'

const OrderCard = ({order}) => {
  const dispatch=useDispatch()
  const onSubmit=(data)=>{
    // Booked Table Cancel With Api
    dispatch(BookingDelete(data))
  }
    return (
    <Card variant='outlined' className='order-card'>
        <Box>
        <Typography variant='h6' component='div'>{order.name}</Typography>
        <Typography component='p'>Order : {order.Order}</Typography>
        <Typography component='p'>Table  : {order.Table}</Typography>
        </Box>
        <Link to={`${order.id}`}>
        <Button color='secondary' variant='outlined'>view Table</Button>
        </Link>
        <IconButton onClick={()=>onSubmit(order.Table)} size='small'><Clear/></IconButton> 
    </Card>
  )
}

export default OrderCard