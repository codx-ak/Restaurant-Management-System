import { Box, Button, Card,Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useNavigate, useParams} from "react-router-dom";
import '../../components/OrderCard/orderDetail.css'
import { useDispatch } from 'react-redux'
import { TableFilterById } from '../../API/Table';
import { CancelBooking } from '../../Store/TableSlice';

const OrderDetail = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const[Table,setTable]=useState([])
    
  // url to getting Table Id
    let { id } = useParams();
    useEffect(()=>{
        TableFilterById(id).then(item=>setTable([item]))
    },[id]) 

  const onSubmit=(data)=>{
    //axios to delete the Booked Table
    dispatch(CancelBooking(data))
    //navigate to home
    navigate('/home')
  }
  return (
    <Box className='OrderDetail' >
      <Typography className='first-title' variant='h6'>Summary</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      {
        Table.length? Table.map((data,index)=>{
          return(
            <Card className='detail-card' key={index} variant='outlined'>
              <Typography variant='h6' align='center' padding={1} component='div'>Booking Summary</Typography>
              <Typography component='li'>Order : {data.reservation.Order}</Typography>
              <Typography component='li'>Table : {data.table_no}</Typography>
              <Typography component='p'>Name : {data.reservation.name}</Typography>
              <Typography component='p'>Email : {data.reservation.email}</Typography>
              <Typography component='p'>Mobile : {data.reservation.mobile}</Typography>
              <Typography component='p'>Check-In : {data.reservation.checkIn}</Typography>
              <Typography component='p'>Time : {data.reservation.time}</Typography>
              <Typography component='p'>Guest : {data.reservation.guest}</Typography>
              <Typography component='p'>Booked : {data.reservation.booked}</Typography>
              <Typography component='p'>Status : {data.status}</Typography>
              <Box sx={{display:'flex',alignItems:'center',padding:1,justifyContent:'end'}}>
               <Button onClick={()=>onSubmit(data.table_no)} color='error' type='button' variant='contained'>Cancel Booking</Button>
              </Box>
              
            </Card>
                )
        }) : <Typography component='p'> No Items</Typography>
      }

    </Box>
  )
}

export default OrderDetail