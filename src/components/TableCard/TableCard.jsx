import React from 'react'
import {useForm} from 'react-hook-form'
import { Button,TextField} from '@mui/material'
import './table.css'
import SideImg from '../../assets/images/4034081.jpg'
const TableCard = () => {
  const {register,handleSubmit,formState:{errors}}=useForm()
  const onSubmit=(data)=>{
    console.log(data);
  }
  return (
    <div className="BookingForm">
      <img src={SideImg} alt="" />
      <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>

        <TextField 
        {...register('name',{required:"Name Field Required"})} 
        type='text' label="Name" color="success" autoComplete='true' error={errors.name ? true :false} variant="outlined" />

        <TextField 
        {...register('email',{required:"Email Field Required"})} 
        type='email' label="Email" autoComplete='true' error={errors.email ? true :false} color="success" variant="outlined" />
        
        <TextField 
        {...register('mobile',{required:"Mobile Field Required",
        maxLength:{value:13,message:"Maximun 13 Characters"},
        minLength:{value:10,message:"Minimun 10 Characters"}})} 
        type='number' autoComplete='true' error={errors.mobile ? true :false} label="Mobile" color="success" variant="outlined" />

        <TextField 
        {...register('checkin',{required:"Check-in Field Required"})} 
        type='date' autoComplete='true'  error={errors.checkin ? true :false} label="Check-In" color="success" variant="outlined" />

        <TextField 
        {...register('time',{required:"Time Field Required"})} 
        type='time' autoComplete='true' label="Time" error={errors.time ? true :false} color="success" variant="outlined" />
        
        <TextField 
        {...register('guest',{required:"guest Field Required",minLength:{value:1,message:"Minimun 1 Characters"}})} 
        type='number' autoComplete='true' label="Guest" error={errors.guest ? true :false} color="success" variant="outlined" />

        <Button type='submit' variant="contained">Create Account</Button>

      </form>
    
    </div>
  )
}

export default TableCard