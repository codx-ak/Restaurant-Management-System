import React from 'react'
import ReviewCard from '../../components/Review/ReviewCard'
import { Box, Typography } from '@mui/material'

const ReviewPage = () => {
  return (
    <Box className='ReviewPage'>
      <Typography component='h6' variant='h6'>Review</Typography>
      <Typography component='h5' variant='h4'>Savor, Share, Shape Our Taste</Typography>
      <ReviewCard/>
    </Box>
  )
}

export default ReviewPage