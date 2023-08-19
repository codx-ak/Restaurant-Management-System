import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TableCard = () => {
    const [Order,setOrder]=useState([])

    useEffect(()=>{
      //Local Storage to Get the Booking Details 
        const Result=localStorage.getItem("table")
        setOrder(JSON.parse(Result))
    },[localStorage])
  return (
    <TableContainer sx={{padding:2}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align='center'>Table No</TableCell>
                <TableCell align='center'>Order ID</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                Order && 
                        <TableRow key={Order.Table} hover  tabIndex={-1}>
                        <TableCell align='center'>{Order.Table}</TableCell>
                        <TableCell align='center'>{Order.Order}</TableCell>
                        <TableCell align='center' >{Order.name}</TableCell>
                        <TableCell align='center'><Link to=''><Button variant='contained'>view</Button></Link></TableCell>
                        </TableRow>
                    
            }
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableCard