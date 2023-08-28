import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthLogout } from '../Store/AuthSlice'

const Logout = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
      //calling logout funtions
        dispatch(AuthLogout())
        //navigate home page
        navigate('/')
    })
  return
}

export default Logout