import React from 'react'
import { Box, Button, Card, Container, Rating, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import {Send } from '@mui/icons-material'
import './review.css'
import { Link } from 'react-router-dom'

const ReviewCard = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()

  return (
    <Container className='contact'>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit((e)=>console.log(e))}>
      <Card className='card' variant='outlined'>
      <TextField {...register("Name",{required:"Enter Name"})} autoComplete='true' error={errors.Name?true:false} variant='standard'  label="Name" type='text'/>
      <TextField {...register("Email",{required:"Enter Email"})} autoComplete='true' error={errors.Email?true:false} variant='standard'  label="Email" type='email'/>
      <TextField {...register("message",{required:"Enter message"})} multiline sx={{width:'350px'}}
          maxRows={4} error={errors.message?true:false} variant='standard'  label="Message" type='text'/>
      <Typography component='p'> <span>Rating :</span> <Rating  aria-label='Rating' precision={0.5}/></Typography>
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Link to='/home'>
      <Button variant='text'>Cancel</Button>
      </Link>
      <Button variant='outlined' color='error' type='submit' startIcon={<Send/>} >Send</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default ReviewCard