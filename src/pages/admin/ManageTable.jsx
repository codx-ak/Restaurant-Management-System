import { Container, Typography } from '@mui/material'
import React from 'react'
import TableCard from '../../components/Admin/TableCard'

const ManageTable = () => {
  return (
    <Container>
      <Typography className='first-title' variant='h6'>Orders</Typography>
      <Typography  className='second-title' variant='h4'>A Culinary Journey Awaits!</Typography>
      <TableCard/>
    </Container>
  )
}

export default ManageTable