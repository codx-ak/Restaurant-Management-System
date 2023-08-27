import { Box, Card,Rating,Typography } from '@mui/material'
import React from 'react'
import avatar from '../../assets/images/avatar.png'

const Reviews = ({Data}) => {
  return (
   <Card variant='outlined' className='review-item'>
    <Box>
      <Box sx={{display:'flex',gap:'10px',alignItems:'center'}}><img src={avatar} alt={avatar} /><Typography variant='h6'>  {Data.customer_name}</Typography></Box>
        <Typography component='div' align='right'><Rating precision={0.5} readOnly size='small' value={Number(Data.rating)}/> </Typography>
        <Typography component='p'>{Data.feedback_text}</Typography>
    </Box>
   </Card>
  )
}

export default Reviews