import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, IconButton, Badge } from '@mui/material';
import { Link } from "react-router-dom";
import { ShoppingCart } from '@mui/icons-material';
import { getCarrito } from '../containers/ProductDetail/carritoSlice';
import { useSelector, /* useDispatch */ } from 'react-redux';
import {userData/* , logOut */} from '../userSlice'

export default function Navbar() {
  const cart = useSelector(getCarrito);
  const productsInCart = cart.products.length
  const credential = useSelector(userData);
  console.log("holaaaaa",credential.token) 
  console.log('merdaaaa', credential)

   if (!credential.token){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Virtual Wine
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
                <Badge badgeContent={productsInCart}>
                  <ShoppingCart />
                </Badge>
              </Link>
            </Button>
            <IconButton color="inherit">
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
              Virtual Wine
            </Typography>
            <Button >
              <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/'>
                Home
              </Link>
            </Button>
            <Button >
              <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/update/profile/'>
                Perfil
              </Link>
            </Button>
            <Button >
              <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/login'>
                Login
              </Link>
            </Button>
            <Button >
              <Link style={{ textDecoration: 'none', color: 'white', fontWeight: '600' }} to='/carrito'>
                <Badge badgeContent={productsInCart}>
                  <ShoppingCart />
                </Badge>
              </Link>
            </Button>
            <IconButton color="inherit">
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}