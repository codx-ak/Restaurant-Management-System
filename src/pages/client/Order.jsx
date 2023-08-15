import { Card, Container, Typography } from '@mui/material'
import React from 'react'

const Order = () => {
  return (
    <Container >
      <Card variant='outlined'>
        <Typography component='h4'>Order Summary</Typography>
        <Typography component='span'>Order : 1234567</Typography>
        <Typography component='span'>Table : 23</Typography>
        <Typography component='div'>Name</Typography>
        <Typography component='p'>Email : drftgyhuji</Typography>
        <Typography component='p'>Mobile : 2345</Typography>
        <Typography component='p'>Check-In : d23</Typography>
        <Typography component='p'>Time : 4556</Typography>
        <Typography component='p'>Guest : 3</Typography>
        <Typography component='p'>Booked : 3345</Typography>
        <Typography component='p'>Check-Out : 34566</Typography>
      </Card>
    </Container>
  )
}

export default Order