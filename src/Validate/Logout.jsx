import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AuthLogout } from '../Store/AuthSlice'

const Logout = () => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(AuthLogout())
        navigate('/')
    })
  return (
    <div>Logout</div>
  )
}

export default Logout