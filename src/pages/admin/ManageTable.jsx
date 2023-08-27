import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TableCard from '../../components/Admin/TableCard'
import { TableFilterByStatus } from '../../API/Table'

const ManageTable = () => {
  const[Table,setTable]=useState([])
  useEffect(()=>{
    setTable(TableFilterByStatus)
    console.log(TableFilterByStatus)
  },[])
  return (
    <Container>
      <Typography className='first-title' variant='h6'>Orders</Typography>
      <Typography  className='second-title' variant='h4'>A Culinary Journey Awaits!</Typography>
      {
        Table.length ?<TableCard Booking={Table}/> :<Typography component='p'> No Items</Typography>
      }
    </Container>
  )
}

export default ManageTable