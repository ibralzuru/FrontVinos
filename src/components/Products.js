import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Product from './Product';
import { Typography } from '@mui/material';

const Products = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="ActiveBorder" padding={5} textAlign="center">
        Nuestros Vinos
      </Typography>
      <Grid container spacing={{ xs: 6, md: 3, sm: 2 }} columns={{ xs: 6, sm: 12, md: 12, lg: 16 }}>
        {Array.from(Array(10)).map((_, index) => (
          <Grid key={index} item xs={6} sm={6} md={4} lg={3} >
            <Product />
          </Grid>
        ))}
      </Grid>

    </Box>

  )
}

export default Products;