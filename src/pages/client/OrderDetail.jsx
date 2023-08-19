import { Box, Button, Card,Typography } from '@mui/material'
import React from 'react'
import {useNavigate, useParams} from "react-router-dom";
import { useSelector } from 'react-redux';
import '../../components/OrderCard/orderDetail.css'
import { useDispatch } from 'react-redux'
import { BookingDelete } from '../../API/TableBooking';

const OrderDetail = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const onSubmit=(data)=>{
    //axios to delete the Booked Table
    dispatch(BookingDelete(data))
    //navigate to home
    navigate('/home')
  }
  //url param to get Order Id
  let { id } = useParams();
  const Data=useSelector(state=>state.OrderStore.value)
  // Order ID to filter the data in DB
  const FilteredData=Data.filter(order=>order.id == id)
  return (
    <Box className='OrderDetail' >
      <Typography className='first-title' variant='h6'>Summary</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      {
        Data.length? FilteredData.map(data=>{
          return(
            <Card className='detail-card' variant='outlined'>
              <Typography variant='h6' align='center' padding={1} component='div'>Booking Summary</Typography>
              <Typography component='li'>Order : {data.Order}</Typography>
              <Typography component='li'>Table : {data.Table}</Typography>
              <Typography component='p'>Name : {data.name}</Typography>
              <Typography component='p'>Email : {data.email}</Typography>
              <Typography component='p'>Mobile : {data.mobile}</Typography>
              <Typography component='p'>Check-In : {data.checkIn}</Typography>
              <Typography component='p'>Time : {data.time}</Typography>
              <Typography component='p'>Guest : {data.guest}</Typography>
              <Typography component='p'>Booked : {data.booked}</Typography>
              <Typography component='p'>Status : {data.status}</Typography>
              <Box sx={{display:'flex',alignItems:'center',padding:1,justifyContent:'end'}}>
               <Button onClick={()=>onSubmit(data.Table)} color='error' type='button' variant='contained'>Cancel Booking</Button>
              </Box>
              
            </Card>
                )
        }) : <Typography component='p'> No Items</Typography>
      }

    </Box>
  )
}

export default OrderDetail