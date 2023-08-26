import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const TableCard = ({Booking}) => {
    
  return (
    <TableContainer sx={{padding:2}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
                <TableCell align='center'>Table No</TableCell>
                <TableCell align='center'>Booking ID</TableCell>
                <TableCell align='center'>Name</TableCell>
                <TableCell align='center'>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
                Booking && 
                        <TableRow key={Booking.Table} hover  tabIndex={-1}>
                        <TableCell align='center'>{Booking.Table}</TableCell>
                        <TableCell align='center'>{Booking.Order}</TableCell>
                        <TableCell align='center' >{Booking.name}</TableCell>
                        <TableCell align='center'><Link to=''><Button variant='contained'>view</Button></Link></TableCell>
                        </TableRow>
                    
            }
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableCard