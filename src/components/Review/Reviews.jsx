import { Box, Card,Rating,Typography } from '@mui/material'
import React from 'react'
import avatar from '../../assets/images/avatar.png'

const Reviews = ({Data}) => {
  return (
   <Card sx={{ boxShadow: 1 }} variant='outlined' className='review-item'>
    <img src={avatar} alt={avatar} />
    <Box>
        <Typography variant='h6'>{Data.name}</Typography>
        <Typography component='div'><Rating precision={0.5} value={Number(Data.rating)}/> </Typography>
        <Typography component='p'>{Data.message}</Typography>
    </Box>
   </Card>
  )
}

export default Reviews