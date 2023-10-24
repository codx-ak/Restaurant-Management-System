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
import { Badge, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import TocIcon from '@mui/icons-material/Toc';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import './nav.css'
import { Authenticate } from '../../Validate/AuthContext';


export default function NavBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  //auth value checking
  const { IsAuth } = React.useContext(Authenticate);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar sx={{backgroundColor:'white'}} position='static'>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1,color:'#e52b34',fontSize:'30px' }}>
            Codx.
          </Typography>
            <div>
            <Badge color="warning" variant="dot">
                <Link to='/orders'><LocalMallIcon color="error"/></Link>
            </Badge>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="error"
                sx={{margin:'0 15px'}}
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
                <Link to='/home'><MenuItem onClick={handleClose}><Button startIcon={<HomeIcon/>}>Home</Button></MenuItem></Link>
                <Link to='/menu'><MenuItem onClick={handleClose}><Button startIcon={<RestaurantMenuIcon/>}>Menu</Button></MenuItem></Link>
                <Link to='/table-overview'><MenuItem onClick={handleClose}><Button startIcon={<TocIcon/>}>Tables</Button></MenuItem></Link>
                <Link to='/booking'><MenuItem onClick={handleClose}><Button startIcon={<BookOnlineIcon/>}>Bookings</Button></MenuItem></Link>
                {
                  IsAuth ?<Link to='/logout'><MenuItem onClick={handleClose}><Button startIcon={<AdminPanelSettingsIcon/>}>Logout</Button></MenuItem></Link>
                  : <Link to='/login'><MenuItem onClick={handleClose}><Button startIcon={<AdminPanelSettingsIcon/>}>Login</Button></MenuItem></Link>
                }
                
                
              </Menu>
            </div>
            </Toolbar>
      </AppBar>
    </Box>
  );
}