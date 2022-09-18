import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from '../Product';
import { Typography } from '@mui/material';

const Carrito = () => {
  return (


    
    <Box sx={{ flexGrow: 1 }}>

<Typography variant="h4" color="ActiveBorder" textAlign={"center"} padding={4}  >
        Su compra 
      </Typography>




      <Grid container spacing={{ xs: 2, md: 2, sm: 2 }} columns={{ xs: 12, sm: 12, md: 12, lg: 16 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Product />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Carrito;
