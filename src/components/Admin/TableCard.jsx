import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
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
                Booking && Booking.map((data,index)=>{
                        return(<TableRow key={index} hover  tabIndex={-1}>
                        <TableCell align='center'>{data.table_no}</TableCell>
                        <TableCell align='center'>{data.reservation.Order}</TableCell>
                        <TableCell align='center' >{data.reservation.name}</TableCell>
                        <TableCell align='center'><Link to=''><Button variant='contained'>view</Button></Link></TableCell>
                        </TableRow>)})
                    
            }
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default TableCard