import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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

export default Products