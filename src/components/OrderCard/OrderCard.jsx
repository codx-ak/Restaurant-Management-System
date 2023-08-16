import { Box, Button, Card, IconButton, Typography } from '@mui/material'
import React from 'react'
import './orders.css'
import { Link } from 'react-router-dom'
import {Clear } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { RemoveOrder } from '../../Store/OrderSlice'
import { useNavigate } from 'react-router-dom'
const OrderCard = ({order}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
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
        <IconButton onClick={()=>dispatch(RemoveOrder({id:order.id}))} size='small'><Clear/></IconButton> 
    </Card>
  )
}

export default OrderCard