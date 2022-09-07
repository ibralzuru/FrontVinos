import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';


export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="sticky">
                <Toolbar>
                    <IconButton
 
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        The Win-Nard
                    </Typography>
                    <Button color="inherit"> <strong>Register</strong></Button>
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
