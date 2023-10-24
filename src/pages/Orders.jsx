import React from 'react'
import OrderCard from '../components/OrderCard/OrderCard'
import {Box, Typography } from '@mui/material'
import { BookingUpdate, TableFilterByStatus } from '../API/Table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Loader from '../components/Loading/Loading'
import { toast } from 'react-toastify'

const ManageBooking = () => {
  const queryClient = useQueryClient();

  const { isLoading, data } = useQuery({
    queryKey: ["booking"],
    queryFn: TableFilterByStatus,
  });

  const { mutateAsync: deleteBookingMutation } = useMutation({
    mutationFn: BookingUpdate,
    onSuccess: () => {
      queryClient.invalidateQueries(["booking"]);
      toast.error("Table Booking Cancel!");
    },
  });

  const BookingData=data || []
  return (
    <Box className='orders'>
      <Typography className='first-title' variant='h6'>Orders</Typography>
      <Typography className='second-title' variant='h4'>Your Journey to Flavor Begins Here!</Typography>
      <Box className='orders-container'>
        {
          isLoading && <Loader/>
        }
      {
        // Table Booked Data Mapping
        BookingData.length ? BookingData.map((data,index)=><OrderCard key={index} OrderData={{data,deleteBookingMutation}}/>) 
        :<Typography sx={{textAlign:'center',color:'lightgray',fontSize:'30px',padding:'40px 0'}} component='p'> No Bookings Found</Typography>
      }
      </Box>
    </Box>
  )
}

export default ManageBooking