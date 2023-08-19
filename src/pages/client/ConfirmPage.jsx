import { Clear } from '@mui/icons-material'
import { Button, Card, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../components/TableCard/booking.css'

const ConfirmPage = () => {
    const [Order,setOrder]=useState()

    useEffect(()=>{
        const Result=localStorage.getItem("table")
        setOrder(JSON.parse(Result))
    },[localStorage])
  return (
    <Container className='success-page'>
        {
            Order && 
            <Card variant='outlined' className='success-card'>
            <Typography component='div' sx={{textAlign:'end'}}><Link to='/orders'> <Button variant='text' endIcon={<Clear/>}>Close</Button></Link></Typography> 
            <Typography variant='h5' sx={{color:'#e52b34',textAlign:'center',padding:2}}>Booking Confirmation</Typography>
            <Typography component='p'>Order ID : {Order.Order}</Typography>
            <Typography component='p'>Table NO :{Order.Table}</Typography>
            <Typography component='p'> Name : {Order.name}</Typography>
            <Typography component='p'>Email : {Order.email}</Typography>
            <Typography component='p'>Mobile : {Order.mobile}</Typography>
            <Typography component='p'>Check-In : {Order.checkIn}</Typography>
            <Typography component='p'>Time :{Order.time}</Typography>
            <Typography component='p'> Guest : {Order.guest}</Typography>
            <Typography component='p'> Status : {Order.status}</Typography>
            </Card>
        }
    </Container>
  )
}

export default ConfirmPage