import { Button, Card, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import '../../components/TableLayout/tablelayout.css'
import { TableFilterById } from '../../API/Table';

const TableDetail = () => {
    const[Table,setTable]=useState([])
    // url to getting Table Id
    let { id } = useParams();
    useEffect(()=>{
        TableFilterById(id).then(item=>setTable([item]))
    },[id])
    
  return (
    <Container className='Table-Detail'>
        <Typography className='first-title' variant='h6'>Table</Typography>
        <Typography className='second-title' variant='h4'>Discover Our Flavorful Symphony!</Typography>
        {
            // Filterd Data Mapping
            Table.length ? Table.map((table,index)=>{
                return (
                    <Card variant='outlined' key={index} className='table-detail-card'>
                        <Typography component='div' align='center' padding={2} variant='h5'>Table Overview</Typography>
                        <Typography component='p'>Table No : {table.table_no}</Typography>
                        <Typography component='p'>Seat Count : {table.seating_capacity}</Typography>
                        <Typography component='p'>Status : {table.status}</Typography>
                        <Typography component='p'>Reserved : {table.reservation.name || " NA "}</Typography>
                        {
                            // checking Table is available or booked 
                            table.status==="Available" && <Typography component='div'><Link to='/booking'>
                                <Button color='error' variant='outlined'>Book Now</Button>
                                </Link></Typography>
                        }
                    </Card>
                )
            }) :<Typography sx={{textAlign:'center',color:'lightgray',fontSize:'30px',padding:'40px 0'}} component='p'> No Tables Available</Typography>
        }
      
    </Container>
  )
}

export default TableDetail