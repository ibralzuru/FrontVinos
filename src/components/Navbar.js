import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <IconButton
            
            size="large"
            edge="start"
            color="warning"
            aria-label="menu"
            
            sx={{ mr: 7 }}
          >
            <MenuIcon />
          </IconButton >
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Virtual-Wine
          </Typography>
          <Button >
            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/'>
              Home
            </Link>
          </Button>
          <Button >
            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/registro'>
              Registro
            </Link>
          </Button>
          <Button >
            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/login'>
              Login
            </Link>
          </Button>
          <Button >
            <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/carrito'>
              Carrito
            </Link>
          </Button>
          
          <IconButton color="inherit">
            <Badge badgeContent={21}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}