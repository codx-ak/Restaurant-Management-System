import { Box, Card,Rating,Typography } from '@mui/material'
import React from 'react'
import avatar from '../../assets/images/avatar.png'

const Reviews = ({Data}) => {
  return (
   <Card sx={{ boxShadow: 1 }} variant='outlined' className='review-item'>
    <img src={avatar} alt={avatar} />
    <Box>
        <Typography variant='h6'>{Data.customer_name}</Typography>
        <Typography component='div'><Rating precision={0.5} readOnly value={Number(Data.rating)}/> </Typography>
        <Typography component='p'>{Data.feedback_text}</Typography>
    </Box>
   </Card>
  )
}

export default Reviews