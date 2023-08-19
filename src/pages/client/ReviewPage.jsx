import React from 'react'
import ReviewCard from '../../components/Review/ReviewCard'
import { Box, Container, Typography } from '@mui/material'
import Reviews from '../../components/Review/Reviews'
import { ReviewDB } from '../../DB/Review'

const ReviewPage = () => {
  return (
    <Box>
      <Typography className='first-title' variant='h6'>Review</Typography>
      <Typography className='second-title' variant='h4'>Savor, Share, Shape Our Taste</Typography>
      <Container className='ReviewPage'>
        <Box className='Reviews-items'> 
          {
            //Reviews data mapping
            ReviewDB.length ? ReviewDB.map((data,index)=>{
              return(<Reviews key={index} Data={data}/>)
            }) : ''
          }
        </Box>
        {/* Review Form  */}
      <ReviewCard/>
      </Container>
    </Box>
  )
}

export default ReviewPage