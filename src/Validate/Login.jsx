import React from 'react'
import { Box, Button, Card, Checkbox, Container, FormControlLabel, TextField, Typography} from '@mui/material'
import {useForm} from "react-hook-form"
import './auth.css'
import { Link } from 'react-router-dom'
import {ArrowForward } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AuthLogin } from '../Store/AuthSlice'

const Login = () => {

  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors}}=useForm()

    const  AuthCheck=(data)=>{
      //validate user details
        if(data.Email==='user@gmail.com'){
            if(data.Psw==='user'){
                navigate('/home')
                //calling login function
                dispatch(AuthLogin())
                alert("User Login Successfully")
            }
        }
        else if(data.Email==='admin@gmail.com'){
            if(data.Psw==='admin'){
                navigate('/admin')
                //calling login function
                dispatch(AuthLogin())
                alert("Admin Login Successfully")
            }
        }
        else alert("User Details MissMatched !")
    }

  return (
    <Container className='Auth'>
        <Typography className='first-title' variant='h6'>Sign In</Typography>
      <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",height:550}}>
    <form action="" method="post" onSubmit={handleSubmit(AuthCheck)}>
      <Card className='card' variant='outlined'>
      <TextField {...register("Email",{required:"Enter Email"})} error={errors.Email?true:false} variant='standard'  label="Enter Email" type='email'/>
      <TextField {...register("Psw",{required:"Enter Password"})} error={errors.Psw?true:false} variant='standard'  label="Enter Password" type='password'/>
      <FormControlLabel sx={{marginRight:25}} control={<Checkbox color="success"/>} label="Remember Me" />
      <Box sx={{width:"100%",display:'flex',justifyContent:"space-around",alignItems:"center"}}>
      <Link to='/register'><Button variant='text'>Create Account</Button></Link>
      <Button variant='contained' type='submit' endIcon={<ArrowForward/>} >Login</Button>
      </Box>
    </Card>
    </form>
    </Box>
    </Container>
  )
}

export default Login