import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import './nav.css'

export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1,marginBottom:10 }}>
      <AppBar sx={{backgroundColor:'white'}}>
        <Toolbar>
          <Typography variant="h5" color='error' component="div" sx={{ flexGrow: 1 }}>
            Codx.
          </Typography>
            <div>
            <Badge color="secondary" variant="dot">
                <Link to='/orders'><LocalMallIcon/></Link>
              </Badge>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="secondary"
              >
                <WidgetsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to='/home'><Typography component='li'>Home</Typography></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/menu'><Typography component='li'>Menu</Typography></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/table-overview'><Typography component='li'>Table</Typography></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/booking'><Typography component='li'>Reservation</Typography></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/feedback'><Typography component='li'>Reviews</Typography></Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to='/admin'><Typography component='li'>Admin</Typography></Link></MenuItem>
              </Menu>
            </div>
            </Toolbar>
      </AppBar>
    </Box>
  );
}