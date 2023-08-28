import React, { useEffect, useState } from 'react'
import ReviewCard from '../../components/Review/ReviewCard'
import { Box, Container, Typography } from '@mui/material'
import Reviews from '../../components/Review/Reviews'
import { feedbackGet } from '../../API/feedback'
const ReviewPage = () => {
  const [reviews,setReviews]=useState([])
  useEffect(()=>{
    //getting feedback Data with Api
    feedbackGet().then(res=>setReviews(res))
  },[])
  return (
    <Box>
      <Typography className='first-title' variant='h6'>Review</Typography>
      <Typography className='second-title' variant='h4'>Savor, Share, Shape Our Taste</Typography>
      <Container className='ReviewPage'>
        <Box className='Reviews-items'>
          {
            //Reviews data mapping
            reviews.length ? reviews.map((data,index)=>{
              return(<Reviews key={index} Data={data}/>)
            }) : ''
          }
        </Box>
        <Typography sx={{display:'none'}} className='comment-text' variant='h6'>Comments</Typography>
        {/* Review Form  */}
      <ReviewCard/>
      </Container>
    </Box>
  )
}

export default ReviewPage