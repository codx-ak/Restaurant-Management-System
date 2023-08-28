import React, { useEffect, useState } from 'react'
import OrderCard from '../../components/OrderCard/OrderCard'
import {Box, Typography } from '@mui/material'
import { TableFilterByStatus } from '../../API/Table'

const ManageBooking = () => {
  const[BookingData,setBooking]=useState([])
  useEffect(()=>{
    //filter with status in table Api
    TableFilterByStatus().then(item=>setBooking(item))
  },[])
  return (
    <Box className='orders'>
      <Typography className='first-title' variant='h6'>Orders</Typography>
      <Typography className='second-title' variant='h4'>Your Journey to Flavor Begins Here!</Typography>
      <Box className='orders-container'>
      {
        // Table Booked Data Mapping
        BookingData.length ? BookingData.map((order,index)=><OrderCard key={index} order={order}/>) 
        :<Typography sx={{textAlign:'center',color:'lightgray',fontSize:'30px',padding:'40px 0'}} component='p'> No Bookings Found</Typography>
      }
      </Box>
    </Box>
  )
}

export default ManageBooking