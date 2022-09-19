import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { Link } from "react-router-dom";

const flexContainer = {
  display: 'flex',
  flexDirection: 'row',
  marginTop: '32px',
};

const MenuBurguer = () => {
  return (
    <List component='nav' style={flexContainer}>
      <ListItem button component={Link} to="/">
        <ListItemText>
          Virtual-Wine
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/registro">
        <ListItemText>
          Registro
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/login">
        <ListItemText>
          Login
        </ListItemText>
      </ListItem>
      <ListItem button component={Link} to="/carrito">
        <ListItemText>
          Carrito
        </ListItemText>
      </ListItem>
      <Divider />
    </List>
  )
}

export default MenuBurguer