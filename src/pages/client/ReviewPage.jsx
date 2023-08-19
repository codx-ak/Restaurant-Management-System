import React from 'react'
import ReviewCard from '../../components/Review/ReviewCard'
import { Box, Typography } from '@mui/material'

const ReviewPage = () => {
  return (
    <Box className='ReviewPage'>
      <Typography className='first-title' variant='h6'>Review</Typography>
      <Typography className='second-title' variant='h4'>Savor, Share, Shape Our Taste</Typography>
      <ReviewCard/>
    </Box>
  )
}

export default ReviewPage