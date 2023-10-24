import { Card, Rating, Typography } from '@mui/material'
import React from 'react'

const MenuItem = ({item}) => {
  return (
    <Card variant='outlined' sx={{borderRadius:'15px'}} className='MenuSingleCard'>
      <img src={item.image} alt={item.name} loading='lazy'/>
      <Typography component='div' variant='h6'>{item.name}</Typography>
      <Rating value={4.5} precision={0.5} size='small'/>
      <Typography component='p'>{item.description}</Typography>
      <Typography className='card-price' variant='h6' component='div'>$ {item.price}</Typography>
    </Card>
  )
}

export default MenuItem