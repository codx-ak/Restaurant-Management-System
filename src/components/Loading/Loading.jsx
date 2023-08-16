import React from 'react'
import {Container} from '@mui/material'
import './loading.css'

const Loader = () => {
  return (
    <Container className='spinner'>
        <div className='item'></div>
    </Container>
  )
}

export default Loader