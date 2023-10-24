import { Box, Button, Card,Typography } from '@mui/material'
import React  from 'react'
import {useNavigate, useParams} from "react-router-dom";
import '../components/OrderCard/orderDetail.css'
import { BookingUpdate, TableFilterById } from '../API/Table';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Loader from '../components/Loading/Loading'
import { toast } from 'react-toastify';

const OrderDetail = () => {
  const navigate=useNavigate()

  const queryClient = useQueryClient();

    // url to getting Table Id
    let { id } = useParams();
  const { isLoading, data } = useQuery({
    queryKey: ["table-Details"],
    queryFn:()=> TableFilterById(id),
  });

  const { mutateAsync: deleteBookingMutation } = useMutation({
    mutationFn: BookingUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries(["table"]);
      toast.error("Table Booking Cancel!");
    },
  });

  const onSubmit=(id)=>{
    const data={reservation:{},status:"Available"}
    // console.log(id,data)
    deleteBookingMutation({id,data})

    //navigate to booking Page
    navigate('/orders')
  }
  return (
    <Box className='OrderDetail' >
      <Typography className='first-title' variant='h6'>Summary</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      {
        isLoading && <Loader/>
      }
      {
        data ? <Card className='detail-card' variant='outlined'>
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
         <Button onClick={()=>onSubmit(data.id)} color='error' type='button' variant='contained'>Cancel Booking</Button>
        </Box>
        
      </Card> : <Typography>No Items Found</Typography>
      }
      

    </Box>
  )
}

export default OrderDetail