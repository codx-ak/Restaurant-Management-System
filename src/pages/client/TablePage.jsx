import { Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import TableLayout from '../../components/TableLayout/TableLayout'
import { Table } from '../../DB/Table'

const TablePage = () => {

  return (
    <Container className='Table-page'>
      <Typography className='first-title' variant='h6'>Table Overview</Typography>
      <Typography className='second-title' variant='h4'>A Culinary Journey Awaits!</Typography>
      {
        Table?<TableLayout table={Table}/> :<Typography sx={{textAlign:'center',color:'lightgray',fontSize:'30px',padding:'40px 0'}} component='p'> No Tables Available</Typography>
      }
      
    </Container>
  )
}

export default TablePage







