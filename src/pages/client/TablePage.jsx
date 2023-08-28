import { Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TableLayout from '../../components/TableLayout/TableLayout'
import { TableData} from '../../API/Table'

const TablePage = () => {
  const[Table,setTable]=useState([])
 useEffect(()=>{
  //getting details with Api
  TableData().then(item=>setTable(item))
},[])
  return (
    <Container className='Table-page'>
      <Typography className='first-title' variant='h6'>Table Overview</Typography>
      <Typography className='second-title' variant='h4'>A Culinary Journey Awaits!</Typography>
      {
        //Table Details  mapping in Layout
        Table? <TableLayout table={Table}/> :<Typography sx={{textAlign:'center',color:'lightgray',fontSize:'30px',padding:'40px 0'}} component='p'> No Tables Available</Typography>
      }
      
    </Container>
  )
}

export default TablePage







