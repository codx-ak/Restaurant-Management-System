import { Button, Card, Container, Typography } from '@mui/material'
import React from 'react'
import {useParams} from "react-router-dom";
import { Link } from 'react-router-dom';
import { Table } from '../../DB/Table';
import '../../components/TableLayout/tablelayout.css'

const TableDetail = () => {
    let { id } = useParams();
    const FilteredData=Table.filter(table=>table.tableNo == id)
  return (
    <Container className='Table-Detail'>
        <Typography component='h6' variant='h6'>Table</Typography>
        <Typography component='h5' variant='h4'>Discover Our Flavorful Symphony!</Typography>
        {
            FilteredData.length ? FilteredData.map((table,index)=>{
                return (
                    <Card variant='outlined' className='table-detail-card'>
                        <Typography component='div' align='center' padding={2} variant='h5'>Table Overview</Typography>
                        <Typography component='p'>Table No : {table.tableNo}</Typography>
                        <Typography component='p'>Seat Count : {table.seatingCapacity}</Typography>
                        <Typography component='p'>Status : {table.status}</Typography>
                        <Typography component='p'>Reservation : {table.reservation.name || "Not Booked"}</Typography>
                        {
                            table.status=="Available" && <Typography component='div'><Link to='/booking'>
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