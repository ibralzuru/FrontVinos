import React from 'react';
import { Box, Grid, Button, Stack } from '@mui/material';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';
import { getCarrito } from '../../containers/ProductDetail/carritoSlice';

const Carrito = () => {
  const cart = useSelector(getCarrito);
  let montoTotal = 0
  cart.products.forEach(product => {
    montoTotal += parseFloat(product.precio)
  })

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h4" color="ActiveBorder" textAlign="center" padding={4}  >
        Su compra
      </Typography>

      <Stack>
        {cart.products.map((product, index) => (
          <Stack direction="row" justifyContent="center" alignItems="center" key={`${product.id}-${index}`}>
            <Typography variant="h5" padding={2}  >
              {product.name}
            </Typography>
            <Typography variant="h5" padding={2}  >
              Precio: {product.precio}
            </Typography>
            <Typography variant="h5" padding={2}  >
              Unidades: {product.unidades}
            </Typography>
          </Stack>
        ))}
      </Stack>


      <Typography variant="h5" padding={4} textAlign="center" >
        Total: {montoTotal} EUR
      </Typography>
      <Grid container justify="center" mt={2}>
        <Button variant="contained" sx={{ margin: '0 auto' }} >
          Realizar pedido
        </Button>
      </Grid>
    </Box >
  )
}

export default Carrito;